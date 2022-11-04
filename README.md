
# To run the project Locally

First, you’ll need to clone the repo to your machine. 

## Install Dependencies
So, we’ve cloned the project repository to our local machine, but we don’t have everything we need yet to run the project locally. It is a best practice that node_modules folders (which contain all the package dependencies for the project) NOT be included in the project repository. Because of this, we will need to install dependencies using NPM .

### npm install

Now we will be able to run a development version of the project on our computer, which is helpful for seeing and testing our changes.

## Update configurations

You have to create a dotenv file.
In dotenv paste **DB="mongodb://localhost:27017"**

Additionally, while the majority of dependencies will be managed by a package manager like yarn or npm, there may be additional dependencies needed on your machine to run your code. In many cases, after some initial setup and if you are working primarily in one language or framework, projects can be up and running with a simple npm install

## Start development server

Finally, you can start your application development server! by running with a simple **node app.js**
