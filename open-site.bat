@echo off
cd /d "%~dp0"
start "Web Hosting - Local Server" cmd /k "%~dp0start-server.bat"
timeout /t 2 /nobreak >nul
start "" "http://localhost:8080/"
