import subprocess
from datetime import datetime


backup = (
    f"/backup/db_{datetime.now():%F}.sql"
)


subprocess.run(
    [
        "pg_dump",
        "-U",
        "postgres",
        "mydb"
    ],
    stdout=open(
        backup,
        "w"
    )
)

print("Backup complete")