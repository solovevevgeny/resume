import socket


servers = [
    ("localhost",80),
    ("localhost",5432),
    ("localhost",8080)
]


for host,port in servers:

    sock = socket.socket()

    sock.settimeout(2)

    try:
        sock.connect((host,port))
        print(
            f"{host}:{port} OK"
        )

    except:
        print(
            f"{host}:{port} DOWN"
        )

    finally:
        sock.close()