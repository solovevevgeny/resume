import psutil

for process in psutil.process_iter(['pid','name','cpu_percent']):
    print (process.info)