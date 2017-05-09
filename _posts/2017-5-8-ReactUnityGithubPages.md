---
layout: post
title: React <3 Unity <3 Github Pages
---

Recently I have been tinkering with React and really digging how easy it is to get up and running using the [Create React App](https://github.com/facebookincubator/create-react-app). What makes things even sweeter is how easily you can deploy to Github Pages to show off all of your work. I was able to even port my Unity game to a React app and deploy it to my site [here](https://shaneknows.github.io/Naifu)!

### Alright you have my attention... how?

Well first off download [Node.js](https://nodejs.org/en/download/) and install npm by opening up your command prompt (or use the terminal in Visual Studio Code) and running:
```bash
npm install @npm -g
```
Now that you have npm installed. You will want to install the create-react-app npm package by running:
```bash
npm install create-react-app -g
```
Navigate to the folder you wish to create your app and run:
```bash
create-react-app <name of project>
```
This should take a little bit of time but by the time is finishes you will have a working react app you can toy around with. Make sure you switch to the working directory you just created and you can run the app
```bash
cd <your project name>
npm start
```

### Cool now how can I show this off?

Assuming you have a [Github account](https://github.com/) it's quite easy. First create a repository for your current React application on Github. Now back in your project lets install github pages so we can generate and deploy the app as a static site for github pages.
```bash
npm install --save-dev gh-pages
```
Now in your project's project.json we need to add a deploy option under the `scripts` section:
```javascript
"deploy":"npm run build&&gh-pages -d build"
```
This will build our project and publish it to a `gh-pages` branch under your project.
Now let's setup our project to enable GitHub Pages. Under the repository settings, find the GitHub Pages section and set it to use the `gh-pages` branch via the dropdown list.

Now we are almost ready to deploy. First you will want to set your `homepage` in your project.json file. It should be updated and named `https://<username>.github.io/<projectname>`

Now finally we can run 
```bash
npm run deploy
```
and you should be able to navigate to your homepage URL and find your working app!

### OK so now what about Unity?

Alright so if you don't have a working Unity game feel free to fork mine [here](https://github.com/shaneknows/NaifuGame). Install the latest version of [Unity3d](https://unity3d.com/get-unity/download) and open the project. Select `File`->`Build and Run`. We want to build the project for WebGL so select that option and provide a Folder name. Once the process has complete you should see your game running in a web browser. If everything appears to be working fine, copy the files from the created folder and paste them in the `public` folder of your React application. This should override the default `index.html` file. Open up the `index.html` file and add `%PUBLIC_PATH%/` in front of the src tags so our file references will work locally and while deployed. Your file should look something like:
```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Unity WebGL Player | {game name}</title>
    <link rel="shortcut icon" href="%PUBLIC_URL%/TemplateData/favicon.ico">
    <link rel="stylesheet" href="%PUBLIC_URL%/TemplateData/style.css">
    <script src="%PUBLIC_URL%/TemplateData/UnityProgress.js"></script>  
    <script src="%PUBLIC_URL%/Build/UnityLoader.js"></script>
    <script>
      var gameInstance = UnityLoader.instantiate("gameContainer", "%PUBLIC_URL%/Build/<game name>.json", {onProgress: UnityProgress});
    </script>
  </head>
  <body>
    <div class="webgl-content">
      <div id="gameContainer" style="width: 665px; height: 400px"></div>
      <div class="footer">
        <div class="webgl-logo"></div>
        <div class="fullscreen" onclick="gameInstance.SetFullscreen(1)"></div>
        <div class="title">{game name}</div>
      </div>
    </div>
  </body>
</html>
```

You will also want to clear out the HTML rendered in the `App.js` file. Just return an empty div instead or you will get errors. You could also just completely comment out the `index.js` file if you don't intend on adding any react code. Now test you app by running `npm start`.

If everything seems to be working run `npm run deploy` again and you should see your game running on your Github Pages site!

I'm sure there are simpler ways, but I honestly found this to be quite a simple and interesting way to deploy Unity Games. Happy coding.