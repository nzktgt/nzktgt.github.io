import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const root = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
await fs.mkdir('.verification', {recursive:true});
const browser = await chromium.launch({channel:'chromium', headless:true});
const context = await browser.newContext();
const page = await context.newPage();
const errors=[];
page.on('pageerror', e=>errors.push(e.message));
const paths=['/','/zh/',...['village-plan','land-transactions','housing-prices','courier-stations'].flatMap(s=>[`/projects/${s}/`,`/zh/projects/${s}/`])];
const report={pages:[], layouts:[], accessibility:[], errors};
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
for(const path of paths){
 const response=await page.goto(root+path);
 assert(response?.ok(),`Failed page ${path}`);
 const links=await page.locator('a[href]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')).filter(h=>h.startsWith('/')));
 for(const href of [...new Set(links)]){
  const u=new URL(href,root); const res=await page.request.get(u.href.split('#')[0]);
  assert(res.ok(),`Broken link ${href} on ${path}`);
  if(u.hash && u.pathname===path) assert(await page.locator(`[id="${u.hash.slice(1)}"]`).count(),`Missing anchor ${href}`);
 }
 const missing=await page.locator('img[src]').evaluateAll(async imgs=>{await Promise.all(imgs.map(i=>{i.loading='eager';return i.decode().catch(()=>{})}));return imgs.filter(i=>!i.naturalWidth).map(i=>i.src)});
 assert(!missing.length,`Broken images: ${missing}`);
 report.pages.push({path,status:response.status(),links:'pass',images:'pass'});
}
for(const width of [1440,768,390,320,264]){
 for(const lang of ['en','zh']){
  await page.setViewportSize({width,height:950});await page.goto(root+(lang==='zh'?'/zh/':'/'));
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
  assert(!overflow,`Horizontal overflow ${lang} ${width}`);
  report.layouts.push({lang,width,overflow});
  if(width===1440||width===390){await page.locator('img[src]').evaluateAll(async imgs=>{await Promise.all(imgs.map(i=>{i.loading='eager';return i.decode().catch(()=>{})}));});await page.screenshot({path:`.verification/${lang}-${width}.png`,fullPage:true});}
 }
}
await page.setViewportSize({width:1440,height:950});
for(const path of ['/','/zh/','/projects/village-plan/']){
 await page.goto(root+path);
 const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 report.accessibility.push({path,violations:results.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
}
await page.goto(root+'/');
await page.getByRole('button',{name:'Enlarge: Grassroots governance social practice'}).click();
assert(await page.locator('dialog[open]').count()===1,'Dialog did not open');
await page.keyboard.press('Escape');assert(await page.locator('dialog[open]').count()===0,'Dialog did not close');
await page.locator('summary').click();assert(await page.locator('details[open]').count()===1,'Courses did not expand');
await page.getByRole('link',{name:'切换到中文'}).click();assert(page.url().endsWith('/zh/'),'Language switch failed');
await page.setViewportSize({width:390,height:844});
await page.getByRole('button',{name:'展开或收起导航'}).click();
assert(await page.locator('#main-nav').isVisible(),'Mobile menu not visible');
await page.locator('#main-nav').getByRole('link',{name:'项目成果'}).click();
assert(await page.locator('.menu-button').getAttribute('aria-expanded')==='false','Mobile menu not closed');
report.interactions='Image dialog, Escape, courses, language switch, mobile navigation: pass';
assert(!errors.length,`JS errors: ${errors}`);
await fs.writeFile('.verification/report.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
await browser.close();
assert(!report.accessibility.some(r=>r.violations.length),'Accessibility violations found');
