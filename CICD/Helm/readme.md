   helm install application ./application-chart 
   helm install application ./application-chart  --dry-run

   helm upgrade application ./application-chart 
   helm upgrade application ./application-chart --wait

    helm status application
    helm application rollback 3
    helm history application

    helm install application -n application-dev -f ./application/value-dev.yaml --create-namespace
    helm delete application
    helm delete application -n application-dev