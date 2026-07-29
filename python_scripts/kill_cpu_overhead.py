import psutil

CPU_LIMIT = 90

for p in psutil.process_iter(['pid','name','cpu_percent']):
    try:
        cpu = p.cpu_percent()
        if (cpu > CPU_LIMIT):
            print(f"Killing {p.id}")
            p.kill()
    except:
        pass