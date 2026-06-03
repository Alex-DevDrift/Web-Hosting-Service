@echo off
cd /d "%~dp0"
echo.
echo  Web Hosting site - local server
echo  Open in browser: http://localhost:8080/
echo  Press Ctrl+C to stop.
echo.
python -m http.server 8080 2>nul
if errorlevel 1 (
  echo Python not found. Trying PowerShell...
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"
)
