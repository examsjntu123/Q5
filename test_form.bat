@echo off
echo Testing Event Registration Form...
if exist index.html (
    echo index.html found
) else (
    echo ERROR: index.html missing
    exit /b 1
)
if exist script.js (
    echo script.js found
) else (
    echo ERROR: script.js missing
    exit /b 1
)
echo Basic file checks passed
exit /b 0