import os
import time
from sys import argv

if (len(argv) > 1):
    FILES_DIR = argv[1];
    DAYS      = int(argv[2]);

    now = time.time()

    for file in os.listdir(FILES_DIR):
        path = os.path.join(FILES_DIR, file)

        if (os.path.isfile):
            age = now - os.path.getatime(path)

            if age > DAYS * 86400:
                print (f"Deleting file in {path} older {DAYS}")
                os.remove(path)
            else:
                print("Nothing to delete")
else:
    print("Please enter [path] and [days]: old_files_delete.py ./logs 10")