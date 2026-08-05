- Round robin 
- Weight Round robin
- Lease connections (По наименьшему количеству соединений)
- IP Hash

Round robin
  ```
  http {
    upstream myapp1 {
        server srv1.example.com;
        server srv2.example.com;
        server srv3.example.com;
    }
}
  ```

Weight Round Robin
```
http {
    upstream backend_servers {
        server 10.0.0.10:8080 weight=5;
        server 10.0.0.11:8080 weight=3;
        server 10.0.0.12:8080 weight=1;
    }

  ...
}
```

Lease Connections
```
 upstream myapp1 {
        least_conn;
        server srv1.example.com;
        server srv2.example.com;
        server srv3.example.com;
    }
```

IP Hash (Sticky sessions)
```
upstream myapp1 {
    ip_hash;
    server srv1.example.com;
    server srv2.example.com;
    server srv3.example.com;
}
```
