1. Organisation

1.1
Set up a group chat on Slack with all the members of the team. This way you can communicate and share links more easily. Consider using websites like Trello for task organisation.

1.2
Assign a leader who will set up the initial file structure, installs and GitHub Master and Develop Branches.

1.3
Split the team into two groups, two people assigned to Front End (Client Folder) and two people assigned to Back End (Server Folder). If there are only three members in your group, assign the more difficult section to the two members, alternatively, think of other ways you can work more efficiently as a three.

2. Setting up the File Structure and Installs

2.1
The file structure will look like the following example:
https://i.imgur.com/W9vVrpN.png

2.2
Insert the following into the respective files:
pub_sub.js
https://i.imgur.com/1PsCMKW.png
request.js
https://i.imgur.com/gIgl5qE.png
.gitignore:
https://i.imgur.com/ucegrXe.png
webpack.config.js
https://i.imgur.com/OwErQhb.png

2.3
After the file structure is set up, the leader must install the following:
npm init -y
npm install webpack webpack-cli
npm install express
npm install mongodb .
npm install nodemon
npm install body-parser

2.4
Once these have been installed, the node_modules folder should be within the file structure as well as package.json and package-lock.json:
https://i.imgur.com/incsb1k.png

2.5
The leader must insert the following into scripts inside package.json:

"start": "node server/server.js",
"server:dev": "nodemon server/server.js",
"build": "webpack -w"

It will look as follows:
https://i.imgur.com/NBNTeHO.png

They must add scripts into the <head> of the index.html too:
Create a html structure quickly by typing html:5 in index.html then clicking Tab.

Paste the following into the <head>:
<script src="./js/bundle.js"></script>
<link rel="stylesheet" href="./css/style.css">

It will look as follows:
https://i.imgur.com/B6h9nb2.png

2.6
Now it must be pushed to GitHub, make sure to name the GitHub repository the same as your folder and that you have saved all of the files by typing CMD+ALT+s:

git init
git add .
git commit -m "Initial Commit"
git INSERT SSH HERE
git push -u origin master

git checkout -b develop
git push -u origin develop

2.7
Now the other members of the team can clone your repository:

Go to your repository on GitHub.
Click on Settings.
Click on Collaborators.
Find your team's usernames and add them.
Now the other members of the team must accept your invitation via email.
Once everyone has joined we can begin the cloning.
Go the page of the repository.
Click on the green 'clone or download' button.
Copy the SSH and MAKE SURE IT IS SSH NOT HTTPS.
Go into the folder you have set up in your documents specifically for the weekend project.
Once you are in this empty folder, type the following in the terminal:

git clone INSERT SSH HERE.

You will now have a clone repository which will look like the following:
https://i.imgur.com/bBBEsXd.png

As you can see, there is no node_modules folder, this is because it wasn't pushed up by the leader as the .gitignore blocked it from being uploaded to GitHub. No matter! We have all the installation data for all our installs inside package-lock.json.

Type the following to bring back node_modules:
npm install

2.8
Now it is time for each group to create their own branches off of the Develop branch:

The Front End team will create a branch by first entering into the Develop Branch:
git checkout develop
git checkout -b client

The Back End team will create a branch by first entering into the Develop Branch:
git checkout develop
git checkout -b server

The branches can be named whatever you want but try to keep them as readable and informative as possible.

2.9
During the process, 4 Tabs will be open, run the following commands and open up the four tabs with CMD+t:
1st Tab - mongod (Runs the database)
2nd Tab - npm run build (Watches file changes and bundles them up into bundle.js in real time)
3rd Tab - npm run server:dev (Runs the server)
4th Tab - Insert commands, etc.

They should all be working despite not being given any data on the Front End or the Seeds file.

3. Two Groups and Two Extra Branches

3.1
Now that every member of the group has a clone of the repository, we can begin to allocate tasks. If you are working in real life, you may want a single member of the Front End group working on the Front End, whilst the other member keeps them in check, switching roles with every git commit and the other group will do the same with the Back End. Alternatively, if you are not working in real life and are working online, you may want to create an EXTRA two branches off of the Front End/Back End branch off Develop, working on an aspect of the Front End, approving with one another, then merging with the Front End, THEN confirming with the other group if you want to merge into the Develop from the Front End or Back End branches.

Of course, throughout the project, you want complete quality control, meaning although you can offer yourself some leeway, it would be better to stick to a particular methodology instead of switching it up. It would get very confusing very quickly if people suddenly started pushing straight to the Develop branch without verifying pull requests because of time constraints.

Quality > Quantity.
