Recap: React set up

Overview
In this reading, you will recap setting up React by revisiting the React Basics course from the Front-End developer program.

Preparing to set up React
Setting up React on your local development environment - that is, on your computer - is pretty straightforward. First, as discussed in the previous lesson item, you need to make sure that you have all the prerequisites taken care of:

You have a computer with admin access.

You have Node.js and npm installed.

You have a code editor installed, preferably VS Code.

You have Git installed.

How to set up React
There are two common ways a new React app is built using the create-react-app command.

The first approach is using the npm init command:

npm init react-app name-of-the-app

In the command above, the name-of-the-app is the part that you can customize, while the rest of the command has to be typed as is.

The second approach involves using the npx command, specifically:


npx create-react-app name-of-the-app

Again, the part of the command that reads name-of-the-app needs to be altered to reflect your preferred app name, such as, for example, little-lemon. Thus, your command to initialize a new React project using the create-react-app npm package becomes either of the following:


npm init react-app little-lemon

npx create-react-app little-lemon

In the code examples above, either approach works. The former command is the one that was used throughout the React Basics and Advanced React courses in this specialization. The latter command is the variety that you're likely to come across in various React tutorials on the web.

Setup troubleshooting
If you run into issues while you're running the create-react-app npm package, there can be several reasons for it, such as:

Your installed Node.js or npm versions are too old.

Your computer is not powerful enough to develop modern web apps.

You are not connected to the internet and the command cannot install dependencies into your app's node_modules folder.

However, most of the time, your installation will go smoothly.

Conclusion
In this reading, you revisited the process of setting up a React app in your local development environment.