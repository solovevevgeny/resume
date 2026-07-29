cur.execute( """ SELECT blocked_locks.pid, blocked_activity.query FROM pg_locks blocked_locks JOIN pg_stat_activity blocked_activity ON blocked_activity.pid = blocked_locks.pid WHERE NOT blocked_locks.granted; """ ) 

for row in cur.fetchall(): 
    print(row)