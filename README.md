# 3tTechTest

Instructions for setting up:

Install Curl
Install NPM
Install Node JS
Install FireFox

https://nodejs.org/en/download/package-manager

# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.13.1`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.2`

    Upload the project from your office pc to a git repo (or personal GitHub if you dont have any company repo).

    Clone the repo to your local pc.

    Run npm install to install all dependencies found in you package/ package-lock files.
    (Ps: this only requires from you to have Node and Npm installed to your PC. Every other dependency (f.e cypress, chai, etc) would install on THE SAME VERSION as the master repo


Encountered Issues:

Cypress would not load on initial set up:

Root Cause: NodeJS version was too old - Incompatible

Used a Linux partition that had existed for a couple of years but no updates had been done - NodeJS was very far behind in versionion and was incompatible with the freshly installed Cypress
This should not be an issue on a fresh install
