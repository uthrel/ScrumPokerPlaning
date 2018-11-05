# ScrumPokerPlaning


Scrum poker web application



## DEPENDENCIES

## THE ENVIRONMENT

MongoDB 4.0 Community Edition
Platform Support
Ubuntu
14.04 LTS (trusty)
16.04 LTS (xenial)
18.04 LTS (bionic)

To install MongoDB
sudo apt-get install -y mongodb-org=4.0.3 mongodb-org-server=4.0.3 mongodb-org-shell=4.0.3 mongodb-org-mongos=4.0.3 mongodb-org-tools=4.0.3

Open mongo shell -> mongo
Start MongoDB -> sudo service mongod start
Stop MongoDB -> sudo service mongod stop

for more information
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/


- Node v8.10.0
- npm 3.5.2

## PROJECT SETUP

1* - npm install -g grunt-cli
2* - npm install grunt
3* - npm install grunt-contrib-jshint
4* - npm install grunt-contrib-concat
5* - npm install grunt-contrib-watch
6 - npm install express
7 - npm install mongoose
9 - npm install body-parser
(* Not compulsory)

Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager. Grunt 0.4.x requires stable Node.js versions >= 0.8.0


The package.json file belongs in the root directory of the project, next to the Gruntfile. Running npm install in the same folder as a package.json file will install the correct version of each dependency listed therein.



## DEV DEPENDENCIES
body-parser: ^1.18.3
express: ^4.16.4
grunt: ^1.0.3
grunt-contrib-concat: ^1.0.1
grunt-contrib-jshint: ^2.0.0
grunt-contrib-watch: ^1.1.0
mongoose: ^5.3.9
