from kubernetes import client, config 

config.load_kube_config()
v1 = client.CoreV1Api() 
pod = v1.read_namespaced_pod( name="nginx", namespace="default" ) 

for container in pod.status.container_statuses: 
    if container.state.waiting: 
        print( container.name, container.state.waiting.reason, container.state.waiting.message )