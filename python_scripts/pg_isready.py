import psycopg2

try:
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="app",
        user="postgres",
        password="password"
    )

    print("PostgreSQL OK")
    conn.close()

except Exception as e:
    print(
        "PostgreSQL FAILED:",
        e
    )