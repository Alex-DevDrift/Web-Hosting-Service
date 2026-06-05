@echo off
echo Starting Web Hosting Service (Next.js)...

:: Start the Next.js development server in a new command window
start "Next.js Server" cmd /c "npm run dev"

echo Waiting for the server to start (5 seconds)...
:: Wait for 5 seconds to give Next.js time to compile and start
timeout /t 5 /nobreak >nul

echo Opening browser...
:: Open the default browser to localhost
start http://localhost:3000
