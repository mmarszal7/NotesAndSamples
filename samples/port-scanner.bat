set /p port="What port you are looking for? "
netstat -ano | findstr %port%
set /p pid="PID of the process to kill? "
taskkill /P %pid% /F
