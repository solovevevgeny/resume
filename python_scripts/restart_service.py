import subprocess
from sys import argv

service = argv[1]

status = subprocess.check_output([
    "systemctl",
    "is-active",
    service
    ],
    text=True
    )

if status.strip() != "active":

    subprocess.run(
        [
            "systemctl",
            "restart",
            service
        ]
    )
    print("Restarted")