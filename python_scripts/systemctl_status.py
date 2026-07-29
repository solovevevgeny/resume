import subprocess

result = subprocess.run(
    ["systemctl", "status", "nginx"],
    capture_output=True,
    text=True
)

print(result.stdout)