# 3tTechTest

Instructions for setting up on a Linux Machine:

Open Terminal

Install Curl:
	[sudo apt install curl]
	verify with [curl --version]
	
Install NPM:
	[curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash]
	verify with [npm -v]
	
Install Node JS:
	[nvm install 20]
	verify with [node -v]
	
Install Chrome:
	[sudo apt-get install libxss1 libappindicator1 libindicator7]
	[wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb]
	[sudo apt install ./google-chrome*.deb]
	verify with [google-chrome]

Clone Repo:
	git clone 


    Upload the project from your office pc to a git repo (or personal GitHub if you dont have any company repo).

    Clone the repo to your local pc.

    Run npm install to install all dependencies found in you package/ package-lock files.
    (Ps: this only requires from you to have Node and Npm installed to your PC. Every other dependency (f.e cypress, chai, etc) would install on THE SAME VERSION as the master repo


Encountered Issues:

Cypress would not load on initial set up:

Root Cause: NodeJS version was too old - Incompatible

Used a Linux partition that had existed for a couple of years but no updates had been done - NodeJS was very far behind in versionion and was incompatible with the freshly installed Cypress
This should not be an issue on a fresh install
