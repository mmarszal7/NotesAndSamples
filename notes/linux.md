## 1. Popular shell CLIs:
### System Shell 
Shell is a user interface for access to an operating system's services (often identified with CLI).
	Shelle są potrzebne głównie potrzebne przy powtarzalnych, wymagających dokumentacji procesach.
	Jak np. buildowanie czegoś lub replikacja. Popularne shelle:
	
#### a) Linux shells:
- bash - default CLI
- zsh - bash na sterydach. Największa różnica (a w zasadzie dodatek) to lepszy intellisense
sudo apt-get update - aktualizacja listy paczek
apt-get upgrade - aktualizacja paczek


#### a) basics:
* lsb_release -a - wersja linuxa
* sudo poweroff/reboot
* echo $SHELL - info jaki jest aktualny shell
* vi /etc/shells - lista dostępnych shelli
* ps - lista zmienianych shelli?
* bash/zsh/etc. - zmiana shella
* mkdir - tworzenie katalogów
* touch - tworzenie i edycja właściwości plików
* chmod 777 filename - edycja uprawnień plików
* stat -c %a file - sprawdzenie jakie uprawnienia są przypisane do pliku
* unzip file.zip -d destination_folder - rozpakowywanie
* export VARIABLE="VALUE" - sets up environmental variable VARIABLE with value VALUE
* echo $VARIABLE - prints a value of environmental variable VARIABLE

#### b) processes
* free -m - listuje statystyki ramu w MB
* type command - sprawdza czym jest command
* ps aux - listing procesów
* | grep XYZ - filtr tekstory
* wc - word counter - zlicza słowa (lub linie gdy -l); często używany z grepem do przeszukiwania logów/procesów

#### c) bash hotkeys:
- alt + . - powtarza ostatni argument
- ctrl + l - czyści ekran
- ctrl + u / ctrl + y - kopia całej lini do schowka
- ctrl + x, ctrl + e - do edycji zaawansowanych komend; otwiera domyślny edytor a po zamknięciu wykonuje to co było w środku

#### d) history:
- wykonanie polecenia ze spacją nie zapisuje go w history
- !X - wykonanie polecenia numer X

---
## 2. Packages:
- zsh - shell CLI
- unzip
- htop - task manager
- tmux - split screen
- vim/nano/emact - edytory tekstu
- pv - progress bar
- python/dotnet/gcc

#### a) basics:
* apt-get update - aktualizacja listy paczek
* apt-get upgrade - aktualizacja paczek
* apt-get install xyz - instalacja paczki

#### b) [tmux hotkeys](https://gist.github.com/henrik/1967800) (**ctrl + b**, ...):
* ctrl + % / " - new split
* arrows - move splits windows
* ctrl+arrows - resize window
* c - new window
* n/p - move between windows
* t - timer
	
#### c) VIM:
* 

---
## 3. SSH authentication:
#### a) SSH nstallation and configuration:
First you may need root priviliges. Root account is not active by default, so you need to set its password and then relog:

    sudo passwd root
    su root

Then if you dont have superuser (not root, user with admin priviliges) just create new one and give it priviliges:

    adduser user
    usermod -aG sudo user

Then install SSH:

    sudo apt-get purge openssh-server
    sudo apt-get install openssh-server

And configure it:
* sudo nano /etc/ssh/sshd_config 
* disallow root login by setting: *PermitRootLogin no*
* add a line: *AllowUsers yourusername*
* disable password authentication, bacause you want to login with ssh key: *PasswordAuthentication no*
* disable privilege separation: *UsePrivilegeSeparation no*
* sudo service ssh --full-restart

#### b) Creating SSH key:
* create catalog /home/user/.ssh with id_rsa and id_rsa.pub files with: *ssh-keygen* and  (return 3 times)
* if you want to use pytty, copy key from id_rsa to windows 
    * cat /.ssh/id_rsa 
    * convert it with puttyGen (load and save privateKey with empty passphrase)
    * in putty create new custom session with ip and 22 port
    * add new private key in Connection > SSH > Auth.

#### c) Run firewall with enabled SSH:
    sudo ufw app list
    sudo ufw allow OpenSSH
    sudo ufw enable
    sudo ufw status

---
## 4. Nginx:
**Installation:**
```bash
sudo apt-get install nginx
sudo /etc/init.d/nginx start #restart / stop
rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/mysite_nginx.conf /etc/nginx/sites-enabled/default
```
**Django config file (/etc/nginx/uwsgi_params):**

    uwsgi_param  QUERY_STRING       $query_string;
    uwsgi_param  REQUEST_METHOD     $request_method;
    uwsgi_param  CONTENT_TYPE       $content_type;
    uwsgi_param  CONTENT_LENGTH     $content_length;
    
    uwsgi_param  REQUEST_URI        $request_uri;
    uwsgi_param  PATH_INFO          $document_uri;
    uwsgi_param  DOCUMENT_ROOT      $document_root;
    uwsgi_param  SERVER_PROTOCOL    $server_protocol;
    uwsgi_param  REQUEST_SCHEME     $scheme;
    uwsgi_param  HTTPS              $https if_not_empty;
    
    uwsgi_param  REMOTE_ADDR        $remote_addr;
    uwsgi_param  REMOTE_PORT        $remote_port;
    uwsgi_param  SERVER_PORT        $server_port;
    uwsgi_param  SERVER_NAME        $server_name;

**Nginx configuration file (/etc/nginx/sites-available/):**

    upstream django {
        server server 127.0.0.1:8001;
    }
    
    server {
    	listen      80; 
    	server_name _;
    	charset     utf-8;
    	
    	client_max_body_size 75M;   # adjust to taste
    	
    	location /api {
    		uwsgi_pass  django;
    		include     /etc/nginx/uwsgi_params; # the uwsgi_params file you installed ^
    	} 
    	
    	location / { 
    		root /home/user/proj/build; # your Django project's static files - amend as required
    		try_files $uri $uri/ /index.html;
    	}   
    }

---
## 5. Linux Hello worlds:
##### a) C++:
Build-essential - gcc/g++ - c/c++ compilers and libs
    
    nano main.cpp
    g++ main.cpp -o main.out
    ls -l (ses if its executable)
    ./main.out - run
	
#### b) Python:
    touch script.py
    python3 script.py

#### c) dotnet - C#:
Instalacja ze strony Microsoftu (update paczek, installacja itp.)

    dotnet new console
    dotnet build
    dotnet run
    
#### d) dotnet - ASP .NET Core

    dotnet new webapi
    dotnet build webapi
    dotnet run webapi
    
    // or you can publish your project:
    dotnet publish webapi
    cd bin\Debug\netcoreapp2.0\publish
    dotnet webapi.dll

---
## 7. Linux - security
- 

---
## 8. Jenkins installation:
#### a) Installation (add to packages, update and install):
    wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
    echo deb https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
    sudo apt-get update
    sudo apt-get install jenkins

#### a) Start:
    sudo service jenkins start 
    sudo service jenkins status 

You may need to install java manually:

    sudo apt install openjdk-9-jre
    sudo nano /etc/init.d/jenkins
PATH=/bin:/usr/bin:/sbin:/usr/sbin:/usr/lib/jvm/java-8-openjdk-amd64/bin/

#### a) Add Jenkins to firewall:
    sudo ufw allow 8080
    sudo ufw status

#### a) Set up Jenkins - from web gui
Auth -> Install suggested plugins -> Create first user

    sudo cat /var/lib/jenkins/secrets/initialAdminPassword
