import psycopg2 

conn = psycopg2.connect( "dbname=postgres user=postgres" ) 
cur = conn.cursor() 
cur.execute( """ SELECT pid, now()-query_start AS duration, query FROM pg_stat_activity WHERE state='active' ORDER BY duration DESC; """ ) 

for row in cur.fetchall(): 
    print(row)