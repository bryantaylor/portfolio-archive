# Portfolio Archive
Ill add more to the documentation, this is just to get this up now.

## Express.js + Node

make sure to have Node.js installed on your local machine before starting. This can be installed through [homebrew](http://brew.sh/) by running:

	$ brew install node

Next generate express.js & template generator

	$ npm install -g express
	$ npm install -g express-generator

Now that express & the generator is installed, let’s navigate to your projects directory and create a new app we’ll call it “newapp”

	$ express newapp

Boom. A new scaffold has been created

## Install MongoDB
Install MongoDB if it’s not already set up

	$ brew update
	$ brew install mongodb

Now let’s startup out MongoDB server:
	
	$ mongod

For some reason it seems that homebrew doesn’t fully setup MongoDB if get any errors such as:

	I STORAGE  [initandlisten] exception in initAndListen: 29 Data 	directory /data/db not found., terminating
	I CONTROL  [initandlisten] dbexit:  rc: 100

we will need to run:
	
	$ sudo mkdir -p /data/db
	$ sudo chmod 0755 /data/db
	$ udo chown [your-username] /data/db

you should now be able to start MongoDB

	$ mongod

Now that we are in the client shell, we need to create a new database by typing:

	$use [dbname]

[dbname] being whatever you want to name the database

## Setup Monggose to MongoDB
In the new webapp directory create a folder called “model” and create a a file called db.js

	$ mkdir model && cd model
	$ touch db.js

