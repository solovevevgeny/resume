from kubernetes import client, config 

config.load_kube_config()
v1 = client.CoreV1Api()
pods = v1.list_pod_for_all_namespaces() 

for pod in pods.items: 
    for c in pod.status.container_statuses or []: 
        if c.last_state.terminated: 
            reason = ( c.last_state .terminated .reason ) 
            if reason == "OOMKilled": 
                print( "OOM:", pod.metadata.name )