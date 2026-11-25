@echo off
setlocal
cd /d "%~dp0"
set "PORTFOLIO_BUN=%USERPROFILE%\.cherrystudio\bin\bun.exe"
if not exist "%PORTFOLIO_BUN%" set "PORTFOLIO_BUN=bun"
echo Starting local website preview at http://127.0.0.1:4322/zh/
echo Keep this window open while viewing. Press Ctrl+C to stop.
"%PORTFOLIO_BUN%" run preview --port 4322
pause
