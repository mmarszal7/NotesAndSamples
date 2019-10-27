# Docker
Below notes are based on project [Docker and Kubernetes for .NET Developers](https://github.com/sixeyed/dak4.net) and presentation available on https://dak4.net and https://netdd19.dak4.net

## 1. Docker CLI:

### 1.1 Containers:
``` powershell
$imageName = repository/name/tag

docker container ls --all                                               # list all containers
docker container run $imageName                                         # run container
docker container run --interactive --tty --rm $imageName                #run container in interactive mode and remove it after after closing
docker container run --detach --name $alias --publish 80:80 $imageName  # run container in detached/background mode on port :80
docker container top $alias                                             # check running processes inside container
docker container logs $alias                                            # check contaner logs
docker container exec (-it) $alias powershell "Get-Process"             # execute command inside container
docker container rm --force $(docker container ls --quiet --all)        # remove all containers (even still running)
exit                                                                    # exit container
```

### 1.2 Images:
``` powershell
docker login --username $dockerId                                       # login and push image to docker registry
docker image push $dockerId/$imageName
docker image build --tag $imageName $dockerfilePath                     # build image from Dockerfile
docker images ls --all                                                  # list all images
```
### 1.3 Dockerfile
``` powershell
FROM $imageName as $alias
WORKDIR C:\
COPY src/project ./project
RUN dotnet restore                                                      # ' - is a new line operator
ENTRYPOINT ["dotnet", "WebApplication.dll"]
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop';"]
HEALTHCHECK --interval=2s `                                             #  you can define HEALTHCHECK script that determines if container is ok or not
    CMD powershell -command if ($response.StatusCode -eq 200) { return 0} else {return 1}
```

### 1.4 Docker-compose:
``` powershell
docker-compose -f $yamlPath up -d                                       # run form file, "up" services, run as detached
```

### 1.5 Docker-compose.yaml
Networking - default network for each container is its name - to access services between containers use their names **http://servicename:80** instead of http://localhost:80


## 2. Orchestrators
There are 2 most popular orchestrators: **Docker Swarm** (built in Docker) and **Kubernetes**. Both have similar architecture with 1 manager and many workers (usually over multiple phisical servers).<br>

Having orchestrator over your containers allow you to define environment specific: **configs**, **secrets**, **persistent storages (VolumeMount)** etc.<br> 

### 2.1 Docker swarm
``` powershell
docker swarm init --advertise-addr 127.0.0.1
docker swarm join --token $token - join your server to other swarm
docker service ls - all commands like for containers (services are an abstraction over containers)
docker service update --replicas=3 $serviceName
docker service update $updateType $serviceName
	--image $imageName - image update
	--replicas=3 - more replicas
docker service inspect $serviceName
docker service update --rollback $serviceName
docker service rm $serviceName
docker-compose -f .\core.yml -f .\prod.yml config > docker-stack.yml - join dokcer-compose files
docker config create $configName $configPath
docker config inspect --pretty $configName
docker secret create $secretName $secretPath
docker secret inspect --pretty $secretName
```

### 2.2 Dockerfile
Additionally Docker Swarm can use docker-compose yaml files with some additional attributes like: **healthcheck**, **configs**, **secrets** and **deploy**
``` powershell
docker stack deploy -c docker-stack.yml signup
```

### 2.3 Kubernetes
It's so popular because it's extensive (e.g. for secrets you can use your own sevice like Azure Key Vault) and fact that there are no real Docker Swarm managed services.<br>

Biggest difference between Kubernetes and other solutions is using one more wrapper/abstraction layer over set of containers - Pods.<br> 
One of adventages of having Pods is something called "sidecar relay" which allows you to spin up additional container to support your main container. For example, to output logs from container you need console log app for that. Using Kubernetes you can log to file and then set up additional small container (in the same Pod) only for reading logs from "main container" log file.

Additionally Kubernetes has its own UI/Dashboard for managing containers. But because it is fully editable it should not be exposed to public.

**Basci concepts:**<br>
- Deployment - manages ReplicaSet
- ReplicaSet - group of Pods
- Pod - abstractoion/wrapper over container(s)<br><br>
- Configuration files
- Secrets
- VolumeMount (persistent storage)
- Ingres
- Service
- LoadBalancer

``` powershell
kubectl get nodes
kubectl get all
kubectl run $serviceName --image debian:9.11 --command ping -- localhost
kubectl scale --replicas=3 deployment/$serviceName
kubectl set image deployment/$serviceName $serviceName=debian:10.1
kubectl rollout history deployment/$serviceName
kubectl delete pods/rs --all --force --grace-period=0
kubectl delete deployment $serviceName
```

### 2.4 YAML
``` powershell
kubectl apply -f $yamlPath # file by file or whole folder
```

## ToDo:
- what is -tty? difference between -tty and -it
- is really docker image just a zip/tar file?
- difference between SHELL, ENTRYPOINT and RUN
- docker image build -t $imageName -f $dockerfilePath . - ?? - what is $path and what is '.'?<br><br>
- explain commands in Dockerfiles and docker-compose.yaml (1.3, 1.5)
- notes for orchestrators (2.*)