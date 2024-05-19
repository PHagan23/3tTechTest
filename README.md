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

	[git clone https://github.com/PHagan23/3tTechTest.git] to prefered repository
	
Install dependencies:

	[npm install] while within project folder
	
Run Cypress:

	[npm run cy:open]
	
	'E2E Testing' > 'Chrome' > 'Start E2E Testing in Chrome' > spec.cy.js



# Encountered Issues

## Cypress would not load on initial set up

Root Cause: NodeJS version was too old - Incompatible

Used a Linux partition that had existed for a couple of years but no updates had been done - NodeJS was very far behind in versionion and was incompatible with the freshly installed Cypress
This should not be an issue on a fresh install

Solution: Update NodeJS

## Amazon thinks I'm a robot

Root Cause: Continuous Test Runs

Due to running automation several times, Amazon thinks i'm a robot and requires a captcha which causes the test suite to fail

Solution: Overthrow Amazon in a coup d'état

## Cy.visit(https://amazon.co.uk) directs to a different version of the Amazon site which the automation does not work on

Root Cause: Unknown

Solution: Introduce if statement in the 'BeforeEach' hook that checks if the suite has been directed to the required / correct version of the amazon site by identifying an element that is only present on the required version as a condition to proceed. If this element is not identified, run Cy.visit(https://amazon.co.uk) again to attempt to direct to required version of the site
