import psycopg2 

conn = psycopg2.connect( "dbname=postgres user=postgres" ) 
cur = conn.cursor() 
cur.execute( """ SELECT count(*) FROM pg_stat_activity; """ ) 

connections = cur.fetchone()[0] 

print( "Connections:", connections )