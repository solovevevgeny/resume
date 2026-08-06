# CV

## DevOps

#### Infastructure as Code (IaC)
  - Terraform
  - **Ansible**
    - Vault for secrets
    - Gitlab Runners for run playbooks
    - Ansible optimizing:
      - Async (name: Run an async task)
      - Strategy (Mitogen/Free/Host pinned/linear)
      - Threads (forks)
      - Multiplexing (issh_args = -0 ControlMaster=auto -0 ControlPersist=60s)
      - Limits Facts about hosts (All/Min/Hardware/Newtork/Virtual/)
      - Perfomance monitoring with Callbacks (Times, Profile_Roles)
    - [Postgres migrations](https://github.com/solovevevgeny/resume/tree/main/Infra/Ansible/postresql_migrations)
    - [Docker save image to archive, transfer and start on remote](https://github.com/solovevevgeny/resume/tree/main/Infra/Ansible/docker_save_image)
    - [role POSTGRES/make migration/check migration_Result(Rollback)](https://gitlab.com/evgeny.solovev/ansible/-/tree/main/13%20postrges_migration)
    - [ngnix + PHP + MySQL](https://github.com/solovevevgeny/resume/tree/main/Infra/Ansible/lemp)
    - [Postgres + Replica]
    - [Grafana](https://github.com/solovevevgeny/resume/tree/main/Infra/Ansible/Grafana)
    - [LEMP(Roles)](https://github.com/solovevevgeny/resume/tree/main/Infra/Ansible/Lemp-roles)

### CI/CD
  - [ArgoCD](https://gitlab.com/evgeny.solovev/running-club-app)
    ArgoCD / Gitlab pipeline (build-test-image) / Helm charts / Kubernetes 
  - Helm
    - [standart](https://github.com/solovevevgeny/resume/tree/main/CICD/Helm)
    - [running-club-app](https://gitlab.com/evgeny.solovev/running-club-app)
    - [Gitlab](https://github.com/solovevevgeny/resume/tree/main/CICD/Gitlab/gitlab-ci)

### Bash
  - [Check disk space](https://github.com/solovevevgeny/resume/blob/main/bash_scripts/check_df.sh)
  - [Deploy](https://github.com/solovevevgeny/resume/blob/main/bash_scripts/deploy.sh)
  - [PostgreSQL Backup](https://github.com/solovevevgeny/resume/blob/main/bash_scripts/postgres_backup.sh)
  - [Docker cleanup](https://github.com/solovevevgeny/resume/blob/main/bash_scripts/docker_cleanup.sh)
  - [Logs rotation](https://github.com/solovevevgeny/resume/blob/main/bash_scripts/rotation_logs.sh)

### [Python devops](https://github.com/solovevevgeny/resume/tree/main/python_scripts)
  - Check ports
  - Check process
  - k8s_OOMKilled_list
  - k8s_pod_restart_resons
  - kill_cpu_oberhead
  - old_files_delete
  - pg_backup
  - pg_check_locks
  - pg_connctions_count
  - pg_isready
  - pg_slow_requests
  - pg_user_create
  - restarts_services
  - systemctl_status
  - telegram_message
  - awk '{print $1}' /home/admin/access.log | sort | uniq -c | sort -nr | head -1 | awk '{print $2}' > /home/highestip.txt

### Containers:
  - [Docker](https://gitlab.com/evgeny.solovev/mlops-project)
    Docker / Docker Compose
  - kubernetes
    - [ArcoCD-Heml-GitlabPipeline-K8S](https://gitlab.com/evgeny.solovev/running-club-app)
    - [Deployment + configmap (nginx + python)](https://github.com/solovevevgeny/resume/tree/main/Containers/kubernetes/deployment)
    - [Stateful DB Edition](https://github.com/solovevevgeny/resume/tree/main/Containers/kubernetes/StatefulSet)

### DevOpsSec
  - [Python: FastAPI scan SAST in pipeline (Bandit)](https://gitlab.com/evgeny.solovev/devsecops)

### MLOps
  - [Apache Airflow](https://gitlab.com/evgeny.solovev/mlops-project) Docker compose (Airflow, DAGs, Postgresql, Redis)
   
### Monitoring:
  - node-export/kube-state-metrics
  - [Grafana]
  - [Loki]
  - [Prometeus]
  - [Promtail]
  - Alertmanager
    
### Reverse proxy:
  - nginx
  - [Nginx as Load balancer (PHP FPM on Instances)](https://github.com/solovevevgeny/resume/tree/main/Proxy/nginx/load_balancer)
   
### Nginx/HAproxy Balancer:
  - Round robin
  - Weight round robin
  - Lease connections
  - Sticky sessions (Hash IP)
      
### DBA:
  - MsSQL
  - MySQL
  - Postresql
  - Redis / Memcache
    
### Backend
  - Python: FastAPI
  - PHP: laravel 
    - [Coinkeeper (Controllers, Models, Migrations, Seeders, JWT)](https://github.com/solovevevgeny/resume/tree/main/Backend/PHP/coinkeeper-backend)
###  Frontend
  - HTML
  - CSS
  - ReactJS + Redux
    - [Events Calendar](https://github.com/solovevevgeny/events-calendar)
    - [Rest Countries (RestAPI Request + Fetch + Filter)](https://github.com/solovevevgeny/resume/tree/main/Frontend/ReactJS/ReactJS_Redux/restcountries)
    - [ReactJS+Redux, ThemeSwitch, Request JSON, parse. Timer polling](https://github.com/solovevevgeny/resume/tree/main/Frontend/ReactJS/ReactJS_Redux/strada-checker)
    - [Coinkeeper front (RESTAPI)](https://github.com/solovevevgeny/resume/tree/main/Frontend/ReactJS/ReactJS_Redux/coinkeeper-front)
