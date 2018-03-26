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

#### b) tmux hotkeys (ctrl + b, ...):
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
## 4. Linux Hello worlds:
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
## 5. Git / Docker
#### a) Git:
**Naming**: Working Directory, Staging and Remote
#### Basic
    git init - inicjuje nowe repo
    git -m commit "message"
    git log - sprawdza historie commitów
    git status - sprawdza status plików w working directory i Staging
    git add file-name - dodaje file do Stage
    git diff - pokazuje różnicę pomiędzy Working Directory a Staging
#### Revert, discard, reset
    git checkout HEAD file-name - discards changes in the WD.
    git reset HEAD file-name - unstages file changes in the Staging.
    git reset SHA - resets previous commit in your commit history.
#### Branche
    git branch - sprawdza w którym branchu jesteśmy
    git checkout branch-name - swapuje pomiedzy branchami
    git merge branch-name - merguje brancha z masterem
    git branch -d branch-name - usuwa brancha
#### Klonowanie i pulle
    git clone repo-name local-name - klonuje projekt z Remote
    git remote -v - listuje gitowe projekty remote
    git fetch - aktualizuje Working Directory z Remotea
    git merge origin/master - merguje to co w fetchu z Working Directory
    git push origin branch-name - pushuje brancha do origin remote
#### Fixy
    git rebase -i --root
    exec git commit --amend --author="nick <mail@mail.pl>" -C HEAD
    exec git commit --amend --date="Mon Jan 01 00:00 2017 +0100" -C HEAD
    git push origin master --force
    
#### b) Docker:
*
---
## 6. Linux - security
- 

---
## 7. Jenkins installation:
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
