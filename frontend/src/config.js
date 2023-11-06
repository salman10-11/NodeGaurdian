export const structureData = {
  react: {
    library: [
      {
        name: "React",
        icon: "fab fa-react",
        package: "react",
        version: "18.0.2",
        category: "UI",
        dependencyPackages: ["react-dom", "react-scripts"],
      },
      {
        name: "Redux",
        icon: "fab fa-react",
        package: "redux",
        version: "4.1.2",
        category: "Utility",
        dependencyPackages: [],
      },
      {
        name: "React-Redux",
        icon: "fab fa-react",
        package: "react-redux",
        version: "7.2.6",
        category: "Utility",
        dependencyPackages: [],
      },
      {
        name: "React-Router",
        icon: "fab fa-react",
        package: "react-router-dom",
        version: "5.3.0",
        category: "Routing",
        dependencyPackages: [],
      },
      {
        name: "Formik",
        icon: "fab fa-react",
        package: "formik",
        version: "2.2.9",
        category: "Form Handling",
        dependencyPackages: [],
      },
      {
        name: "Yup",
        icon: "fab fa-react",
        package: "yup",
        version: "0.32.11",
        category: "Form Handling",
        dependencyPackages: [],
      },
      {
        name: "Sweetalert 2",
        icon: "fab fa-react",
        package: "sweetalert2",
        version: "11.1.11",
        category: "UI",
        dependencyPackages: ["sweetalert2-react-content"],
      },
      {
        name: "Framer Motion",
        icon: "fab fa-react",
        package: "framer-motion",
        version: "4.1.17",
        category: "UI",
        dependencyPackages: ["sweetalert2-react-content"],
      },
      {
        name: "React-Bootstrap",
        icon: "fab fa-react",
        package: "react-bootstrap",
        version: "1.6.4",
        dependencyPackages: ["bootstrap", "react-router-dom"],
      },
      {
        name: "React-Toastify",
        icon: "fab fa-react",
        package: "react-toastify",
        version: "8.0.3",
        dependencyPackages: [],
      },
      {
        name: "React-Icons",
        icon: "fab fa-react",
        package: "react-icons",
        version: "4.3.1",
        dependencyPackages: [],
      },
      {
        name: "React-Select",
        icon: "fab fa-react",
        package: "react-select",
        version: "4.3.1",
        dependencyPackages: [],
      },
      {
        name: "React-Datepicker",
        icon: "fab fa-react",
        package: "react-datepicker",
        version: "4.3.1",
        dependencyPackages: [],
      },
      {
        name: "React-Table",
        icon: "fab fa-react",
        package: "react-table",
        version: "7.7.0",
        dependencyPackages: [],
      },
      {
        name: "React-Loading",
        icon: "fab fa-react",
        package: "react-loading",
        version: "2.0.3",
        dependencyPackages: [],
      },
      {
        name: "React-Loading-Overlay",
        icon: "fab fa-react",
        package: "react-loading-overlay",
        version: "2.0.3",
        dependencyPackages: [],
      },
      {
        name: "React-Loading-Skeleton",
        icon: "fab fa-react",
        package: "react-loading-skeleton",
        version: "2.2.0",
        dependencyPackages: [],
      },
      {
        name: "React-Image-Upload-Component",
        icon: "fab fa-react",
        package: "react-image-upload-component",
        version: "3.0.0",
        dependencyPackages: [],
      },
      {
        name: "React-Image-Crop",
        icon: "fab fa-react",
        package: "react-image-crop",
        version: "8.6.6",
        dependencyPackages: [],
      },
      {
        name: "React-Image-Gallery",
        icon: "fab fa-react",
        package: "react-image-gallery",
        version: "1.0.0",
        dependencyPackages: [],
      },
      {
        name: "React-Image-File-Resizer",
        icon: "fab fa-react",
        package: "react-image-file-resizer",
        version: "1.0.0",
        dependencyPackages: [],
      },
    ],
    files: [
      {
        name: "index.js",
        path: "src",
        content: `import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  
  import App from './App';
  
  ReactDOM.render(<App />, document.getElementById('root'));`,
      },
      {
        name: "App.js",
        path: "src",
        content: `import "./styles.css";

        export default function App() {
          return (
            <div className="App">
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </div>
          );
        }
        `,
      },
      {
        name: "index.css",
        path: "src",
        content: `import { StrictMode } from "react";
        import { createRoot } from "react-dom/client";
        
        import App from "./App";
        
        const rootElement = document.getElementById("root");
        const root = createRoot(rootElement);
        
        root.render(
          <StrictMode>
            <App />
          </StrictMode>
        );
        `,
      },
      {
        name: "styles.css",
        path: "src",
        content: `.App {
          font-family: sans-serif;
          text-align: center;
        }
        `,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "react",
          "version": "1.0.0",
          "description": "React example starter project",
          "keywords": [
            "react",
            "starter"
          ],
          "main": "src/index.js",
          "dependencies": {
            "loader-utils": "3.2.1",
            "react": "18.2.0",
            "react-dom": "18.2.0",
            "react-scripts": "5.0.1"
          },
          "devDependencies": {
            "@babel/runtime": "7.13.8",
            "typescript": "4.1.3"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
          },
          "browserslist": [
            ">0.2%",
            "not dead",
            "not ie <= 11",
            "not op_mini all"
          ]
        }`,
      },
      {
        name: "README.md",
        path: "",
        content: "",
      },
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta
      name="description"  
      content="Web site created using create-react-app"
  />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>React App</title>
  </head>
  <body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  </body>
  </html>`,
      },
      {
        name: "manifest.json",
        path: "public",
        content: `{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
  {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
  },
  {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
  },
  {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
  }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
  }`,
      },
      {
        name: "robots.txt",
        path: "public",
        content: `User-agent: *
  Disallow:`,
      },
    ],
  },
  express: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [
      {
        name: "index.js",
        path: "",
        content: `const express = require('express');

const userRouter = require('./routers/userRouter');

const cors = require('cors');
const { PORT } = require('./config');

const app = express();

app.use(cors({}));

app.use(express.json());
app.use('/user', userRouter);

app.use(express.static('./static/uploads'))

app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(\`Express server has started at \${PORT}\`));`,
      },
      {
        name: "connection.js",
        path: "",
        content: `const mongoose = require('mongoose');

// Replace DB_URL with your MongoDB URL
mongoose.connect(DB_URL)
  .then((result) => {
      console.info('Connected to MongoDB');
  }).catch((err) => {
      console.error('Error connecting to MongoDB', err);
  });

module.exports = mongoose;`,
      },
      {
        name: "config.js",
        path: "",
        content: `
const api_config = {
    PORT : 5000
}

module.exports = api_config;`,
      },
      {
        name: "package.json",
        path: "",
        content: `{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index",
    "dev": "nodemon index --ignore archives"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^7.0.3",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.22"
  }
}
`,
      },
      {
        name: "userModel.js",
        path: "models",
        content: `const { Schema, model } = require("../connection");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  avatar: { type: String },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("user", userSchema);
`,
      },
      {
        name: "userRouter.js",
        path: "routers",
        content: `const express = require("express");

const router = express.Router();
const Model = require("../models/userModel");

router.get("/", (req, res) => {
  console.log("Request at user index");
  res.status(299).send("UserRouter Working Perfectly!!");
});

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((result) => {
      console.log("User Data Saved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error saving user data", err);
      res.status(500).send("Error saving user data");
    });
});

router.post("/auth", (req, res) => {
  Model.findOne({ email: req.body.email })
    .then((result) => {
      if (result) {
        new Model(result).comparePassword(req.body.password, (err, isMatch) => {
          if (err || !isMatch) {
            console.error("Error authenticating user", err);
            res.status(500).send({status: "failed"});
          } else {
            console.log("User authenticated");
            res.json({ status: "success", result });
          }
        });
      } else {
        console.error("Error authenticating user");
        res.status(501).json({status: "failed"});
      }
    })
    .catch((err) => {
      console.error("Error authenticating user", err);
      res.status(502).json({status: "failed"});
    });

  // .then((result) => {
  //   console.log("User Data Saved");
  //   res.status(201).json({ status: "success", result });
  // })
  // .catch((err) => {
  //   console.error("Error saving user data", err);
  //   res.status(500).send("Error saving user data");
  // });
});

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log("User Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving user data", err);
      res.status(500).send("Error retrieving user data");
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      console.log("User Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving user data", err);
      res.status(500).send("Error retrieving user data");
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      console.log("User Data Updated");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error updating user data", err);
      res.status(500).send("Error updating user data");
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log("User Data Deleted");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error deleting user data", err);
      res.status(500).send("Error deleting user data");
    });
});

module.exports = router;
`,
      },
    ],
  },
  angular: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [
      {
        name: "angular.json",
        path: "",
        content: `{
          "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
          "version": 1,
          "newProjectRoot": "projects",
          "projects": {
            "demo": {
              "root": "",
              "sourceRoot": "src",
              "projectType": "application",
              "prefix": "app",
              "schematics": {},
              "architect": {
                "build": {
                  "builder": "@angular-devkit/build-angular:browser",
                  "options": {
                    "outputPath": "dist/demo",
                    "index": "src/index.html",
                    "main": "src/main.ts",
                    "assets": [],
                    "styles": ["src/global_styles.css"],
                    "scripts": []
                  },
                  "configurations": {
                    "production": {
                      "fileReplacements": [
                        {
                          "replace": "src/environments/environment.ts",
                          "with": "src/environments/environment.prod.ts"
                        }
                      ],
                      "optimization": true,
                      "outputHashing": "all",
                      "sourceMap": false,
                      "extractCss": true,
                      "namedChunks": false,
                      "aot": true,
                      "extractLicenses": true,
                      "vendorChunk": false,
                      "buildOptimizer": true
                    }
                  }
                },
                "serve": {
                  "builder": "@angular-devkit/build-angular:dev-server",
                  "options": {
                    "browserTarget": "demo:build"
                  },
                  "configurations": {
                    "production": {
                      "browserTarget": "demo:build:production"
                    }
                  }
                },
                "extract-i18n": {
                  "builder": "@angular-devkit/build-angular:extract-i18n",
                  "options": {
                    "browserTarget": "demo:build"
                  }
                },
                "test": {
                  "builder": "@angular-devkit/build-angular:karma",
                  "options": {
                    "main": "src/test.ts",
                    "polyfills": "src/polyfills.ts",
                    "tsConfig": "src/tsconfig.spec.json",
                    "karmaConfig": "src/karma.conf.js",
                    "styles": ["styles.css"],
                    "scripts": [],
                    "assets": ["src/favicon.ico", "src/assets"]
                  }
                },
                "lint": {
                  "builder": "@angular-devkit/build-angular:tslint",
                  "options": {
                    "tsConfig": ["src/tsconfig.app.json", "src/tsconfig.spec.json"],
                    "exclude": ["**/node_modules/**"]
                  }
                }
              }
            }
          },
          "defaultProject": "demo"
        }
        `,
      },
      {
        name: "global_styles.css",
        path: "src",
        content: `/* Add application styles & imports to this file! */`,
      },
      
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "qgnioqqrg.github",
          "version": "0.0.0",
          "private": true,
          "scripts": {
            "ng": "ng",
            "start": "ng serve",
            "build": "ng build",
            "test": "ng test",
            "lint": "ng lint",
            "e2e": "ng e2e"
          },
          "dependencies": {
            "@angular/animations": "^15.1.2",
            "@angular/common": "^15.1.2",
            "@angular/compiler": "^15.1.2",
            "@angular/core": "^15.1.2",
            "@angular/forms": "^15.1.2",
            "@angular/platform-browser": "^15.1.2",
            "@angular/platform-browser-dynamic": "^15.1.2",
            "@angular/router": "^15.1.2",
            "rxjs": "^7.8.0",
            "tslib": "^2.5.0",
            "zone.js": "^0.12.0"
          },
          "devDependencies": {
            "@angular-devkit/build-angular": "15.1.0-next.2",
            "@angular/cli": "15.1.0-next.2",
            "@angular/compiler-cli": "15.1.0-next.2",
            "@types/jasmine": "~4.0.0",
            "jasmine-core": "~4.1.0",
            "karma": "~6.3.0",
            "karma-chrome-launcher": "~3.1.0",
            "karma-coverage": "~2.2.0",
            "karma-jasmine": "~5.0.0",
            "karma-jasmine-html-reporter": "~1.7.0",
            "typescript": "~4.7.2"
          }
        }`,
      },
      {
        name: "index.html",
        path: "src",
        content: `<html>
        <head>
          <title>My app</title>
        </head>
        <body>
          <my-app>Loading...</my-app>
        </body>
      </html>
      `,
      },
      {
        name: "main.ts",
        path: "src",
        content: ``,
      },
      {
        name: "tsconfig.json",
        path: "src",
        content: `{
          "compileOnSave": false,
          "compilerOptions": {
            "strict": true,
            "baseUrl": "./",
            "outDir": "./dist/out-tsc",
            "sourceMap": true,
            "declaration": false,
            "downlevelIteration": true,
            "experimentalDecorators": true,
            "module": "esnext",
            "moduleResolution": "node",
            "importHelpers": true,
            "target": "es2015",
            "typeRoots": ["node_modules/@types"],
            "lib": ["es2018", "dom"]
          },
          "angularCompilerOptions": {
            "strictTemplates": true,
            "strictInjectionParameters": true
          }
        }
        `,
      },
    ],
  },
  vue: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.js",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>Vue App</title>
          </head>
          <body>
            
            <noscript>
              <strong>We're sorry but Vue App doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
            </noscript>
            <div id="app"></div>
            <!-- built files will be auto injected -->
          </body>
        </html>
        `,
      },
      
      {
        name: "App.vue",
        path: "src",
        content: `<template>
        <div id="app">
          <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </template>
      
      <script>
      import HelloWorld from './components/HelloWorld.vue'
      
      export default {
        name: 'App',
        components: {
          HelloWorld
        }
      }
      </script>
      
      <style>
      #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
      }
      </style>
      `,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "sb-vue",
          "version": "0.1.0",
          "private": true,
          "scripts": {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint"
          },
          "dependencies": {
            "vue": "^3.2.26"
          },
          "devDependencies": {
            "@vue/cli-plugin-babel": "^4.4.0",
            "@vue/cli-plugin-eslint": "^4.4.0",
            "@vue/cli-service": "^4.4.0",
            "babel-eslint": "^10.1.0",
            "eslint": "^6.7.2",
            "eslint-plugin-vue": "^6.2.2",
            "vue-template-compiler": "^2.6.11"
          }
        }`,
      },
      {
        name: "main.js",
        path: "src",
        content: `const { createApp } = require('vue');
        import App from "./App.vue";
        
        createApp(App).mount("#app");
        `,
      },
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta
      name="description"  
      content="Web site created using create-react-app"
  />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>React App</title>
  </head>
  <body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  </body>
  </html>`,
      },
      {
        name: "manifest.json",
        path: "public",
        content: `{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
  {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
  },
  {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
  },
  {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
  }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
  }`,
      },
      {
        name: "vue.config.js",
        path: "",
        content: `module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true
  }
}
`,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "mevn-starter",
          "version": "0.1.0",
          "private": true,
          "scripts": {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint"
          },
          "dependencies": {
            "axios": "^0.26.0",
            "core-js": "^3.6.5",
            "vue": "^2.6.11",
            "vue-router": "^3.2.0",
            "vuex": "^3.4.0",
            "vue-cookies": "^1.7.4"
          },
          "devDependencies": {
            "@vue/cli-plugin-babel": "~4.5.15",
            "@vue/cli-plugin-eslint": "~4.5.15",
            "@vue/cli-plugin-router": "~4.5.15",
            "@vue/cli-plugin-vuex": "~4.5.15",
            "@vue/cli-service": "~4.5.15",
            "@vue/eslint-config-standard": "^5.1.2",
            "babel-eslint": "^10.1.0",
            "eslint": "^6.7.2",
            "eslint-plugin-import": "^2.20.2",
            "eslint-plugin-node": "^11.1.0",
            "eslint-plugin-promise": "^4.2.1",
            "eslint-plugin-standard": "^4.0.0",
            "eslint-plugin-vue": "^6.2.2",
            "node-sass": "^4.12.0",
            "sass-loader": "^8.0.2",
            "vue-template-compiler": "^2.6.11"
          }
        }
        `,
      },
      {
        name: "babel.config.js",
        path: "",
        content: `module.exports = {
          presets: [
            '@vue/cli-plugin-babel/preset'
          ]
        }
        `,
      },
      {
        name: ".eslintrc.js",
        path: "",
        content: `module.exports = {
          root: true,
          env: {
            node: true
          },
          extends: [
            'plugin:vue/essential',
            '@vue/standard'
          ],
          parserOptions: {
            parser: 'babel-eslint'
          },
          rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
          }
        }
        `,
      },
      {
        name: ".editorconfig",
        path: "",
        content: `[*.{js,jsx,ts,tsx,vue}]
        indent_style = space
        indent_size = 2
        trim_trailing_whitespace = true
        insert_final_newline = true
        `,
      },

      {
        name: "Welcome.vue",
        path: "src/components",
        content: `<template>
        <div class="welcome">
          <h3>¡Bienvenido a Bipi!</h3>
          <h4>Selecciona una de las siguientes regiones para ver los vehículos:</h4>
          <ul class="welcome__list">
            <li class="welcome__item" v-for="(region, index) in regions" :key="index">
              <router-link class="welcome__button" tag="button" :to="\`/vehicles\`">
                <img class="welcome__img" :src="require(\`@/assets/$.png\`)"/>
              </router-link>
            </li>
          </ul>
        </div>
      </template>
      
      <script>
      export default {
        props: {
          regions: Array,
          required: true,
        },
      };
      </script>
      
      <style lang="scss" scoped>
      .welcome {
        &__list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
      
        &__button {
          padding: 15px;
          cursor: pointer;
        }
      
        &__img {
          height: 30px;
        }
      }
      </style>
      `,
      },

      {
        name: "regions.js",
        path: "src/constants",
        content: `export default [
          { 'key': 'es', name: 'España' }
        ]`,
      },
      {
        name: "api.js",
        path: "src/plugins",
        content: `import axios from 'axios'

        const API_BASE_URL = 'https://skxvns.sse.codesandbox.io/'
        
        export default {
          install (Vue) {
            const axiosInstance = axios.create({
              baseURL: API_BASE_URL
            })
        
            axiosInstance.interceptors.response.use(
              (response) => {
                return response.data
              },
              (error) => {
                return Promise.reject(error);
              })
        
            Vue.prototype.$api = axiosInstance
          }
        }`,
      },
      {
        name: "index.js",
        path: "src/router",
        content: `import Vue from "vue";
        import VueRouter from "vue-router";
        
        Vue.use(VueRouter);
        
        const routes = [
          {
            path: "/",
            name: "Home",
            component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
          },
          {
            path: "/about",
            name: "About",
            component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
          },
          {
            path: "/login",
            name: "Login",
            component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
          },
          {
            path: "/vehicles/:region",
            name: "Vehicles",
            props: true,
            component: () =>
              import(/* webpackChunkName: "vehicles" */ "@/views/Vehicles.vue")
          }
        ];
        
        const router = new VueRouter({
          mode: "history",
          base: process.env.BASE_URL,
          routes
        });
        
        export default router;
        `,
      },
      {
        name: "About.vue",
        path: "src/views",
        content: `<template>
        <div class="about">
          <h1>¿Qué es Bipi?</h1>
          <p>Bipi es la nueva forma de tener coche sin comprarlo adaptándose a tus necesidades en todo momento.</p>
        </div>
      </template>
      `,
      },
      {
        name: "Home.vue",
        path: "src/views",
        content: `<template>
        <div class="home">
          <img alt="Bipi logo" src="../assets/bipi-logo.svg"/>
          <Welcome :regions="regions"/>
        </div>
      </template>
      
      <script>
      import regions from '@/constants/regions'
      import Welcome from '@/components/Welcome'
      
      export default {
        components: {
          Welcome
        },
        data () {
          return {
            regions: []
          }
        },
        created () {
          this.regions = regions
        }
      }
      </script>
      `,
      },
      {
        name: "Login.vue",
        path: "src/views",
        content: `<template>
        <div class="login">
          <img alt="Bipi logo" src="../assets/bipi-logo.svg"/>
          <form class="login__form" @submit.prevent="sendForm">
            <div class="login__field">
              <label class="login__field-label" for="email">Email</label>
              <input class="login__field-input" type="email" name="email" id="email" v-model="email">
            </div>
            <div class="login__field">
              <label class="login__field-label" for="password">Contraseña</label>
              <input class="login__field-input" type="password" name="password" id="password" v-model="password">
            </div>
            <div class="login__submit">
              <button class="login__submit-button" type="submit">Enviar</button>
            </div>
          </form>
          <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        </div>
      </template>
      
      <script>
      export default {
        data () {
          return {
            email: '',
            password: '',
            errors: []
          }
        },
        methods: {
          async sendForm() {
            this.errors = []
      
            if (!this.email) {
              this.errors.push('El email es obligatorio')
            }
      
            if (!this.password) {
              this.errors.push('La contraseña es obligatoria')
            }
      
            if (this.errors.length) {
              return
            }
          }
        }
      }
      </script>
      
      <style lang="scss" scoped>
      .login {
        padding-top: 20px;
        padding-bottom: 20px;
        border: 1px solid #2c3e50;
        width: 50%;
        margin: 0 auto;
        border-radius: 20px;
      
        &__form {
          padding: 0 20%;
        }
      
        &__field {
          display: flex;
          flex-direction: column;
          align-items: start;
          margin-bottom: 20px;
        }
      
        &__field-input {
          width: 100%;
        }
      }
      </style>`,
      },
      {
        name: "Vehicles.vue",
        path: "src/views",
        content: `<template>
        <div class="vehicles">
          <div class="vehicles__header">
            <span class="vehicles__header-title">País: {{ country }}</span>
          </div>
          <ul class="vehicles__list">
            <div class="vehicles__list-item" v-for="vehicle in vehicles" :key="vehicle._id" :class="{ 'vehicles__list-item-offer': vehicle.isOnOffer }">
              <h4 class="vehicles__list-item-title">{{ vehicle.brand }} {{ vehicle.model }}</h4>
              <div class="vehicles__list-item-prop-list">
                <div class="vehicles__list-item-prop">
                  <span class="vehicles__list-item-prop-key">Marca: </span>
                  <span class="vehicles__list-item-prop-value">{{ vehicle.brand }}</span>
                </div>
                <div class="vehicles__list-item-prop">
                  <span class="vehicles__list-item-prop-key">Modelo: </span>
                  <span class="vehicles__list-item-prop-value">{{ vehicle.model }}</span>
                </div>
                <div class="vehicles__list-item-prop" v-if="vehicle.isOnOffer">
                  <span class="vehicles__list-item-prop-key">Precio: </span>
                  <span class="vehicles__list-item-prop-value">{{ vehicle.price }}€</span>
                </div>
                <div class="vehicles__list-item-prop" v-else>
                  <span class="vehicles__list-item-prop-key">Precio en oferta: </span>
                  <span class="vehicles__list-item-prop-value">{{ vehicle.priceOnOffer }}€</span>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </template>
      
      <script>
      import regions from '@/constants/regions'
      
      export default {
        props: {
          region: {
            type: String,
            required: true
          }
        },
        data () {
          return {
            country: '',
            vehicles: []
          }
        },
        async created () {
          const region = regions.find((region) => region.key === this.region)
          this.country = region.name
      
          const vehicles = await this.$api.get('vehicles', { params: { region: this.region } })
          this.vehicles = vehicles
        }
      }
      </script>
      
      <style lang="scss" scoped>
      .vehicles {
        &__header {
          display: flex;
          justify-content: space-evenly;
        }
      
        &__list {
          list-style: none;
          padding: 0;
        }
      
        &__list-item {
          border: 1px solid #2c3e50;
          border-radius: 20px;
          margin-bottom: 20px;
          padding-bottom: 20px;
        }
      
        &__list-item-offer {
          border: 1px solid #EC0044;
        }
      
        &__list-item-prop-list {
          display: flex;
          justify-content: space-evenly;
        }
      
        &__list-item-prop-key {
          font-weight: bold;
        }
      }
      </style>`,
      },
      {
        name: "main.js",
        path: "",
        content: `import Vue from 'vue'
        import App from './App.vue'
        import router from './router'
        import api from './plugins/api'
        
        Vue.use(api)
        
        Vue.config.productionTip = false
        
        new Vue({
          router,
          render: h => h(App)
        }).$mount('#app')
        `,
      },
    ],
  },
  mean: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "src",
        content: `<!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>MeanCourse</title>
          <base href="/">
        
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="icon" type="image/x-icon" href="favicon.ico">
        </head>
        <body>
          <app-root></app-root>
        </body>
        </html>
        
        `,
      },
      
      {
        name: "karma.conf.js",
        path: "src",
        content: `// Karma configuration file, see link for more information
        // https://karma-runner.github.io/1.0/config/configuration-file.html
        
        module.exports = function (config) {
          config.set({
            basePath: '',
            frameworks: ['jasmine', '@angular-devkit/build-angular'],
            plugins: [
              require('karma-jasmine'),
              require('karma-chrome-launcher'),
              require('karma-jasmine-html-reporter'),
              require('karma-coverage-istanbul-reporter'),
              require('@angular-devkit/build-angular/plugins/karma')
            ],
            client: {
              clearContext: false // leave Jasmine Spec Runner output visible in browser
            },
            coverageIstanbulReporter: {
              dir: require('path').join(__dirname, '../coverage'),
              reports: ['html', 'lcovonly'],
              fixWebpackSourcePaths: true
            },
            reporters: ['progress', 'kjhtml'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: true,
            browsers: ['Chrome'],
            singleRun: false
          });
        };`,
      },
      {
        name: "main.ts",
        path: "src",
        content: `import { enableProdMode } from '@angular/core';
        import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
        
        import { AppModule } from './app/app.module';
        import { environment } from './environments/environment';
        
        if (environment.production) {
          enableProdMode();
        }
        
        platformBrowserDynamic().bootstrapModule(AppModule)
          .catch(err => console.log(err));
        `,
      },
      {
        name: "polyfills.ts",
        path: "src",
        content: `import 'core-js/es7/reflect';
        import 'zone.js/dist/zone'; `,
      },
      {
        name: "test.ts",
        path: "src",
        content: `// This file is required by karma.conf.js and loads recursively all the .spec and framework files

        import 'zone.js/dist/zone-testing';
        import { getTestBed } from '@angular/core/testing';
        import {
          BrowserDynamicTestingModule,
          platformBrowserDynamicTesting
        } from '@angular/platform-browser-dynamic/testing';
        
        declare const require: any;
        
        // First, initialize the Angular testing environment.
        getTestBed().initTestEnvironment(
          BrowserDynamicTestingModule,
          platformBrowserDynamicTesting()
        );
        // Then we find all the tests.
        const context = require.context('./', true, /\.spec\.ts$/);
        // And load the modules.
        context.keys().map(context);
        `,
      },
      {
        name: "tsconfig.app.json",
        path: "src",
        content: `{
          "extends": "../tsconfig.json",
          "compilerOptions": {
            "outDir": "../out-tsc/app",
            "module": "es2015",
            "types": []
          },
          "exclude": [
            "src/test.ts",
            "**/*.spec.ts"
          ]
        }
        `,
      },
      {
        name: "tslint.json",
        path: "src",
        content: `{
          "extends": "../tslint.json",
          "rules": {
              "directive-selector": [
                  true,
                  "attribute",
                  "app",
                  "camelCase"
              ],
              "component-selector": [
                  true,
                  "element",
                  "app",
                  "kebab-case"
              ]
          }
      }
      `,
      },
      {
        name: "tsconfig.spec.json",
        path: "src",
        content: `{
          "extends": "../tsconfig.json",
          "compilerOptions": {
            "outDir": "../out-tsc/spec",
            "module": "commonjs",
            "types": [
              "jasmine",
              "node"
            ]
          },
          "files": [
            "test.ts",
            "polyfills.ts"
          ],
          "include": [
            "**/*.spec.ts",
            "**/*.d.ts"
          ]
        }
        `,
      },
      {
        name: ".angular-cli.json",
        path: "src",
        content: `{
          "apps": [
            {
              "root": "src",
              "outDir": "dist",
              "assets": ["assets", "favicon.ico"],
              "index": "index.html",
              "main": "main.ts",
              "polyfills": "polyfills.ts",
              "prefix": "app",
              "styles": ["styles.css"],
              "scripts": [],
              "environmentSource": "environments/environment.ts",
              "environments": {
                "dev": "environments/environment.ts",
                "prod": "environments/environment.prod.ts"
              }
            }
          ]
        }
        `,
      },
      {
        name: ".editorconfig",
        path: "src",
        content: `# Editor configuration, see http://editorconfig.org
        root = true
        
        [*]
        charset = utf-8
        indent_style = space
        indent_size = 2
        insert_final_newline = true
        trim_trailing_whitespace = true
        
        [*.md]
        max_line_length = off
        trim_trailing_whitespace = false
        `,
      },
      {
        name: ".gitignore",
        path: "src",
        content: `# See http://help.github.com/ignore-files/ for more about ignoring files.

        # compiled output
        /dist
        /tmp
        /out-tsc
        
        # dependencies
        /node_modules
        
        # IDEs and editors
        /.idea
        .project
        .classpath
        .c9/
        *.launch
        .settings/
        *.sublime-workspace
        
        # IDE - VSCode
        .vscode/*
        !.vscode/settings.json
        !.vscode/tasks.json
        !.vscode/launch.json
        !.vscode/extensions.json
        
        # misc
        /.sass-cache
        /connect.lock
        /coverage
        /libpeerconnection.log
        npm-debug.log
        yarn-error.log
        testem.log
        /typings
        
        # System Files
        .DS_Store
        Thumbs.db
        `,
      },
      {
        name: "package.json",
        path: "src",
        content: `{
          "name": "mean-course",
          "version": "0.0.0",
          "scripts": {
            "ng": "ng",
            "start": "ng serve",
            "build": "ng build",
            "test": "ng test",
            "lint": "ng lint",
            "e2e": "ng e2e"
          },
          "private": true,
          "dependencies": {
            "@angular/animations": "^6.0.0",
            "@angular/common": "^6.0.0",
            "@angular/compiler": "^6.0.0",
            "@angular/core": "^6.0.0",
            "@angular/forms": "^6.0.0",
            "@angular/http": "^6.0.0",
            "@angular/platform-browser": "^6.0.0",
            "@angular/platform-browser-dynamic": "^6.0.0",
            "@angular/router": "^6.0.0",
            "core-js": "^2.5.4",
            "rxjs": "^6.0.0",
            "zone.js": "^0.8.26"
          },
          "devDependencies": {
            "@angular/compiler-cli": "^6.0.0",
            "@angular-devkit/build-angular": "~0.6.0",
            "typescript": "~2.7.2",
            "@angular/cli": "~6.0.0",
            "@angular/language-service": "^6.0.0",
            "@types/jasmine": "~2.8.6",
            "@types/jasminewd2": "~2.0.3",
            "@types/node": "~8.9.4",
            "codelyzer": "~4.2.1",
            "jasmine-core": "~2.99.1",
            "jasmine-spec-reporter": "~4.2.1",
            "karma": "~1.7.1",
            "karma-chrome-launcher": "~2.2.0",
            "karma-coverage-istanbul-reporter": "~1.4.2",
            "karma-jasmine": "~1.1.1",
            "karma-jasmine-html-reporter": "^0.2.2",
            "protractor": "~5.3.0",
            "ts-node": "~5.0.1",
            "tslint": "~5.9.1"
          }
        }
        `,
      },
      {
        name: "tsconfig.json",
        path: "src",
        content: `{
          "compileOnSave": false,
          "compilerOptions": {
            "baseUrl": "./",
            "outDir": "./dist/out-tsc",
            "sourceMap": true,
            "declaration": false,
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "target": "es5",
            "typeRoots": [
              "node_modules/@types"
            ],
            "lib": [
              "es2017",
              "dom"
            ]
          }
        }
        `,
      },
      {
        name: "tslint.json",
        path: "src",
        content: `{
          "rulesDirectory": [
            "node_modules/codelyzer"
          ],
          "rules": {
            "arrow-return-shorthand": true,
            "callable-types": true,
            "class-name": true,
            "comment-format": [
              true,
              "check-space"
            ],
            "curly": true,
            "deprecation": {
              "severity": "warn"
            },
            "eofline": true,
            "forin": true,
            "import-blacklist": [
              true,
              "rxjs/Rx"
            ],
            "import-spacing": true,
            "indent": [
              true,
              "spaces"
            ],
            "interface-over-type-literal": true,
            "label-position": true,
            "max-line-length": [
              true,
              140
            ],
            "member-access": false,
            "member-ordering": [
              true,
              {
                "order": [
                  "static-field",
                  "instance-field",
                  "static-method",
                  "instance-method"
                ]
              }
            ],
            "no-arg": true,
            "no-bitwise": true,
            "no-console": [
              true,
              "debug",
              "info",
              "time",
              "timeEnd",
              "trace"
            ],
            "no-construct": true,
            "no-debugger": true,
            "no-duplicate-super": true,
            "no-empty": false,
            "no-empty-interface": true,
            "no-eval": true,
            "no-inferrable-types": [
              true,
              "ignore-params"
            ],
            "no-misused-new": true,
            "no-non-null-assertion": true,
            "no-shadowed-variable": true,
            "no-string-literal": false,
            "no-string-throw": true,
            "no-switch-case-fall-through": true,
            "no-trailing-whitespace": true,
            "no-unnecessary-initializer": true,
            "no-unused-expression": true,
            "no-use-before-declare": true,
            "no-var-keyword": true,
            "object-literal-sort-keys": false,
            "one-line": [
              true,
              "check-open-brace",
              "check-catch",
              "check-else",
              "check-whitespace"
            ],
            "prefer-const": true,
            "quotemark": [
              true,
              "single"
            ],
            "radix": true,
            "semicolon": [
              true,
              "always"
            ],
            "triple-equals": [
              true,
              "allow-null-check"
            ],
            "typedef-whitespace": [
              true,
              {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
              }
            ],
            "unified-signatures": true,
            "variable-name": false,
            "whitespace": [
              true,
              "check-branch",
              "check-decl",
              "check-operator",
              "check-separator",
              "check-type"
            ],
            "no-output-on-prefix": true,
            "use-input-property-decorator": true,
            "use-output-property-decorator": true,
            "use-host-property-decorator": true,
            "no-input-rename": true,
            "no-output-rename": true,
            "use-life-cycle-interface": true,
            "use-pipe-transform-interface": true,
            "component-class-suffix": true,
            "directive-class-suffix": true
          }
        }
        `,
      },
    ],
  },
  nest: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "app.controller.spec.ts",
        path: "src",
        content: `import { Test, TestingModule } from '@nestjs/testing';
        import { AppController } from './app.controller';
        import { AppService } from './app.service';
        
        describe('AppController', () => {
          let app: TestingModule;
        
          beforeAll(async () => {
            app = await Test.createTestingModule({
              controllers: [AppController],
              providers: [AppService],
            }).compile();
          });
        
          describe('getHello', () => {
            it('should return "Hello World!"', () => {
              const appController = app.get<AppController>(AppController);
              expect(appController.getHello()).toBe('Hello World!');
            });
          });
        });
        `,
      },
      
      {
        name: "app.controller.ts",
        path: "src",
        content: `import { Controller, Get } from '@nestjs/common';
        import { AppService } from './app.service';
        
        @Controller()
        export class AppController {
          constructor(private readonly appService: AppService) {}
        
          @Get()
          getHello(): string {
            return this.appService.getHello();
          }
        }
        `,
      },
      {
        name: "app.module.ts",
        path: "src",
        content: `import { Module } from '@nestjs/common';
        import { AppController } from './app.controller';
        import { AppService } from './app.service';
        
        @Module({
          imports: [],
          controllers: [AppController],
          providers: [AppService],
        })
        export class AppModule {}
        `,
      },
      
      {
        name: "app.service.ts",
        path: "src",
        content: `import { Injectable } from '@nestjs/common';

        @Injectable()
        export class AppService {
          getHello(): string {
            return 'Hello World!';
          }
        }
        `,
      },
      {
        name: "main.ts",
        path: "src",
        content: `import { NestFactory } from '@nestjs/core';
        import { AppModule } from './app.module';
        
        async function bootstrap() {
          const app = await NestFactory.create(AppModule);
          await app.listen(3000);
        }
        bootstrap();
        `,
      },
      {
        name: ".gitignore",
        path: "",
        content: `# Created by .ignore support plugin (hsz.mobi)
        ### JetBrains template
        # Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio and Webstorm
        # Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
        
        # User-specific stuff:
        .idea/**/workspace.xml
        .idea/**/tasks.xml
        .idea/dictionaries
        
        # Sensitive or high-churn files:
        .idea/**/dataSources/
        .idea/**/dataSources.ids
        .idea/**/dataSources.xml
        .idea/**/dataSources.local.xml
        .idea/**/sqlDataSources.xml
        .idea/**/dynamic.xml
        .idea/**/uiDesigner.xml
        
        # Gradle:
        .idea/**/gradle.xml
        .idea/**/libraries
        
        # CMake
        cmake-build-debug/
        
        # Mongo Explorer plugin:
        .idea/**/mongoSettings.xml
        
        ## File-based project format:
        *.iws
        
        ## Plugin-specific files:
        
        # IntelliJ
        out/
        
        # mpeltonen/sbt-idea plugin
        .idea_modules/
        
        # JIRA plugin
        atlassian-ide-plugin.xml
        
        # Cursive Clojure plugin
        .idea/replstate.xml
        
        # Crashlytics plugin (for Android Studio and IntelliJ)
        com_crashlytics_export_strings.xml
        crashlytics.properties
        crashlytics-build.properties
        fabric.properties
        ### VisualStudio template
        ## Ignore Visual Studio temporary files, build results, and
        ## files generated by popular Visual Studio add-ons.
        ##
        ## Get latest from https://github.com/github/gitignore/blob/master/VisualStudio.gitignore
        
        # User-specific files
        *.suo
        *.user
        *.userosscache
        *.sln.docstates
        
        # User-specific files (MonoDevelop/Xamarin Studio)
        *.userprefs
        
        # Build results
        [Dd]ebug/
        [Dd]ebugPublic/
        [Rr]elease/
        [Rr]eleases/
        x64/
        x86/
        bld/
        [Bb]in/
        [Oo]bj/
        [Ll]og/
        
        # Visual Studio 2015 cache/options directory
        .vs/
        # Uncomment if you have tasks that create the project's static files in wwwroot
        #wwwroot/
        
        # MSTest test Results
        [Tt]est[Rr]esult*/
        [Bb]uild[Ll]og.*
        
        # NUNIT
        *.VisualState.xml
        TestResult.xml
        
        # Build Results of an ATL Project
        [Dd]ebugPS/
        [Rr]eleasePS/
        dlldata.c
        
        # Benchmark Results
        BenchmarkDotNet.Artifacts/
        
        # .NET Core
        project.lock.json
        project.fragment.lock.json
        artifacts/
        **/Properties/launchSettings.json
        
        *_i.c
        *_p.c
        *_i.h
        *.ilk
        *.meta
        *.obj
        *.pch
        *.pdb
        *.pgc
        *.pgd
        *.rsp
        *.sbr
        *.tlb
        *.tli
        *.tlh
        *.tmp
        *.tmp_proj
        *.log
        *.vspscc
        *.vssscc
        .builds
        *.pidb
        *.svclog
        *.scc
        
        # Chutzpah Test files
        _Chutzpah*
        
        # Visual C++ cache files
        ipch/
        *.aps
        *.ncb
        *.opendb
        *.opensdf
        *.sdf
        *.cachefile
        *.VC.db
        *.VC.VC.opendb
        
        # Visual Studio profiler
        *.psess
        *.vsp
        *.vspx
        *.sap
        
        # Visual Studio Trace Files
        *.e2e
        
        # TFS 2012 Local Workspace
        $tf/
        
        # Guidance Automation Toolkit
        *.gpState
        
        # ReSharper is a .NET coding add-in
        _ReSharper*/
        *.[Rr]e[Ss]harper
        *.DotSettings.user
        
        # JustCode is a .NET coding add-in
        .JustCode
        
        # TeamCity is a build add-in
        _TeamCity*
        
        # DotCover is a Code Coverage Tool
        *.dotCover
        
        # AxoCover is a Code Coverage Tool
        .axoCover/*
        !.axoCover/settings.json
        
        # Visual Studio code coverage results
        *.coverage
        *.coveragexml
        
        # NCrunch
        _NCrunch_*
        .*crunch*.local.xml
        nCrunchTemp_*
        
        # MightyMoose
        *.mm.*
        AutoTest.Net/
        
        # Web workbench (sass)
        .sass-cache/
        
        # Installshield output folder
        [Ee]xpress/
        
        # DocProject is a documentation generator add-in
        DocProject/buildhelp/
        DocProject/Help/*.HxT
        DocProject/Help/*.HxC
        DocProject/Help/*.hhc
        DocProject/Help/*.hhk
        DocProject/Help/*.hhp
        DocProject/Help/Html2
        DocProject/Help/html
        
        # Click-Once directory
        publish/
        
        # Publish Web Output
        *.[Pp]ublish.xml
        *.azurePubxml
        # Note: Comment the next line if you want to checkin your web deploy settings,
        # but database connection strings (with potential passwords) will be unencrypted
        *.pubxml
        *.publishproj
        
        # Microsoft Azure Web App publish settings. Comment the next line if you want to
        # checkin your Azure Web App publish settings, but sensitive information contained
        # in these scripts will be unencrypted
        PublishScripts/
        
        # NuGet Packages
        *.nupkg
        # The packages folder can be ignored because of Package Restore
        **/[Pp]ackages/*
        # except build/, which is used as an MSBuild target.
        !**/[Pp]ackages/build/
        # Uncomment if necessary however generally it will be regenerated when needed
        #!**/[Pp]ackages/repositories.config
        # NuGet v3's project.json files produces more ignorable files
        *.nuget.props
        *.nuget.targets
        
        # Microsoft Azure Build Output
        csx/
        *.build.csdef
        
        # Microsoft Azure Emulator
        ecf/
        rcf/
        
        # Windows Store app package directories and files
        AppPackages/
        BundleArtifacts/
        Package.StoreAssociation.xml
        _pkginfo.txt
        *.appx
        
        # Visual Studio cache files
        # files ending in .cache can be ignored
        *.[Cc]ache
        # but keep track of directories ending in .cache
        !*.[Cc]ache/
        
        # Others
        ClientBin/
        ~$*
        *~
        *.dbmdl
        *.dbproj.schemaview
        *.jfm
        *.pfx
        *.publishsettings
        orleans.codegen.cs
        
        # Since there are multiple workflows, uncomment next line to ignore bower_components
        # (https://github.com/github/gitignore/pull/1529#issuecomment-104372622)
        #bower_components/
        
        # RIA/Silverlight projects
        Generated_Code/
        
        # Backup & report files from converting an old project file
        # to a newer Visual Studio version. Backup files are not needed,
        # because we have git ;-)
        _UpgradeReport_Files/
        Backup*/
        UpgradeLog*.XML
        UpgradeLog*.htm
        
        # SQL Server files
        *.mdf
        *.ldf
        *.ndf
        
        # Business Intelligence projects
        *.rdl.data
        *.bim.layout
        *.bim_*.settings
        
        # Microsoft Fakes
        FakesAssemblies/
        
        # GhostDoc plugin setting file
        *.GhostDoc.xml
        
        # Node.js Tools for Visual Studio
        .ntvs_analysis.dat
        node_modules/
        
        # Typescript v1 declaration files
        typings/
        
        # Visual Studio 6 build log
        *.plg
        
        # Visual Studio 6 workspace options file
        *.opt
        
        # Visual Studio 6 auto-generated workspace file (contains which files were open etc.)
        *.vbw
        
        # Visual Studio LightSwitch build output
        **/*.HTMLClient/GeneratedArtifacts
        **/*.DesktopClient/GeneratedArtifacts
        **/*.DesktopClient/ModelManifest.xml
        **/*.Server/GeneratedArtifacts
        **/*.Server/ModelManifest.xml
        _Pvt_Extensions
        
        # Paket dependency manager
        .paket/paket.exe
        paket-files/
        
        # FAKE - F# Make
        .fake/
        
        # JetBrains Rider
        .idea/
        *.sln.iml
        
        # CodeRush
        .cr/
        
        # Python Tools for Visual Studio (PTVS)
        __pycache__/
        *.pyc
        
        # Cake - Uncomment if you are using it
        # tools/**
        # !tools/packages.config
        
        # Tabs Studio
        *.tss
        
        # Telerik's JustMock configuration file
        *.jmconfig
        
        # BizTalk build output
        *.btp.cs
        *.btm.cs
        *.odx.cs
        *.xsd.cs
        
        # OpenCover UI analysis results
        OpenCover/
        coverage/
        
        ### macOS template
        # General
        .DS_Store
        .AppleDouble
        .LSOverride
        
        # Icon must end with two \r
        Icon
        
        # Thumbnails
        ._*
        
        # Files that might appear in the root of a volume
        .DocumentRevisions-V100
        .fseventsd
        .Spotlight-V100
        .TemporaryItems
        .Trashes
        .VolumeIcon.icns
        .com.apple.timemachine.donotpresent
        
        # Directories potentially created on remote AFP share
        .AppleDB
        .AppleDesktop
        Network Trash Folder
        Temporary Items
        .apdisk
        
        =======
        # Local
        docker-compose.yml
        .env
        dist
        `,
      },
      // {
      //   name: ".prettierrc",
      //   path: "",
      //   content: `Sign up for free to create unlimited sandboxes
      //   0/3 Sandboxes used - Anonymous
        
      //   Template
      //   nestjs / typescript-starter / master
        
      //   0
      //   Embed
      //   Fork
      //   Create
      //   Sign in
        
        
        
        
        
        
      //   Template Info
        
      //   nestjs
      //   Nest TypeScript starter repository
      //   0
      //   964
      //   177
      //   skurt23
      //   skurt23
      //   Alejandro M. Alberto
      //   Forked From
      //   nest-typescript-starter
      //   Environment
      //   nest
      //   Files
        
      //   Dependencies
        
      //   Add Dependency
        
      //   @nestjs/common
      //   ^6.0.4 (6.11.11)
      //   @nestjs/core
      //   ^6.0.4 (6.11.11)
      //   @nestjs/microservices
      //   ^6.0.4 (6.11.11)
      //   @nestjs/platform-express
      //   ^6.0.4 (6.11.11)
      //   @nestjs/websockets
      //   ^6.0.4 (6.11.11)
      //   reflect-metadata
      //   0.1.13
      //   rimraf
      //   2.6.3
      //   rxjs
      //   6.4.0
      //   External resources
        
      //   Supported Configuration
      //   .PRETTIERRC
      //   Open file in editor
      //   Defines how all files will be prettified by Prettier. More info...
        
      //   Print Width
      //   Specify the line length that the printer will wrap on.
      //   Tab Width
      //   Specify the number of spaces per indentation-level.
      //   Use Tabs
        
      //   Indent lines with tabs instead of spaces.
      //   Semicolons
        
      //   Print semicolons at the ends of statements.
      //   Use Single Quotes
        
      //   Use 'single' quotes instead of "double" quotes.
      //   Trailing Commas
        
      //   all
      //   Print trailing commas wherever possible.
      //   Bracket Spacing
        
      //   Print spaces between brackets in object literals.
      //   JSX Brackets
        
      //   Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
      //   Arrow Function Parentheses
        
      //   avoid
      //   Include parentheses around a sole arrow function parameter.
        
        
        
      //   https://zqp45.sse.codesandbox.io/
        
        
        
        
      //   debe5e3f8
      //   debe5e3f8
      //   Ln 393, Col 1 (6628 selected)Spaces: 2UTF-8LFPlain Text
      //   `,
      // },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "nestjs",
          "private": true,
          "version": "1.0.0",
          "description": "Nest TypeScript starter repository",
          "license": "MIT",
          "scripts": {
            "build": "rimraf dist && tsc -p tsconfig.build.json",
            "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
            "start": "ts-node -r tsconfig-paths/register src/main.ts",
            "start:dev": "tsc-watch -p tsconfig.build.json --onSuccess \"node dist/main.js\"",
            "start:debug": "tsc-watch -p tsconfig.build.json --onSuccess \"node --inspect-brk dist/main.js\"",
            "start:prod": "node dist/main.js",
            "lint": "tslint -p tsconfig.json -c tslint.json",
            "test": "jest",
            "test:watch": "jest --watch",
            "test:cov": "jest --coverage",
            "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
            "test:e2e": "jest --config ./test/jest-e2e.json"
          },
          "dependencies": {
            "@nestjs/common": "^6.0.4",
            "@nestjs/core": "^6.0.4",
            "@nestjs/microservices": "^6.0.4",
            "@nestjs/platform-express": "^6.0.4",
            "@nestjs/websockets": "^6.0.4",
            "reflect-metadata": "0.1.13",
            "rimraf": "2.6.3",
            "rxjs": "6.4.0"
          },
          "devDependencies": {
            "@nestjs/testing": "6.1.1",
            "@types/express": "4.16.1",
            "@types/jest": "24.0.11",
            "@types/node": "11.13.4",
            "@types/supertest": "2.0.7",
            "jest": "24.7.1",
            "prettier": "1.17.0",
            "supertest": "4.0.2",
            "ts-jest": "24.0.2",
            "ts-node": "8.1.0",
            "tsc-watch": "2.2.1",
            "tsconfig-paths": "3.8.0",
            "tslint": "5.16.0",
            "typescript": "3.4.3"
          },
          "jest": {
            "moduleFileExtensions": [
              "js",
              "json",
              "ts"
            ],
            "rootDir": "src",
            "testRegex": ".spec.ts$",
            "transform": {
              "^.+\\.(t|j)s$": "ts-jest"
            },
            "collectCoverageFrom": [
              "**/*.(t|j)s"
            ],
            "coverageDirectory": "../coverage",
            "testEnvironment": "node"
          },
          "keywords": []
        }`,
      },
      {
        name: "tsconfig.build.json",
        path: "",
        content: `{
          "extends": "./tsconfig.json",
          "exclude": ["node_modules", "dist", "test", "**/*spec.ts"]
        }
        `,
      },
      {
        name: "tsconfig.json",
        path: "",
        content: `{
          "compilerOptions": {
            "module": "commonjs",
            "declaration": true,
            "removeComments": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "target": "es2017",
            "sourceMap": true,
            "outDir": "./dist",
            "baseUrl": "./",
            "incremental": true
          },
          "exclude": ["node_modules", "dist"]
        }
        `,
      },
      {
        name: "tslint.json",
        path: "",
        content: `{
          "defaultSeverity": "error",
          "extends": ["tslint:recommended"],
          "jsRules": {
            "no-unused-expression": true
          },
          "rules": {
            "quotemark": [true, "single"],
            "member-access": [false],
            "ordered-imports": [false],
            "max-line-length": [true, 150],
            "member-ordering": [false],
            "interface-name": [false],
            "arrow-parens": false,
            "object-literal-sort-keys": false
          },
          "rulesDirectory": []
        }
        `,
      },
      
    ],
  },
  "react-native": {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        <style>
          /* These styles make the body full-height */
          html,
          body {
            height: 100%;
          }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body {
            overflow: hidden;
          }
          /* These styles make the root element full-height */
          #root {
            display: flex;
            height: 100%;
          }
        </style>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "App.js",
        path: "src",
        content: `import React from "react";
        import { Image, Pressable, StyleSheet, Text, View } from "react-native";
        
        const logoUri = \`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>\`;
        
        function Link(props) {
          return <Text {...props} role="link" style={[styles.link, props.style]} />;
        }
        
        function App() {
          return (
            <View style={styles.app}>
              <View style={styles.header}>
                <Image
                  accessibilityLabel="React logo"
                  source={{ uri: logoUri }}
                  resizeMode="contain"
                  style={styles.logo}
                />
                <Text style={styles.title}>React Native for Web</Text>
              </View>
              <Text style={styles.text}>
                This is an example of an app built with{" "}
                <Link href="https://github.com/facebook/create-react-app">
                  Create React App
                </Link>{" "}
                and{" "}
                <Link href="https://github.com/necolas/react-native-web">
                  React Native for Web
                </Link>
              </Text>
              <Text style={styles.text}>
                To get started, edit{" "}
                <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
                  src/App.js
                </Link>
                .
              </Text>
              <Pressable onPress={() => {}} style={buttonStyles.button}>
                <Text style={buttonStyles.text}>Example button</Text>
              </Pressable>
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          app: {
            marginHorizontal: "auto",
            maxWidth: 500
          },
          logo: {
            height: 80
          },
          header: {
            padding: 20
          },
          title: {
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginVertical: "1em",
            textAlign: "center"
          },
          text: {
            lineHeight: "1.5em",
            fontSize: "1.125rem",
            marginVertical: "1em",
            textAlign: "center"
          },
          link: {
            color: "#1B95E0"
          },
          code: {
            fontFamily: "monospace, monospace"
          }
        });
        
        const buttonStyles = StyleSheet.create({
          button: {
            backgroundColor: "#2196F3",
            borderRadius: 2
          },
          text: {
            color: "#fff",
            fontWeight: "500",
            padding: 8,
            textAlign: "center",
            textTransform: "uppercase"
          }
        });
        
        export default App;
        \`,
      },
      {
        name: "app.module.ts",
        path: "src",
        content: \`import { Module } from '@nestjs/common';
        import { AppController } from './app.controller';
        import { AppService } from './app.service';
        
        @Module({
          imports: [],
          controllers: [AppController],
          providers: [AppService],
        })
        export class AppModule {}
        `,
      },
      
      {
        name: "index.js",
        path: "src",
        content: `import { AppRegistry } from "react-native";
        import App from "./App";
        
        AppRegistry.registerComponent("App", () => App);
        
        AppRegistry.runApplication("App", {
          rootTag: document.getElementById("root")
        });
        `,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "react-native",
          "version": "1.0.0",
          "description": "React Native for Web starter template",
          "keywords": [],
          "main": "src/index.js",
          "dependencies": {
            "react": "18.2.*",
            "react-dom": "18.2.*",
            "react-native-web": "0.19.*",
            "react-scripts": "3.3.0"
          },
          "devDependencies": {},
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
          }
        }
        `,
      },
      {
        name: ".gitignore",
        path: "",
        content: `# Created by .ignore support plugin (hsz.mobi)
        ### JetBrains template
        # Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio and Webstorm
        # Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
        
        # User-specific stuff:
        .idea/**/workspace.xml
        .idea/**/tasks.xml
        .idea/dictionaries
        
        # Sensitive or high-churn files:
        .idea/**/dataSources/
        .idea/**/dataSources.ids
        .idea/**/dataSources.xml
        .idea/**/dataSources.local.xml
        .idea/**/sqlDataSources.xml
        .idea/**/dynamic.xml
        .idea/**/uiDesigner.xml
        
        # Gradle:
        .idea/**/gradle.xml
        .idea/**/libraries
        
        # CMake
        cmake-build-debug/
        
        # Mongo Explorer plugin:
        .idea/**/mongoSettings.xml
        
        ## File-based project format:
        *.iws
        
        ## Plugin-specific files:
        
        # IntelliJ
        out/
        
        # mpeltonen/sbt-idea plugin
        .idea_modules/
        
        # JIRA plugin
        atlassian-ide-plugin.xml
        
        # Cursive Clojure plugin
        .idea/replstate.xml
        
        # Crashlytics plugin (for Android Studio and IntelliJ)
        com_crashlytics_export_strings.xml
        crashlytics.properties
        crashlytics-build.properties
        fabric.properties
        ### VisualStudio template
        ## Ignore Visual Studio temporary files, build results, and
        ## files generated by popular Visual Studio add-ons.
        ##
        ## Get latest from https://github.com/github/gitignore/blob/master/VisualStudio.gitignore
        
        # User-specific files
        *.suo
        *.user
        *.userosscache
        *.sln.docstates
        
        # User-specific files (MonoDevelop/Xamarin Studio)
        *.userprefs
        
        # Build results
        [Dd]ebug/
        [Dd]ebugPublic/
        [Rr]elease/
        [Rr]eleases/
        x64/
        x86/
        bld/
        [Bb]in/
        [Oo]bj/
        [Ll]og/
        
        # Visual Studio 2015 cache/options directory
        .vs/
        # Uncomment if you have tasks that create the project's static files in wwwroot
        #wwwroot/
        
        # MSTest test Results
        [Tt]est[Rr]esult*/
        [Bb]uild[Ll]og.*
        
        # NUNIT
        *.VisualState.xml
        TestResult.xml
        
        # Build Results of an ATL Project
        [Dd]ebugPS/
        [Rr]eleasePS/
        dlldata.c
        
        # Benchmark Results
        BenchmarkDotNet.Artifacts/
        
        # .NET Core
        project.lock.json
        project.fragment.lock.json
        artifacts/
        **/Properties/launchSettings.json
        
        *_i.c
        *_p.c
        *_i.h
        *.ilk
        *.meta
        *.obj
        *.pch
        *.pdb
        *.pgc
        *.pgd
        *.rsp
        *.sbr
        *.tlb
        *.tli
        *.tlh
        *.tmp
        *.tmp_proj
        *.log
        *.vspscc
        *.vssscc
        .builds
        *.pidb
        *.svclog
        *.scc
        
        # Chutzpah Test files
        _Chutzpah*
        
        # Visual C++ cache files
        ipch/
        *.aps
        *.ncb
        *.opendb
        *.opensdf
        *.sdf
        *.cachefile
        *.VC.db
        *.VC.VC.opendb
        
        # Visual Studio profiler
        *.psess
        *.vsp
        *.vspx
        *.sap
        
        # Visual Studio Trace Files
        *.e2e
        
        # TFS 2012 Local Workspace
        $tf/
        
        # Guidance Automation Toolkit
        *.gpState
        
        # ReSharper is a .NET coding add-in
        _ReSharper*/
        *.[Rr]e[Ss]harper
        *.DotSettings.user
        
        # JustCode is a .NET coding add-in
        .JustCode
        
        # TeamCity is a build add-in
        _TeamCity*
        
        # DotCover is a Code Coverage Tool
        *.dotCover
        
        # AxoCover is a Code Coverage Tool
        .axoCover/*
        !.axoCover/settings.json
        
        # Visual Studio code coverage results
        *.coverage
        *.coveragexml
        
        # NCrunch
        _NCrunch_*
        .*crunch*.local.xml
        nCrunchTemp_*
        
        # MightyMoose
        *.mm.*
        AutoTest.Net/
        
        # Web workbench (sass)
        .sass-cache/
        
        # Installshield output folder
        [Ee]xpress/
        
        # DocProject is a documentation generator add-in
        DocProject/buildhelp/
        DocProject/Help/*.HxT
        DocProject/Help/*.HxC
        DocProject/Help/*.hhc
        DocProject/Help/*.hhk
        DocProject/Help/*.hhp
        DocProject/Help/Html2
        DocProject/Help/html
        
        # Click-Once directory
        publish/
        
        # Publish Web Output
        *.[Pp]ublish.xml
        *.azurePubxml
        # Note: Comment the next line if you want to checkin your web deploy settings,
        # but database connection strings (with potential passwords) will be unencrypted
        *.pubxml
        *.publishproj
        
        # Microsoft Azure Web App publish settings. Comment the next line if you want to
        # checkin your Azure Web App publish settings, but sensitive information contained
        # in these scripts will be unencrypted
        PublishScripts/
        
        # NuGet Packages
        *.nupkg
        # The packages folder can be ignored because of Package Restore
        **/[Pp]ackages/*
        # except build/, which is used as an MSBuild target.
        !**/[Pp]ackages/build/
        # Uncomment if necessary however generally it will be regenerated when needed
        #!**/[Pp]ackages/repositories.config
        # NuGet v3's project.json files produces more ignorable files
        *.nuget.props
        *.nuget.targets
        
        # Microsoft Azure Build Output
        csx/
        *.build.csdef
        
        # Microsoft Azure Emulator
        ecf/
        rcf/
        
        # Windows Store app package directories and files
        AppPackages/
        BundleArtifacts/
        Package.StoreAssociation.xml
        _pkginfo.txt
        *.appx
        
        # Visual Studio cache files
        # files ending in .cache can be ignored
        *.[Cc]ache
        # but keep track of directories ending in .cache
        !*.[Cc]ache/
        
        # Others
        ClientBin/
        ~$*
        *~
        *.dbmdl
        *.dbproj.schemaview
        *.jfm
        *.pfx
        *.publishsettings
        orleans.codegen.cs
        
        # Since there are multiple workflows, uncomment next line to ignore bower_components
        # (https://github.com/github/gitignore/pull/1529#issuecomment-104372622)
        #bower_components/
        
        # RIA/Silverlight projects
        Generated_Code/
        
        # Backup & report files from converting an old project file
        # to a newer Visual Studio version. Backup files are not needed,
        # because we have git ;-)
        _UpgradeReport_Files/
        Backup*/
        UpgradeLog*.XML
        UpgradeLog*.htm
        
        # SQL Server files
        *.mdf
        *.ldf
        *.ndf
        
        # Business Intelligence projects
        *.rdl.data
        *.bim.layout
        *.bim_*.settings
        
        # Microsoft Fakes
        FakesAssemblies/
        
        # GhostDoc plugin setting file
        *.GhostDoc.xml
        
        # Node.js Tools for Visual Studio
        .ntvs_analysis.dat
        node_modules/
        
        # Typescript v1 declaration files
        typings/
        
        # Visual Studio 6 build log
        *.plg
        
        # Visual Studio 6 workspace options file
        *.opt
        
        # Visual Studio 6 auto-generated workspace file (contains which files were open etc.)
        *.vbw
        
        # Visual Studio LightSwitch build output
        **/*.HTMLClient/GeneratedArtifacts
        **/*.DesktopClient/GeneratedArtifacts
        **/*.DesktopClient/ModelManifest.xml
        **/*.Server/GeneratedArtifacts
        **/*.Server/ModelManifest.xml
        _Pvt_Extensions
        
        # Paket dependency manager
        .paket/paket.exe
        paket-files/
        
        # FAKE - F# Make
        .fake/
        
        # JetBrains Rider
        .idea/
        *.sln.iml
        
        # CodeRush
        .cr/
        
        # Python Tools for Visual Studio (PTVS)
        __pycache__/
        *.pyc
        
        # Cake - Uncomment if you are using it
        # tools/**
        # !tools/packages.config
        
        # Tabs Studio
        *.tss
        
        # Telerik's JustMock configuration file
        *.jmconfig
        
        # BizTalk build output
        *.btp.cs
        *.btm.cs
        *.odx.cs
        *.xsd.cs
        
        # OpenCover UI analysis results
        OpenCover/
        coverage/
        
        ### macOS template
        # General
        .DS_Store
        .AppleDouble
        .LSOverride
        
        # Icon must end with two \r
        Icon
        
        # Thumbnails
        ._*
        
        # Files that might appear in the root of a volume
        .DocumentRevisions-V100
        .fseventsd
        .Spotlight-V100
        .TemporaryItems
        .Trashes
        .VolumeIcon.icns
        .com.apple.timemachine.donotpresent
        
        # Directories potentially created on remote AFP share
        .AppleDB
        .AppleDesktop
        Network Trash Folder
        Temporary Items
        .apdisk
        
        =======
        # Local
        docker-compose.yml
        .env
        dist
        `,
      },
      // {
      //   name: ".prettierrc",
      //   path: "",
      //   content: `Sign up for free to create unlimited sandboxes
      //   0/3 Sandboxes used - Anonymous
        
      //   Template
      //   nestjs / typescript-starter / master
        
      //   0
      //   Embed
      //   Fork
      //   Create
      //   Sign in
        
        
        
        
        
        
      //   Template Info
        
      //   nestjs
      //   Nest TypeScript starter repository
      //   0
      //   964
      //   177
      //   skurt23
      //   skurt23
      //   Alejandro M. Alberto
      //   Forked From
      //   nest-typescript-starter
      //   Environment
      //   nest
      //   Files
        
      //   Dependencies
        
      //   Add Dependency
        
      //   @nestjs/common
      //   ^6.0.4 (6.11.11)
      //   @nestjs/core
      //   ^6.0.4 (6.11.11)
      //   @nestjs/microservices
      //   ^6.0.4 (6.11.11)
      //   @nestjs/platform-express
      //   ^6.0.4 (6.11.11)
      //   @nestjs/websockets
      //   ^6.0.4 (6.11.11)
      //   reflect-metadata
      //   0.1.13
      //   rimraf
      //   2.6.3
      //   rxjs
      //   6.4.0
      //   External resources
        
      //   Supported Configuration
      //   .PRETTIERRC
      //   Open file in editor
      //   Defines how all files will be prettified by Prettier. More info...
        
      //   Print Width
      //   Specify the line length that the printer will wrap on.
      //   Tab Width
      //   Specify the number of spaces per indentation-level.
      //   Use Tabs
        
      //   Indent lines with tabs instead of spaces.
      //   Semicolons
        
      //   Print semicolons at the ends of statements.
      //   Use Single Quotes
        
      //   Use 'single' quotes instead of "double" quotes.
      //   Trailing Commas
        
      //   all
      //   Print trailing commas wherever possible.
      //   Bracket Spacing
        
      //   Print spaces between brackets in object literals.
      //   JSX Brackets
        
      //   Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
      //   Arrow Function Parentheses
        
      //   avoid
      //   Include parentheses around a sole arrow function parameter.
        
        
        
      //   https://zqp45.sse.codesandbox.io/
        
        
        
        
      //   debe5e3f8
      //   debe5e3f8
      //   Ln 393, Col 1 (6628 selected)Spaces: 2UTF-8LFPlain Text
      //   `,
      // },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "nestjs",
          "private": true,
          "version": "1.0.0",
          "description": "Nest TypeScript starter repository",
          "license": "MIT",
          "scripts": {
            "build": "rimraf dist && tsc -p tsconfig.build.json",
            "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
            "start": "ts-node -r tsconfig-paths/register src/main.ts",
            "start:dev": "tsc-watch -p tsconfig.build.json --onSuccess \"node dist/main.js\"",
            "start:debug": "tsc-watch -p tsconfig.build.json --onSuccess \"node --inspect-brk dist/main.js\"",
            "start:prod": "node dist/main.js",
            "lint": "tslint -p tsconfig.json -c tslint.json",
            "test": "jest",
            "test:watch": "jest --watch",
            "test:cov": "jest --coverage",
            "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
            "test:e2e": "jest --config ./test/jest-e2e.json"
          },
          "dependencies": {
            "@nestjs/common": "^6.0.4",
            "@nestjs/core": "^6.0.4",
            "@nestjs/microservices": "^6.0.4",
            "@nestjs/platform-express": "^6.0.4",
            "@nestjs/websockets": "^6.0.4",
            "reflect-metadata": "0.1.13",
            "rimraf": "2.6.3",
            "rxjs": "6.4.0"
          },
          "devDependencies": {
            "@nestjs/testing": "6.1.1",
            "@types/express": "4.16.1",
            "@types/jest": "24.0.11",
            "@types/node": "11.13.4",
            "@types/supertest": "2.0.7",
            "jest": "24.7.1",
            "prettier": "1.17.0",
            "supertest": "4.0.2",
            "ts-jest": "24.0.2",
            "ts-node": "8.1.0",
            "tsc-watch": "2.2.1",
            "tsconfig-paths": "3.8.0",
            "tslint": "5.16.0",
            "typescript": "3.4.3"
          },
          "jest": {
            "moduleFileExtensions": [
              "js",
              "json",
              "ts"
            ],
            "rootDir": "src",
            "testRegex": ".spec.ts$",
            "transform": {
              "^.+\\.(t|j)s$": "ts-jest"
            },
            "collectCoverageFrom": [
              "**/*.(t|j)s"
            ],
            "coverageDirectory": "../coverage",
            "testEnvironment": "node"
          },
          "keywords": []
        }`,
      },
      
    ],
  },   
  ionic: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        <style>
          /* These styles make the body full-height */
          html,
          body {
            height: 100%;
          }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body {
            overflow: hidden;
          }
          /* These styles make the root element full-height */
          #root {
            display: flex;
            height: 100%;
          }
        </style>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "Home.tsx",
        path: "src/pages",
        content: `import {
          IonContent,
          IonHeader,
          IonPage,
          IonTitle,
          IonToolbar
        } from "@ionic/react";
        import React from "react";
        
        const Home: React.FC = () => {
          return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Ionic Blank Template RC2</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                The world is your oyster.
                <p>
                  If you get lost, the{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ionicframework.com/docs/"
                  >
                    docs
                  </a>{" "}
                  will be your guide.
                </p>
              </IonContent>
            </IonPage>
          );
        };
        
        export default Home;
        `,
      },
      {
        name: "variables.css",
        path: "src/theme",
        content: `/* Ionic Variables and Theming. For more info, please see:
        http://ionicframework.com/docs/theming/ */
        
        /** Ionic CSS Variables **/
        :root {
          /** primary **/
          --ion-color-primary: #3880ff;
          --ion-color-primary-rgb: 56, 128, 255;
          --ion-color-primary-contrast: #ffffff;
          --ion-color-primary-contrast-rgb: 255, 255, 255;
          --ion-color-primary-shade: #3171e0;
          --ion-color-primary-tint: #4c8dff;
        
          /** secondary **/
          --ion-color-secondary: #0cd1e8;
          --ion-color-secondary-rgb: 12, 209, 232;
          --ion-color-secondary-contrast: #ffffff;
          --ion-color-secondary-contrast-rgb: 255, 255, 255;
          --ion-color-secondary-shade: #0bb8cc;
          --ion-color-secondary-tint: #24d6ea;
        
          /** tertiary **/
          --ion-color-tertiary: #7044ff;
          --ion-color-tertiary-rgb: 112, 68, 255;
          --ion-color-tertiary-contrast: #ffffff;
          --ion-color-tertiary-contrast-rgb: 255, 255, 255;
          --ion-color-tertiary-shade: #633ce0;
          --ion-color-tertiary-tint: #7e57ff;
        
          /** success **/
          --ion-color-success: #10dc60;
          --ion-color-success-rgb: 16, 220, 96;
          --ion-color-success-contrast: #ffffff;
          --ion-color-success-contrast-rgb: 255, 255, 255;
          --ion-color-success-shade: #0ec254;
          --ion-color-success-tint: #28e070;
        
          /** warning **/
          --ion-color-warning: #ffce00;
          --ion-color-warning-rgb: 255, 206, 0;
          --ion-color-warning-contrast: #ffffff;
          --ion-color-warning-contrast-rgb: 255, 255, 255;
          --ion-color-warning-shade: #e0b500;
          --ion-color-warning-tint: #ffd31a;
        
          /** danger **/
          --ion-color-danger: #f04141;
          --ion-color-danger-rgb: 245, 61, 61;
          --ion-color-danger-contrast: #ffffff;
          --ion-color-danger-contrast-rgb: 255, 255, 255;
          --ion-color-danger-shade: #d33939;
          --ion-color-danger-tint: #f25454;
        
          /** dark **/
          --ion-color-dark: #222428;
          --ion-color-dark-rgb: 34, 34, 34;
          --ion-color-dark-contrast: #ffffff;
          --ion-color-dark-contrast-rgb: 255, 255, 255;
          --ion-color-dark-shade: #1e2023;
          --ion-color-dark-tint: #383a3e;
        
          /** medium **/
          --ion-color-medium: #989aa2;
          --ion-color-medium-rgb: 152, 154, 162;
          --ion-color-medium-contrast: #ffffff;
          --ion-color-medium-contrast-rgb: 255, 255, 255;
          --ion-color-medium-shade: #86888f;
          --ion-color-medium-tint: #a2a4ab;
        
          /** light **/
          --ion-color-light: #f4f5f8;
          --ion-color-light-rgb: 244, 244, 244;
          --ion-color-light-contrast: #000000;
          --ion-color-light-contrast-rgb: 0, 0, 0;
          --ion-color-light-shade: #d7d8da;
          --ion-color-light-tint: #f5f6f9;
        }
        `,
      },
      {
        name: "App.tsx",
        path: "src",
        content: `import React from "react";
        import { Redirect, Route } from "react-router-dom";
        import { IonApp, IonRouterOutlet } from "@ionic/react";
        import { IonReactRouter } from "@ionic/react-router";
        import Home from "./pages/Home";
        
        /* Core CSS required for Ionic components to work properly */
        import "@ionic/react/css/core.css";
        
        /* Basic CSS for apps built with Ionic */
        import "@ionic/react/css/normalize.css";
        import "@ionic/react/css/structure.css";
        import "@ionic/react/css/typography.css";
        
        /* Optional CSS utils that can be commented out */
        import "@ionic/react/css/padding.css";
        import "@ionic/react/css/float-elements.css";
        import "@ionic/react/css/text-alignment.css";
        import "@ionic/react/css/text-transformation.css";
        import "@ionic/react/css/flex-utils.css";
        import "@ionic/react/css/display.css";
        
        /* Theme variables */
        import "./theme/variables.css";
        
        const App: React.FC = () => (
          <IonApp>
            <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/home" component={Home} exact={true} />
                <Route exact path="/" render={() => <Redirect to="/home" />} />
              </IonRouterOutlet>
            </IonReactRouter>
          </IonApp>
        );
        
        export default App;
        `,
      },
      {
        name: "index.tsx",
        path: "src",
        content: `import React from "react";
        import ReactDOM from "react-dom";
        import App from "./App";
        
        ReactDOM.render(<App />, document.getElementById("root"));
        `,
      },
      {
        name: "styles.css",
        path: "src",
        content: `.App {
          font-family: sans-serif;
          text-align: center;
        }
        `,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "ionic-react-rc2-blank-template",
          "version": "0.0.1",
          "private": true,
          "dependencies": {
            "@ionic/react": "^4.9.0-rc.2",
            "@ionic/react-router": "^4.9.0-rc.2",
            "@types/jest": "24.0.11",
            "@types/node": "11.11.3",
            "@types/react": "^16.9.1",
            "@types/react-dom": "^16.8.5",
            "@types/react-router": "^5.0.3",
            "@types/react-router-dom": "^4.3.1",
            "ionicons": "^4.6.3",
            "react": "^16.9.0",
            "react-dom": "^16.9.0",
            "react-router": "^5.0.1",
            "react-router-dom": "^5.0.1",
            "react-scripts": "3.1.0",
            "typescript": "3.5.3"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
          },
          "eslintConfig": {
            "extends": "react-app"
          },
          "browserslist": [
            ">0.2%",
            "not dead",
            "not ie <= 11",
            "not op_mini all"
          ],
          "description": "Sandbox template identical to starting from CLI.",
          "keywords": []
        }`,
      },
      {
        name: "tsconfig.json",
        path: "",
        content: `{
          "include": [
              "./src/*"
          ],
          "compilerOptions": {
              "lib": [
                  "dom",
                  "es2015"
              ],
              "jsx": "react"
          }
      }`,
      },
      
    ],
  },
  'native-script': {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        <style>
          /* These styles make the body full-height */
          html,
          body {
            height: 100%;
          }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body {
            overflow: hidden;
          }
          /* These styles make the root element full-height */
          #root {
            display: flex;
            height: 100%;
          }
        </style>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "Home.tsx",
        path: "src/pages",
        content: `import {
          IonContent,
          IonHeader,
          IonPage,
          IonTitle,
          IonToolbar
        } from "@ionic/react";
        import React from "react";
        
        const Home: React.FC = () => {
          return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Ionic Blank Template RC2</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                The world is your oyster.
                <p>
                  If you get lost, the{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ionicframework.com/docs/"
                  >
                    docs
                  </a>{" "}
                  will be your guide.
                </p>
              </IonContent>
            </IonPage>
          );
        };
        
        export default Home;
        `,
      },
      {
        name: "variables.css",
        path: "src/theme",
        content: `/* Ionic Variables and Theming. For more info, please see:
        http://ionicframework.com/docs/theming/ */
        
        /** Ionic CSS Variables **/
        :root {
          /** primary **/
          --ion-color-primary: #3880ff;
          --ion-color-primary-rgb: 56, 128, 255;
          --ion-color-primary-contrast: #ffffff;
          --ion-color-primary-contrast-rgb: 255, 255, 255;
          --ion-color-primary-shade: #3171e0;
          --ion-color-primary-tint: #4c8dff;
        
          /** secondary **/
          --ion-color-secondary: #0cd1e8;
          --ion-color-secondary-rgb: 12, 209, 232;
          --ion-color-secondary-contrast: #ffffff;
          --ion-color-secondary-contrast-rgb: 255, 255, 255;
          --ion-color-secondary-shade: #0bb8cc;
          --ion-color-secondary-tint: #24d6ea;
        
          /** tertiary **/
          --ion-color-tertiary: #7044ff;
          --ion-color-tertiary-rgb: 112, 68, 255;
          --ion-color-tertiary-contrast: #ffffff;
          --ion-color-tertiary-contrast-rgb: 255, 255, 255;
          --ion-color-tertiary-shade: #633ce0;
          --ion-color-tertiary-tint: #7e57ff;
        
          /** success **/
          --ion-color-success: #10dc60;
          --ion-color-success-rgb: 16, 220, 96;
          --ion-color-success-contrast: #ffffff;
          --ion-color-success-contrast-rgb: 255, 255, 255;
          --ion-color-success-shade: #0ec254;
          --ion-color-success-tint: #28e070;
        
          /** warning **/
          --ion-color-warning: #ffce00;
          --ion-color-warning-rgb: 255, 206, 0;
          --ion-color-warning-contrast: #ffffff;
          --ion-color-warning-contrast-rgb: 255, 255, 255;
          --ion-color-warning-shade: #e0b500;
          --ion-color-warning-tint: #ffd31a;
        
          /** danger **/
          --ion-color-danger: #f04141;
          --ion-color-danger-rgb: 245, 61, 61;
          --ion-color-danger-contrast: #ffffff;
          --ion-color-danger-contrast-rgb: 255, 255, 255;
          --ion-color-danger-shade: #d33939;
          --ion-color-danger-tint: #f25454;
        
          /** dark **/
          --ion-color-dark: #222428;
          --ion-color-dark-rgb: 34, 34, 34;
          --ion-color-dark-contrast: #ffffff;
          --ion-color-dark-contrast-rgb: 255, 255, 255;
          --ion-color-dark-shade: #1e2023;
          --ion-color-dark-tint: #383a3e;
        
          /** medium **/
          --ion-color-medium: #989aa2;
          --ion-color-medium-rgb: 152, 154, 162;
          --ion-color-medium-contrast: #ffffff;
          --ion-color-medium-contrast-rgb: 255, 255, 255;
          --ion-color-medium-shade: #86888f;
          --ion-color-medium-tint: #a2a4ab;
        
          /** light **/
          --ion-color-light: #f4f5f8;
          --ion-color-light-rgb: 244, 244, 244;
          --ion-color-light-contrast: #000000;
          --ion-color-light-contrast-rgb: 0, 0, 0;
          --ion-color-light-shade: #d7d8da;
          --ion-color-light-tint: #f5f6f9;
        }
        `,
      },
      {
        name: "App.tsx",
        path: "src",
        content: `import React from "react";
        import { Redirect, Route } from "react-router-dom";
        import { IonApp, IonRouterOutlet } from "@ionic/react";
        import { IonReactRouter } from "@ionic/react-router";
        import Home from "./pages/Home";
        
        /* Core CSS required for Ionic components to work properly */
        import "@ionic/react/css/core.css";
        
        /* Basic CSS for apps built with Ionic */
        import "@ionic/react/css/normalize.css";
        import "@ionic/react/css/structure.css";
        import "@ionic/react/css/typography.css";
        
        /* Optional CSS utils that can be commented out */
        import "@ionic/react/css/padding.css";
        import "@ionic/react/css/float-elements.css";
        import "@ionic/react/css/text-alignment.css";
        import "@ionic/react/css/text-transformation.css";
        import "@ionic/react/css/flex-utils.css";
        import "@ionic/react/css/display.css";
        
        /* Theme variables */
        import "./theme/variables.css";
        
        const App: React.FC = () => (
          <IonApp>
            <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/home" component={Home} exact={true} />
                <Route exact path="/" render={() => <Redirect to="/home" />} />
              </IonRouterOutlet>
            </IonReactRouter>
          </IonApp>
        );
        
        export default App;
        `,
      },
      {
        name: "index.tsx",
        path: "src",
        content: `import React from "react";
        import ReactDOM from "react-dom";
        import App from "./App";
        
        ReactDOM.render(<App />, document.getElementById("root"));
        `,
      },
      {
        name: "styles.css",
        path: "src",
        content: `.App {
          font-family: sans-serif;
          text-align: center;
        }
        `,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "ionic-react-rc2-blank-template",
          "version": "0.0.1",
          "private": true,
          "dependencies": {
            "@ionic/react": "^4.9.0-rc.2",
            "@ionic/react-router": "^4.9.0-rc.2",
            "@types/jest": "24.0.11",
            "@types/node": "11.11.3",
            "@types/react": "^16.9.1",
            "@types/react-dom": "^16.8.5",
            "@types/react-router": "^5.0.3",
            "@types/react-router-dom": "^4.3.1",
            "ionicons": "^4.6.3",
            "react": "^16.9.0",
            "react-dom": "^16.9.0",
            "react-router": "^5.0.1",
            "react-router-dom": "^5.0.1",
            "react-scripts": "3.1.0",
            "typescript": "3.5.3"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
          },
          "eslintConfig": {
            "extends": "react-app"
          },
          "browserslist": [
            ">0.2%",
            "not dead",
            "not ie <= 11",
            "not op_mini all"
          ],
          "description": "Sandbox template identical to starting from CLI.",
          "keywords": []
        }`,
      },
      {
        name: "tsconfig.json",
        path: "",
        content: `{
          "include": [
              "./src/*"
          ],
          "compilerOptions": {
              "lib": [
                  "dom",
                  "es2015"
              ],
              "jsx": "react"
          }
      }`,
      },
      
    ],
  },
  chrome: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        <style>
          /* These styles make the body full-height */
          html,
          body {
            height: 100%;
          }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body {
            overflow: hidden;
          }
          /* These styles make the root element full-height */
          #root {
            display: flex;
            height: 100%;
          }
        </style>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: ".replit",
        path: "",
        content: `language="python"
        audio=true
        run="python main.py"`,
      },
      
      {
        name: "changelogs.json",
        path: "",
        content: `{
          "Changelog": [
            {
              "type": "Update",
              "date": "January 25, 2022",
              "name": "Git Obliterated",
              "content": [
                "Obliterator has been released and upgrades from Pounder and Sniper",
                "Bulldozer has been released and upgrades from Obliterator and Assassin",
                "Bobcat has been released and upgrades from Bulldozer and Ranger",
                "Sleet has been released and upgrades from Obliterator and Chiller",
                "Nerfed Hotshot branch reload, damage, and bullet speed",
                "Added Megawatt to beta tanks. Upgrades from Tesla Trapper",
                "Added Gigawatt to beta tanks. Upgrades from Megawatt. Durr",
                "Added Shock Trooper to beta tanks. Upgrades from Megawatt",
                "Added Zapp Gun to beta tanks. Upgrades from Megawatt",
                "Added Electrician to beta tanks. Upgrades from Tesla Trapper"
              ]
            },
            {
              "type": "Update",
              "date": "January 24, 2022",
              "name": "I&#039;m adding tenks lel",
              "content": [
                "Decalibrator has been released and upgrades from Constructor and Giga-Trapper",
                "Glitterbomb has been released and upgrades from Reliquary",
                "Fixed a bug where Packer trap props would stare at people",
                "Added Hotshot to beta tanks. upgrades from Obliterator",
                "Added Hotliner to beta tanks. upgrades from Hotshot",
                "Added Steamshot to beta tanks. upgrades from Hotshot and Steamroller",
                "Added Planer to beta tanks. upgrades from Steamroller and Bulldozer",
                "Added Sleet to beta tanks. upgrades from Obliterator",
                "Added Tesla Trapper to beta tanks",
                "Nerfed the recoil of the entire Obliterator branch",
                "Nerfed the reload and bullet speed of Steamroller"
              ]
            },
            {
              "type": "Update",
              "date": "January 23, 2022",
              "name": "kill me",
              "content": [
                "Unkilled the game",
                "Added Redistributer Ception to misc"
              ]
            },
            {
              "type": "Update",
              "date": "January 23, 2022",
              "name": "They see me rollin&#039;",
              "content": [
                "Compounder has been released and upgrades from Computer and Poundbrid",
                "Archivist has been released and upgrades from Compounder and Hybrid",
                "Turing has been released and upgrades from Compounder and Megabyte",
                "Firewall has been released and upgrades from Computer",
                "Server has been released and upgrades from Computer and VIP",
                "Mainframe has been released and upgrades from Server and Deluxe",
                "Takeout has been released and upgrades from Packer",
                "Nerfed Server drones",
                "Added Obliterator to beta tanks",
                "Added Bulldozer to beta tanks",
                "Added Bobcat to beta tanks",
                "Added Steamroller to beta tanks",
                "Added Flattner to beta tanks",
                "Added Decalibrator to beta tanks",
                "Increased the space between Ascended Pentaquark&#039;s quarks",
                "Moved Ascended Pentaquark to Dev Bosses"
              ]
            },
            {
              "type": "Update",
              "date": "January 22, 2022",
              "name": "dsdn",
              "content": [
                "Removed curtain animations",
                "Added Pathfinding to dev spawned bosses with the F key",
                "Removed some servers on some days"
              ]
            },
            {
              "type": "Update",
              "date": "January 20, 2022",
              "name": "Real game update",
              "content": [
                "Added nothing because y&#039;all are ungrateful pieces of shit, fuck you"
              ]
            },
            {
              "type": "Update",
              "date": "January 19, 2022",
              "name": "Changing the game",
              "content": [
                "Increased the penetration of all objects to hopefully make collisions less bouncy",
                "Nerfed all boss health heavily",
                "Removed Mind Controller",
                "Removed Trump",
                "Removed Enigma",
                "Removed EMP",
                "Released Chiller, branches off Sniper",
                "Released Paralyzer, branches off Chiller",
                "Released Blizzard, branches off Chiller",
                "Released Frostbite, branches off Chiller and Acid",
                "Released Chillbrid, branches off Chiller",
                "Released Overchill, branches off Chillbrid",
                "Released Mortal Chill, branches off Chillbrid",
                "Released Slipknot, branches off Triple Shot and Double",
                "Released Frost Trapper, Branches off Trapper",
                "Released Icebox, branches off Frost Trapper and Builder",
                "Released Fabricator, Branched off Fighter and Triple",
                "Released Taser, branches off Kinematic",
                "Released Druid, branches off Magician",
                "Released Dragon, branches off Fighter and Booster",
                "Slightly buffed Flamethrower bullet health and damage",
                "Slightly buffed Emplacement Block lifetime",
                "Slightly buffed Gondola bullet speed and health",
                "Slightly buffed Redistributor bullet speed",
                "Redistributor&#039;s under trapezoid will now animate just before it shoots",
                "Buffed Shrapnel missile health",
                "Nerfed ICBM Explosion health",
                "Nerfed Driller bullet speed and Penetration",
                "Nerfed Foam Gun bullet reload",
                "Slightly nerfed Courser reload",
                "Slightly nerfed Matchlocks bullet speed and reload",
                "Halfed Questers back thruster reload",
                "Halfed Quadriatic Gust turret reload",
                "Nerfed Arras done max speed",
                "HEAVILY nerfed Treachery done health, damage, and max speed",
                "Treachery now has 6 drones",
                "Musketeer shoots one extra trap "
              ]
            },
            {
              "type": "Update",
              "date": "January 18, 2022",
              "name": "I do things",
              "content": [
                "Briefcase has been released and upgrades from Mega Trapper and Packer",
                "Wardrobe has been released and upgrades from Giga Trapper and Briefcase",
                "Giftwrapper has been released and upgrades from Briefcase",
                "Fungi has been released and upgrades from Multishot and Botanist",
                "Auto-Director has been released and upgrades from Director",
                "Rebellion has been released and upgrades from Auto-Director and Revolutionist",
                "Solar System has been released and upgrades from Rebellion and Spawner",
                "Added Glitterbomb to beta tanks",
                "Added Firewall to beta tanks",
                "Formed from a violent galaxy&#039;s dust around a sphere of everlasting fire, the Solar System Quark seems right at home!"
              ]
            },
            {
              "type": "Hotfix",
              "date": "January 17, 2022",
              "name": "Shrinking ballz",
              "content": [
                "Shrank the rest of Hadron&#039;s Balls",
                "Shrank the balls more",
                "Nerfed mamba dust reload."
              ]
            },
            {
              "type": "Update",
              "date": "January 17, 2022",
              "name": "Ignore the quarks they are not an omen of doom",
              "content": [
                "Proton has been released an upgrades from Revolutionist",
                "Hadron has been released an upgrades from Proton",
                "Kilonova has been released an upgrades from Proton",
                "Rho has been released an upgrades from Proton and Subverter",
                "Dustbowl has been released an upgrades from Launcher, because of course it does",
                "Mamba has been released an upgrades from Dustbowl",
                "Desert Nuke has been released an upgrades from Dustbowl and Shrapnel",
                "Tomb Raider has been released an upgrades from Dustbowl and Navyist",
                "Sandbender has been banished to misc for lag reasons",
                "Rammer has been released and upgrades from Pounder",
                "Buffed Rammer and Desert Nuke",
                "Fixed some upgrade tree issues",
                "Added Briefcase to Beta Tanks",
                "Added Wardrobe to Beta Tanks",
                "Added Giftwrapper to Beta Tanks",
                "Added Submachine to Beta Tanks",
                "From a place where the stars are too dark to see, the Magnetar Quark emerges from the void!"
              ]
            },
            {
              "type": "Balance",
              "date": "January 17, 2022",
              "name": "Under the sea.",
              "content": [
                "Added Zephyr; upgrades from Hybrid Trapper and Flank Cruiser",
                "Added Submarine; upgrades from Cruiser and Manager",
                "Added Sonar; upgrades from Submarine and Battleship",
                "Heavily nerfed Auto Turret bullet health",
                "Heavily buffed Swarm Range",
                "Nerfed bee range",
                "Slightly buffed Grow Bullet penetration",
                "Removed Gunner&#039;s buff in both range and bullet speed",
                "Buffed Propeller and it&#039;s upgrades&#039; bullet health and penetration",
                "Nerfed Redistributor&#039;s reload by a small amount",
                "Buffed Redistributor&#039;s recoil",
                "Slightly buffed Double and it&#039;s upgrades&#039; in general stats",
                "Added Tooltips for certain Accelerator upgrades",
                "Added Tooltips for Submarine upgrades",
                "Added Woodpecker to Beta Tanks",
                "Added Green Woodpecker to Beta Tanks",
                "Added Submersible to Beta Tanks",
                "Slightly changed Probationer and Apprentice&#039;s design",
                "Oqv jx * giiuqw fou"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 17, 2022",
              "name": "Okay maybe you can it&#039;s kinda relaxing for me",
              "content": [
                "Fixed bugs with Naval Battle",
                "Made portals and random colors more common"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 17, 2022",
              "name": "Don&#039;t get used to it.",
              "content": [
                "Fixed bots spawning in sandbox rooms that are closed",
                "Removed Senior-Tester",
                "Optimized server loading in the backend",
                "Buffed German Aircraft Carriers",
                "Naval Combat is back on the mode rotation",
                "Certain servers have certain modes, to prevent duplicates",
                "Added a new server for things like Boss Rush and Naval Combat",
                "Fixed Boss Rush&#039;s display name",
                "Made Maze modes have a 25% chance of happening (aside from other modifiers)"
              ]
            },
            {
              "type": "Update",
              "date": "January 16, 2022",
              "name": "I released 16 tanks in one update",
              "content": [
                "Malware has been released and upgrades from Computer",
                "Ransomware has been released and upgrades from Malware",
                "Malcontent has been released and upgrades from Malware",
                "Brute Force has been released and upgrades from Malware and Megabyte",
                "Mega-Trapper has been released and upgrades from Trapper",
                "Giga-Trapper has been released and upgrades from Mega-Trapper",
                "Tera-Trapper has been released and upgrades from Giga-Trapper",
                "Packer has been released and upgrades from Trapper",
                "Reliquary has been released and upgrades from Packer",
                "Mailman has been released and upgrades from Packer and Builder",
                "Package Bomb has been released and upgrades from Packer",
                "Ricin has been released and upgrades from Package Bomb",
                "Revolutionist has been released and upgrades from Auto-Basic",
                "Subverter has been released and upgrades from Revolutionist",
                "Deuteron has been released and upgrades from Subverter",
                "Toolbelt has been released and upgrades from Subverter and Multitool",
                "Added Takeout to Beta tanks",
                "Added Rammer to Beta tanks",
                "Added Solar System to Beta tanks",
                "Formed in the death of a thousand squares, the Summoner Quark begins to leave its mark upon the world!",
                "Summoner Fragment can now spawn in the Pentagon Nest"
              ]
            },
            {
              "type": "Hotfix",
              "date": "January 15, 2022",
              "name": "Nevermind",
              "content": [
                "Fixed an issue where firing a pillbox as Engineer would create a paradox",
                "Fixed an issue where Spike was defined twice"
              ]
            },
            {
              "type": "Update",
              "date": "January 15, 2022",
              "name": "Not completely incompetent",
              "content": [
                "Tesla has been released and upgrades from Smasher",
                "Coil has been released and upgrades from Tesla",
                "Mega Trapper and it&#039;s upgrades now all have incremental trap speed nerfs",
                "Fixed the appearance of Revolutionist and its upgrades in the upgrade tree",
                "Rebalanced a lot of revolutionist stuff",
                "Added Ricin to beta tanks. Upgrades from Package Bomb. Chill out Zed I&#039;ll release it tommorow."
              ]
            },
            {
              "type": "Update",
              "date": "January 15, 2022",
              "name": "Why is mega trapper not ingame yet?",
              "content": [
                "Computer has been released and upgrades from Basebrid",
                "Megabyte has been released and upgrades from Computer",
                "Gigabyte has been released and upgrades from Megabyte",
                "&#039;Pewterbrid has been released and upgrades from Computer",
                "Megabrid has been released and upgrades from &#039;Pewterbrid",
                "Added Mega-Trapper to beta tanks",
                "Added Giga-Trapper to beta tanks",
                "Added Tera-Trapper to beta tanks",
                "Added Packer to beta tanks",
                "Added Reliquary to beta tanks",
                "Added Mailman to beta tanks",
                "Package Bomb now upgrades from Packer"
              ]
            },
            {
              "type": "Update",
              "date": "January 14, 2022",
              "name": "The Bron Jame",
              "content": [
                "Released Arsenal Guard, branches from Trap Guard and Arsenal",
                "Released Navalist, branches from Navyist",
                "Released Captian, branches from Navalist",
                "Added Quester to beta",
                "Added Druid to beta",
                "Added Driller to beta",
                "Added Drillgun to beta, branches from Driller",
                "Added Exposer to beta, branches from Doxxer",
                "Added Dragon to beta",
                "Added Matchlock to beta",
                "Added Foghorn to beta",
                "Auto-Lancer now branches from Auto-Basic",
                "ð» Spoopy Ghost ð» now branches from Basebrid",
                "Overdrive now branches from Overseer",
                "Trailblazer now branches from Propeller",
                "Flangle now branches from Trailblazer",
                "Redesigned Scalpel",
                "Just kidding didn&#039;t actually add Foghorn to beta get pranked",
                "Buffed Lancer Damage",
                "Nerfed Empowerment block tesla effect radius",
                "Nerfed Puncher branch reload",
                "Speedbump&#039;s Missile has a slightly longer delay before firing"
              ]
            },
            {
              "type": "Update",
              "date": "January 13, 2022",
              "name": "Nanite Cring",
              "content": [
                "Reduced the lifespan of all surgeon traps and studs",
                "Nerfed the reload and lifespan of Nanite&#039;s drones",
                "Computer drones now have a slight danger value",
                "Added Server to beta tanks. Upgrades from Computer",
                "Added Kilonova to beta tanks. Upgrades from Proton",
                "Added Strangeliner to misc."
              ]
            },
            {
              "type": "Update",
              "date": "January 13, 2022",
              "name": "Who needs beta testers anyways?",
              "content": [
                "Completely rebalanced the entire Surgeon branch and then released it without any additional testing.",
                "Surgeon upgrades from Trapper and Launcher",
                "7 Surgeon upgrades were released. I can&#039;t be bothered to list em all",
                "Added Megabyte to Beta tanks. Upgrades from Computer",
                "Added Gigabyte to beta tanks. It&#039;s the dumbest looking tank ever",
                "Added Malware to Beta tanks. Upgrades from Computer",
                "Added Ransomware and Malcontent to Beta tanks. Upgrades from Malware",
                "Added Brute Force to Beta Tanks. It upgrades from Malware and Megabyte"
              ]
            },
            {
              "type": "Update",
              "date": "January 12, 2022",
              "name": "Gamig but even harder",
              "content": [
                "Released Propellery, branches off spawner",
                "Released Airport, branches off Propellery",
                "Released Acidic Spawner, branches off Spawner",
                "Added Embattlement to beta, branches from Emplacement",
                "Added Empowerment to beta, branches from Emplacement",
                "Renamed Thunderbolt to Lightningbolt",
                "Haploid now branches from Diploid",
                "Naturalistbrid now branches from Pelleter Hybrid",
                "Kinematic now branches from Accelerator",
                "Artillery now branches from Pounder",
                "Cyanide now branches from Sniper Ception",
                "Auto-Engineer now branches from Auto-Builder",
                "Removed Akafuji rear indicators",
                "Changed ICBM design so it doesn&#039;t look like a hybrid",
                "Changed Trailblazer design to be consistent with Propeller",
                "Navyist branch no longer has unique upgrade stats",
                "Skimmer branch now has normal recoil",
                "Removed spawn delay from Underseers",
                "Buffed Oxyrrhexis bullet health",
                "Buffed Gondola drone speed",
                "Buffed Botanist damage",
                "Buffed Superstorm damage",
                "Buffed Multishot branch damage",
                "Buffed Doxxer offensive stats",
                "Increased Multishot branch bullet spread",
                "Reduced Musketeer trap spread",
                "Reduced Doxxer shudder",
                "Increased Doxxer drone spead",
                "Slightly nerfed Egg Prince swarm damage",
                "Gave Quadriatic Gust stats",
                "Nerfed Elite Skimmer missile health",
                "Slightly increased the amount of points elite&#039;s are worth"
              ]
            },
            {
              "type": "Update",
              "date": "January 12, 2022",
              "name": "Multitwool is the wierdest tank name",
              "content": [
                "Multitool has been released and upgrades from Auto-3",
                "Multitwool has been released and upgrades from Multitool",
                "Everdeath has been released and upgrades from Multitool",
                "Triple-2 has been released and upgrades from Twin-2",
                "Triple-3 has been released and upgrades from Twin-3 and Triple-2",
                "Hybrid Triplet has been released and upgrades from Triplet",
                "Computer has been added to beta tanks",
                "Software now upgrades from Computer"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 12, 2022",
              "name": "oh my god i&#039;m dumb",
              "content": [
                "FINALLY fixed the world record ticket system not working on modded modes (Open, Maze)",
                "Fixed the help menu looking fucked",
                "Made the nest bigger",
                "Decreased the amount of crashers and made them spawn less",
                "FFA and TDM now have the chance to have portals in their generation",
                "Made random colors in FFA more rare",
                "Fixed maze not generating properly with non-square maps",
                "Added a way to convert eroded mazes into strings",
                "Added Duos to the rotation",
                "Changed up gamemode rotation",
                "Changed the way servers are loaded"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Gamig",
              "content": [
                "Fixed bug where resetting your tank carried over stats from the tank you previously were",
                "Fixed bug where resetting from an invisible tank would make your tank have invisibility",
                "Removed the knockback from Dominator heal bullets",
                "Released Naturalist, branches off Pelleter",
                "Added Doxxer to beta (BT note: I&#039;m trying to make it level 45 now)",
                "Added Redisplatterer to Misc",
                "Coronavirus now also branches off Virus",
                "Bonkmine now also branches off Landmine",
                "Removed Overflow",
                "Removed Black Ice",
                "Buffed Sandman damage",
                "Buffed Redistributor damage",
                "Buffed Eggmancer damage",
                "Buffed Gondola drone speed",
                "Buffed Acidic Spawners acid damage",
                "Nerfed Cyclone damage",
                "Nerfed Clicker reload",
                "Nerfed Dart (Green Crasher) damage",
                "Slightly nerfed Screwgun damage "
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Unhots your fix",
              "content": [
                "Removed the hotfix category",
                "Added AI to carriers",
                "Bug fixes",
                "Fixed the hotfix below not working",
                "Added Scharnhorst to Misc. and buffed Schlieffen"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Hotfix 0.0.1",
              "content": [
                "Added a hotfix category to the changelog",
                "Fixed styles on the changelog",
                "Fixed the bot not fetching the ticket channel properly due to it not being cached"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": ":weary:",
              "content": [
                "Fixed multiple crashes",
                "Added an easy way to regenerate map features such as obstacles and mazes",
                "Fixed Tesla Crasher not actually working",
                "Buffed Japanese and American Aircraft Carriers"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Clientside changes",
              "content": [
                "Added a way to detect AdBlockers, and annoying persistant messages if you have an AdBlocker ;)",
                "Improved clientside performance",
                "Fixed styling with the server selector",
                "Added the mobile app tips to desktop as well"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 10, 2022",
              "name": "One of my favorites",
              "content": [
                "Added Multitool to Beta Tanks",
                "Added Toolbelt to Beta Tanks",
                "Added Everdeath to Beta Tanks",
                "Added Tesla Crasher",
                "Buffed Package Bomb",
                "Delagged and nerfed Desert Temple some more",
                "Buffed the danger value of Dominators"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 10, 2022",
              "name": "YEAH WELL IF YOU GET WITH HIS BROTHER YOU GOT YOURSELF A TAGTEAM OF AWESOMENESS",
              "content": [
                "Nerfed Spawner Dominator slightly",
                "Reworked the map generation for Domination mode",
                "Fixed bugs with maze generation in Domination",
                "Added 8TDM support for Mothership, Tag and Kill Race",
                "Nerfed Mothership body stats",
                "Made the maze in tag more dense"
              ]
            },
            {
              "type": "Update",
              "date": "January 10, 2022",
              "name": "Meta Changes",
              "content": [
                "Added Steamboat, upgrades from Propeller",
                "Buffed Swarm reload",
                "Buffed Drone damage",
                "Buffed Trap duration",
                "Nerfed Turret reload",
                "Nerfed Clone health",
                "Buffed Propeller and it&#039;s upgrades in general stats",
                "Buffed Grow bullet damage",
                "Slightly nerfed Pelleter and it&#039;s upgrades",
                "Nerfed Gunner&#039;s bullet damage",
                "Moved Particle accelerator to misc",
                "Added a new Developer and Senior upgrade",
                "Added Putt-Putt to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 9, 2022",
              "name": "Go ahead. Play boss rush. I dare you.",
              "content": [
                "Delagged Desert Temple",
                "Buffed Desert Temple",
                "Desert Temple now spawns in boss rush",
                "Cyanide has been released and upgrades from Auto-Acid",
                "Toxin and Chlorine now have Acid Aura"
              ]
            },
            {
              "type": "Update",
              "date": "January 9, 2022",
              "name": "Serious work",
              "content": [
                "Fixed home screen input bugs",
                "Fixed the slider menu",
                "Fixed the wiki naming"
              ]
            },
            {
              "type": "Update",
              "date": "January 9, 2022",
              "name": "I made a boss lol",
              "content": [
                "Careener has been released and upgrades from Bonker",
                "Bonkmine has been released and upgrades from Bonker and Landmine",
                "Added Package Bomb to beta tanks",
                "Nerfed the main cannon of Subverter, Dueteron, and Hadron",
                "Shrank Hadron&#039;s balls",
                "Added Desert Temple to the beta boss branch"
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "BEGONE FELL BEAST",
              "content": [
                "Pentaquark has been banished to the dark realm of the netherworld, where there shall be weeping and the gnashing of teeth",
                "Hadron has been hired to replace Pentaquark",
                "Added Cyanide to beta tanks",
                "Nerfed the damage of Subverter and Deuteron turrets",
                "Added Rho Sentry",
                "Pentaquark has already escaped from hell. He just walked past the guards, they couldn&#039;t do shit.",
                "Don&#039;t let him find you."
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "DAS BOOT!!!!",
              "content": [
                "Fixed the class tree",
                "Fixed a major rendering bug with Nukes, Flails and other big things when they fade",
                "The title hints at what was introduced..."
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "Join the rebellion!",
              "content": [
                "Added Revolutionist to Beta tanks",
                "Added Subverter to Beta tanks",
                "Added Deuteron to Beta tanks",
                "Added Proton to Beta tanks",
                "Added Pentaquark to Beta tanks",
                "Added Rho to Beta tanks",
                "Buffed the homing bullet speed of Frier",
                "Rebalanced Surgeon a bit",
                "Released Heat Hive, upgrades from Mini-swarmer",
                "Released Toaster, upgrades from Heat Hive",
                "Released Frier, upgrades from Heat Hive",
                "Released Hotman, upgrades from Heat Hive and Swarmer",
                "Released Metaseeker, upgrades from Heat Hive",
                "Released Auto-Acid, upgrades from Acid"
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "Giving it a purpose",
              "content": [
                "Fixed players on the TEAL team being yellow",
                "Nerfed Myriapoda&#039;s small bullets as to not have them at the same strength as Arthropoda",
                "Fixed some bugs with teams",
                "Fixed some bugs in general",
                "Fixed the AFK timeout murdering you",
                "Fixed TDM modes never having bases",
                "Open TDM modes are now more common (25% instead of 10%)",
                "Fixed maze alignment in TDM and FFA modes",
                "Made standard rooms 16x16 cells",
                "Tag now has a 16x16 maze",
                "Tripled nest food amount",
                "It&#039;s now much harder to get stuck inside walls",
                "As a result of the proper maze collision, backshield no longer launches you 50 feet away from walls",
                "Nerfed hiveminds",
                "Rewrote the room object",
                "Massive optimizations",
                "Started experimenting with Space mode again",
                "Rewrote a lot of math so that it&#039;s not so computationally heavy",
                "General optimizations to bandwidth and mockups",
                "Fixed Lancer and Flail collisions while invulnerable"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": "Killing your favorite tanks since 2021",
              "content": [
                "Released Splatterer, branches off Gleamer",
                "Released Hybrid Trapper, branches off Basebrid and Trapper",
                "Released Magician, branches off Hybrid Trapper",
                "Released Witch, branches off Magician",
                "Released Juggernaut, branches off Overlord",
                "Released Suzerain, branches off Overlord",
                "Released Thunderbolt, branches off Lightning",
                "Arras now branches from Phaser and Sidewinder instead of Navyist",
                "Slightly nerfed hivemind minion health",
                "Slightly nerfed auto turrets",
                "Nerfed Gust damage stats",
                "Nerfed Punt Gun recoil",
                "Nerfed Decimator recoil",
                "Nerfed Ranger reload"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": "I hate sand",
              "content": [
                "Smashception has been released and upgrades from Smasher",
                "Mineception has been released and upgrades from Landmine and Smashception",
                "Spikeception has been released and upgrades from Spike and Smashception",
                "Coiffure has been released and upgrades from Smashception",
                "Nightgaunt has been released and upgrades from Landmine",
                "Added Sandbender to Beta tanks",
                "Added Mamba to Beta tanks",
                "Added Desert Nuke to Beta tanks",
                "Added Tomb Raider to Beta tanks",
                "Nerfed the reload of Surgeon and Nanite some more"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": ". this update was really painful .",
              "content": [
                "Reworked Maze Generation",
                "Fixed Maze Wall scaling",
                "Fixed Maze Wall grouping",
                "Optimizations to entities",
                "Optimizations to bandwidth",
                "Fixed the AFK timeout"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": "I&#039;ll teach Gust a lesson",
              "content": [
                "Nerfed Gust&#039;s bullet damage by a ton",
                "Slightly nerfed pelleter and it&#039;s upgrades",
                "Fixed some branch issues",
                "Nerfed dustbowl&#039;s reload",
                "Fixed particle accelerator&#039;s delay",
                "Doubled Particle Accelerator&#039;s explosion health",
                "Added Apprentice to Beta Tanks",
                "Added Overload to Beta Tanks",
                "Added Submarine to Beta Tanks",
                "Added Sonar to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "Acidmaggendon",
              "content": [
                "Acid has been released and upgrades from Sniper",
                "Mercury has been released and upgrades from Acid",
                "Disintegrator has been released and upgrades from Acid",
                "Formaldehyde has been released and upgrades from Acid and Minigun",
                "Saltsower has been released and upgrades from Formaldehyde and Cropduster",
                "Chlorine has been released and upgrades from Formaldehyde and Streamliner",
                "Iocane has been released and upgrades from Formaldehyde",
                "Smoker has been released and upgrades from Acid and Fume",
                "Acid Trapper has been released and upgrades from Trapper",
                "Biologist has been released and upgrades from Acid Trapper and Dual Trapper",
                "Biocontainment has been released and upgrades from Biologist, Formaldehyde, and Barricade",
                "Rat poison has been released and upgrades from Acid Trapper and builder",
                "Coronavirus has been released and upgrades from Acid Trapper and Virus",
                "Added Ryzen to beta tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "No school tomorrow yay",
              "content": [
                "Reworked maze generation slightly",
                "Nerfed Taser",
                "Buffed body stats",
                "Buffed Sentries",
                "Nerfed Crashers",
                "Buffed Banshee&#039;s turret and body FOV",
                "Nerfed Meta drones",
                "Nerfed the Auto-2 Branch",
                "Banshee now branches off of Auto-3",
                "Started experimenting with the Maze Portal TDM mode"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "I&#039;m double alive I promise",
              "content": [
                "Added Deluxe which upgrades from VIP",
                "Added Overluxe which upgrades from Deluxe",
                "Buffed Punt gun and it&#039;s upgrades",
                "Nerfed Gust",
                "Buffed Swarm reload again",
                "Man O&#039; War now has a tool tip to shoot with right click",
                "Added Dustbowl to Beta Tanks",
                "Added Software to Beta Tanks",
                "Added Probationer to Beta Tanks",
                "Buffed Particle Accelerator&#039;s reload by a ton",
                "Particle Accelerator now shoots a Particle with right click"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "I&#039;m still alive I promise",
              "content": [
                "Rebalanced Man O&#039; War and it&#039;s upgrades",
                "Buffed Swarm reload",
                "Buffed Flank and it&#039;s upgrades",
                "Buffed Swarm Guard and it&#039;s upgrades",
                "Added Particle Accelerator to Beta Tanks",
                "Added Steamboat to Beta Tanks",
                "Added Fabricator to Beta Tanks",
                "Added Zephyr to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 5, 2022",
              "name": "Never start a land war in Asia!",
              "content": [
                "Grudge has been redecorated",
                "Nerfed the reload and bulled damage of Grudge",
                "Buffed the smackiness of Grudge&#039;s flails",
                "Nerfed the bullet health and damage of all acid snipers",
                "Nerfed the reload of Surgeon and Nanite",
                "Nerfed all surgeon studs a tiny bit",
                "Made Trios and Sandbox less common",
                "Pasted in some code that zed gave me idk wat it does",
                "Added Nightgaunt to beta tanks",
                "Added Iocane to beta tanks. It upgrades from Formaldehyde"
              ]
            },
            {
              "type": "Update",
              "date": "January 4, 2022",
              "name": "Vengeance!",
              "content": [
                "Buzzsaw has been released and upgrades from Spike",
                "Toxin has been released and upgrades from Spike",
                "Gigasmasher has been released and upgrades from Megasmasher",
                "Coiffure has recieved a damage buff",
                "Added Bonkmine to beta tanks",
                "Added Grudge to beta tanks",
                "Added Sandman to misc"
              ]
            },
            {
              "type": "Update",
              "date": "January 4, 2022",
              "name": "I hate Glitch&#039;s new editor",
              "content": [
                "Buffed body stats",
                "Fixed branch errors with the class tree",
                "Fixed not being able to spectate other players in Groups modes",
                "Fixed the &#039;seeInvisible&#039; aiSetting property not working",
                "Smasher Closer can no longer spawn",
                "Fixed team balancing, teams will now attempt to have the same amount of bots and players on them",
                "Deceased players now count towards a team&#039;s player count, preventing people from dying and allowing 50 bots on a team",
                "Reworked maze generation"
              ]
            },
            {
              "type": "Update",
              "date": "January 4, 2022",
              "name": "Spencer release shit",
              "content": [
                "Released Dogfighter, branches off Fighter",
                "Released Trappory, branches off Spawner",
                "Released Contagiory, branches off Trappory",
                "Added Hybrid Trapper to beta",
                "Added Magician to beta, branches off Hybrid Trapper",
                "Added Witch to beta, branches off Magician",
                "Overtrapper now also branches off Hybrid Trapper",
                "Nerfed Swarmer class reload",
                "Nerfed Screwgun penetration",
                "Buffed hive reload",
                "Buffed Pelleter damage",
                "Reduced Musketeer spread"
              ]
            },
            {
              "type": "Update",
              "date": "January 3, 2022",
              "name": "Topping off all the smasher branches",
              "content": [
                "Decimator has been released and upgrades from Annihilator",
                "Cropduster has been released and upgrades from Minigun",
                "Hyliner has been released and upgrades from Cropduster and Streamliner",
                "Flailception has been released and upgrades from Auto-Flail",
                "Bulwark has been released and upgrades from Trapper Flank",
                "Smashception and Coiffure have recieved a large buff to health and body damage",
                "Nerfed the speed of Bonker and Careener slightly",
                "Added Spikeception to beta tanks",
                "Added Mineception to beta tanks",
                "Added Buzzsaw to beta tanks",
                "Added Toxin to beta tanks",
                "Added Gigasmasher to beta tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 3, 2022",
              "name": "I&#039;m not original",
              "content": [
                "Added Fungi to Beta",
                "Added Trappory to Beta",
                "Added Contagiory to Beta, branches off Trappory",
                "Added Propellery to Beta",
                "Added Airport to Beta, branches off Propellery",
                "Added Navalist to Beta",
                "Added Captain to Beta, branches off Navalist",
                "Nerfed Ranger reload",
                "Nerfed Tri-Angle branch thruster damage",
                "Buffed Punt Gun offensive stats",
                "Buffed Bandolier offensive stats",
                "Nerfed the bullet size of Oxyrrhexis by one trillionth of one percent"
              ]
            },
            {
              "type": "Update",
              "date": "January 2, 2022",
              "name": "The biggest and the smallest",
              "content": [
                "Oxyrrhexis has been released and upgrades from Annihilator and Astronaut",
                "Ragnar has been released and upgrades from Ranger and Gunner Trapper",
                "Auto-Engineer has been released and upgrades from Engineer",
                "Hybrid Engineer has been released and upgrades from Engineer",
                "Added Careener to Beta tanks",
                "Added Smashception to Beta tanks",
                "Added Coiffure to Beta tanks",
                "Added Flail Ception to Beta tanks",
                "Nerfed the acid of the Formadehyde branch",
                "Nerfed the bullet size of Oxyrrhexis by one billionth of one percent"
              ]
            },
            {
              "type": "Update",
              "date": "January 2, 2022",
              "name": "Oxy is less OP now",
              "content": [
                "Added Saltsower to Beta tanks",
                "Added Metaseeker to Beta tanks",
                "Nerfed Oxy reload, damage, and bullet health",
                "Nerfed Surgeon stud damage and health by 30%",
                "Zamboni now upgrades from Rifle at lvl 60",
                "Poison Dart has been banished to Misc untill I can fix it",
                "Deliverance has been renamed to Medkit"
              ]
            },
            {
              "type": "Update",
              "date": "January 1, 2022",
              "name": "New year new tonkz",
              "content": [
                "Added Suzerain to Beta",
                "Added Overflow to Beta",
                "Added Juggernaut to Beta",
                "Added Thunderbolt to Beta",
                "Buffed Gondola drone speed",
                "Buffed Emplacement swarm reload",
                "Nerfed Decimator speed",
                "Nerfed Splatterer ring damage",
                "Slightly nerfed Gleamer jump reload",
                "Nerfed Acidic Spawner&#039;s minion acid damage "
              ]
            },
            {
              "type": "Update",
              "date": "January 1, 2022",
              "name": "New year new tonkz",
              "content": [
                "Man O&#039; War has been released and upgrades from Tri-Angle and Pounder",
                "Jellyfish has been released and upgrades from Man O&#039; War and Swarmer",
                "Warfare has been released and upgrades from Man O&#039; War and Fighter",
                "Betelguese has been released and upgrades from Man O&#039; War and Gleamer",
                "Ambassador has been released and upgrades from Man O&#039; War and Destroyer",
                "Fume has been released and upgrades from Sniper and Inferno",
                "Zamboni has been released and upgrades from Fume",
                "Fumigator has been released and upgrades from Fume",
                "Dual Trapper has been released and upgrades from Trapper",
                "Barricade has been released and upgrades from Dual Trapper and Minigun",
                "Deluge, Bridicade, and Auto-Barricade have been released and upgrade from Barricade",
                "Cat O&#039; Nine Tails has been released and upgrades from Marner",
                "Bushwhacker has been released and upgrades from Sniper and Trap Guard",
                "Warden and Hybrid Ranger have been released and upgrade from Ranger",
                "Megaswarmer has been released and upgrades from Swarmer",
                "Smotherer has been released and upgrades from Streamliner",
                "Smotherer has been mildly nerfed"
              ]
            },
            {
              "type": "Update",
              "date": "January 1, 2022",
              "name": "HAPPY NEW YEAR!!!",
              "content": [
                "Surgeon has been altered to better match its old design",
                "Heat Hive has been adjusted to better match Sharpener",
                "Added Treppaner to beta tanks",
                "Added Scalpel to beta tanks",
                "Added Deliverance to beta tanks",
                "Added Fungalmancer to beta tanks",
                "Added EMT to beta tanks",
                "Added Toaster to beta tanks",
                "Added Frier to beta tanks",
                "Added Hotman to beta tanks",
                "Added Manipulator to beta tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 31, 2021",
              "name": "Happy new year",
              "content": [
                "Fixed bugs with the new protocol",
                "Optimized bandwidth usage",
                "Added a bandwidth monitor to the debug menu",
                "Nerfed sentries a lot, fixing a mistake that caused them to be OP",
                "Made the map bigger",
                "Redid gamemode shuffling",
                "FFA has a 20% chance of having random colors"
              ]
            },
            {
              "type": "Update",
              "date": "December 31, 2021",
              "name": "No there isn&#039;t I killed the doctor.",
              "content": [
                "You now respawn with a portion of your score",
                "You have a chance of spawning from a factory in TDM modes",
                "Optimized drones and fixed balancing issues with the Moderator and Maleficitor tanks",
                "Nerfed drone damage and speed slightly",
                "Rebalanced Maleficitor",
                "Nerfed the Underseer branch",
                "Nerfed Snipers",
                "Nerfed Tri-Angle branch front guns",
                "Buffed and released Vulcan, branches off of Gunner",
                "Rebalanced Sentries",
                "Fixed Artificialist&#039;s design",
                "Disabling Fancy Animations now also improves the frame rate"
              ]
            },
            {
              "type": "Update",
              "date": "December 31, 2021",
              "name": "Is there a doctor in the house?",
              "content": [
                "Reverted Warden reload",
                "Nerfed Man O&#039; War branch side bullet damage",
                "Added Surgeon to Beta Tanks",
                "Added Nanite to Beta tanks",
                "Added Heat Hive to Beta tanks",
                "Added Studlayer to misc for later use"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "Warm butter",
              "content": [
                "Added Cropduster to Beta",
                "Added Hyliner to Beta, branches off Cropduster",
                "Added Bridicade to Beta, branches off Cropduster and Barricade",
                "Added Auto-Barricade, branches off Barricade",
                "Added Splatterer to Beta"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "The time has come my fellow deciples!",
              "content": [
                "Added Oxyrrhexis to Beta Tanks",
                "I would say it&#039;s as OP as it used to be, except it&#039;s actually way, WAY more OP",
                "Added Chlorine to Beta Tanks",
                "Added tooltip to Poison Dart"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "NEPH YOU FUCKING SUCK AT CODING",
              "content": [
                "Fixed AI"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "just a quicky (:lenny:)",
              "content": [
                "Reworked how mockups are loaded"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "Why do I work full time",
              "content": [
                "Buffed Warden reload",
                "Nerfed reload of all Formaldehyde tanks",
                "Added Smotherer to Beta Tanks",
                "Added Rat Poison to Beta Tanks",
                "Added Icebox to Beta Tanks",
                "Added Poison Dart to Beta Tanks. it&#039;s kinda broke but I&#039;ll deal with that later lol",
                "I also added acid streamliner but I forgot to add upgrade path. Sorry no time lol goodnight."
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "Yes, am lazy",
              "content": [
                "Added Auto-Engineer to Beta",
                "Added Hybrid Engineer to Beta",
                "Added Frost Trapper to Beta",
                "Added Black Ice to Beta, branches off Frost Trapper",
                "Added Avalanche to Beta, branches off Barricade",
                "Added Pergola to Beta, Branches off Gondola",
                "Added Hybrid Ranger to Beta",
                "Nerfed Barricade reload"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "SJGIHIUFHEGHE IAHDGOFHO AEIIFH ",
              "content": [
                "Staff, Resigned Staff and Former Developers can join the #c (Closed Beta) server with a token from the $c claim command",
                "Added Single to Beta Tanks",
                "Added Twingle, branches off of Single",
                "Added Mingle, branches off of Single",
                "I&#039;ll be taking some time off, due to how hard it was to name these tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "AAAAHHHHHH",
              "content": [
                "Reworked and rebalanced status effects",
                "Added EMP effect, stops you from shooting for a period of time",
                "Added Tesla effect, deals damage to you if you get close to it",
                "Added EMP to Beta Tanks",
                "Added Tesla to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "OK SO LISTEN UP FUCKERS",
              "content": [
                "Double Whammy is no longer a Beta Tank and now branches off of Reacher and Marner",
                "Reworked all stats to make the game more balanced",
                "Fixed bullets having too much variation and spread",
                "Changed the map in #c"
              ]
            },
            {
              "type": "Update",
              "date": "December 28, 2021",
              "name": "How did I get here",
              "content": [
                "Added Emplacement to Beta",
                "Added Enforcement to Beta, branches off Emplacement",
                "Cried",
                "Renamed Obliterator to Decimator",
                "Nerfed Decimator bullet speed, health, and penetration",
                "Nerfed Mega Swarmer reload",
                "Nerfed Gondola drone speed",
                "Fixed a visual issue with Artificialist"
              ]
            },
            {
              "type": "Update",
              "date": "December 28, 2021",
              "name": "Pain",
              "content": [
                "Buffed Fume backflares",
                "Added Warden to Beta Tanks",
                "Added Chillbrid to Beta Tanks",
                "Added Overchill to Beta Tanks",
                "Added Mortal Chill to Beta Tanks",
                "Added Formaldehyde to Beta Tanks",
                "Added Biocontainment to Beta Tanks",
                "Added Double Whammy to Beta Tanks",
                "Added Cat O&#039; Nine Tails to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 28, 2021",
              "name": "We&#039;ve had a disappointingly low amount of snow this year... :(",
              "content": [
                "Buffed Twister&#039;s mini bullets while nerfing it&#039;s main bullet",
                "Buffed Rocketeer",
                "Gave Twister a tooltip for its special ability",
                "Added Ordnance, branches off of Artillery",
                "Added Beekeeper, branches off of Hunter and Artillery",
                "Nerfed Sentries",
                "Added Caltrop, branches off of Quad Trapper and Builder",
                "Added Gunner Cruiser, branches off of Cruiser and Gunner",
                "Added Bonker, branches off of Smasher",
                "Added Fortress, branches off of Quad Trapper and Cruiser",
                "Added Palisade, branches off of Spawner and Quad Trapper",
                "Bullet bots no longer upgrade to Smasher and Lancer",
                "Added custom Lancer AI",
                "Inferno is no longer a Beta Tank and branches off of Machine Gun and Sniper",
                "Sharpener is no longer a Beta Tank and branches off of Twister",
                "Hybrado is no longer a Beta Tank and branches off of Cruiser",
                "Gridlock is no longer a Beta Tank and branches off of Necromancer",
                "Musketeer is no longer a Beta Tank and branches off of Multishot and Trapper",
                "Rimfire is no longer a Beta Tank and branches off of Gunner"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": "Back at it again",
              "content": [
                "Added Dual Trapper to Beta",
                "Added Deluge to Beta, branches off Barricade",
                "Added Obliterator to Beta",
                "Nerfed Bomb Reload",
                "Nerfed Bomb Damage",
                "Buffed Bomb shrapnel damage",
                "Increased Nuclear Bomb bullet size",
                "Rotated the indicator for Acid Traps"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": "2020 be like",
              "content": [
                "Zamboni is now a Rifle like its original design",
                "Added Fumigator to Beta Tanks",
                "Added Acid Trapper to Beta Tanks",
                "Added Coronovirus to Beta Tanks",
                "Added Cryobomb to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": "Hi",
              "content": [
                "You now flash when you&#039;re invulnerable",
                "You now get invulnerability for 30 seconds when exiting a portal",
                "When you spawn, you get invulnerability for 60 seconds",
                "Fixed bugs with portals",
                "Added Vulcan to Beta Tanks",
                "Added Taser to Beta Tanks",
                "Added Rimfire to Beta Tanks",
                "Added Barricade to Beta Tanks",
                "Added Bulwark to Beta Tanks",
                "Added Bushwhacker to Beta Tanks",
                "Added Constructor, branches off of Builder",
                "Added Conqueror, branches off of Builder",
                "Added Cyclone, branches off of Gunner and Hexa",
                "Added an experimental Tank Editor for Developers only, this allows us to edit tanks and balance things on the fly without having to restart the server"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": ":)",
              "content": [
                "The player cap for sandbox mode is now 35",
                "The default player cap is now 20",
                "Optimized AI and controllers",
                "Optimized loops",
                "Optimized socket stuff",
                "Added tank recovery, if you disconnect, reconnect quickly to get your tank back!",
                "Boss Rush waves are organized by amount and difficulty",
                "Made Boss Rush more fun (more bosses)"
              ]
            },
            {
              "type": "Update",
              "date": "December 26, 2021",
              "name": "Fumin&#039;",
              "content": [
                "Added Fume to Beta Tanks",
                "Added Smoker to Beta Tanks",
                "Added Zamboni to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 26, 2021",
              "name": "So you may have noticed....",
              "content": [
                "Reworked how servers are loaded.",
                "All Heroku hosted servers now have a schedule, which means that two days a week, they will not be accessible, this will mean we won&#039;t lose servers at the end of the month",
                "Added a #c server for my experimenting, this is only public when I want it to be"
              ]
            },
            {
              "type": "Update",
              "date": "December 25, 2021",
              "name": "Merry Christmas to all, and to all a good fight",
              "content": [
                "Added Man O&#039; War to Beta Tanks",
                "Added Ambassador to Beta Tanks",
                "Added Jellyfish to Beta Tanks",
                "Added Betelguese to Beta Tanks",
                "Added Warfare to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 25, 2021",
              "name": "So Winter Rush was too easy, in my opinion",
              "content": [
                "Buffed the base Health of Eternals",
                "Buffed Thor",
                "Buffed and reworked Nyx",
                "Buffed Oceanus",
                "Made some of the later waves harder in Boss Rush",
                "Attempted to rework boss orbiting",
                "Fixed boss aiming in Boss Rush when they are moving to waypoints",
                "Bots are more brave",
                "Sentries are now targeted by AI with priority over Polygons",
                "Nerfed Polygon pushability",
                "Nerfed Lancers due to them being so fucking busted",
                "Rebalanced Traps and Minion density/pushability",
                "Made the Upgrade menu smaller",
                "Added Machine Gunner, branches off of Gunner and Artillery",
                "Minishot now branches off of Basic",
                "Lancer now branches off of Basic",
                "Moved Winter Rush to #ha"
              ]
            },
            {
              "type": "Update",
              "date": "December 24, 2021",
              "name": "Before I go",
              "content": [
                "Released Gleamer, branches off Tri-Angle",
                "Released Pulsejet, branches off Gleamer",
                "Released Jabber, branches off Puncher",
                "Released Elamnecro, branches off Necromancer",
                "Released Heavy Shotgun, branches off Shotgun",
                "Slightly increased Shotgun bullet spread"
              ]
            },
            {
              "type": "Update",
              "date": "December 24, 2021",
              "name": "Merry Christmas everyone I hope you know you&#039;re appreciated!",
              "content": [
                "Reworked the map in Boss Rush",
                "Reworked boss spawning mechanics in Boss Rush",
                "Gave bosses better AI in Boss Rush",
                "Bots now attempt to defend sanctuaries in Boss Rush",
                "AI Captured Sanctuaries no longer fight back",
                "Played around with body damage and health for weapons and bosses",
                "Nerfed Sentries and Nest Defenders",
                "Added Nyx, a new Eternal",
                "Added Pontus, a new Celestial",
                "Added Hades, a new Celestial",
                "Rebalanced Dominator body stats",
                "Fixed message clogging"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "I&#039;m dev now what",
              "content": [
                "Added Bloodcurdler to beta tanks. It upgrades from Marner and Mace",
                "That&#039;s it lol"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "I&#039;m z46, not Oblivion",
              "content": [
                "Added a /help page, this also includes instructions on how to install the game as an app",
                "Fixed issues with Demeter&#039;s top turrets",
                "Buffed body damage and nerfed health",
                "Added Turkey",
                "Removed part of the map of Boss Rush",
                "Gave Dominators in Boss Rush healing turrets",
                "Fixed bugs with healing bullets making your health go really high",
                "Buffed Crashers",
                "Nerfed Sentries and Nest Defenders",
                "Added a Server Overloaded feature if the servers get too stressed out",
                "The server speed is now measured in mspt (Ms per tick)",
                "Heavy entity optimizations"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "Rebranding",
              "content": [
                "Woomy is being renamed to Tanon.io.",
                "This is because we love Tanks and Kannon."
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "SOOOOOOOOOOOOOOOOOOOOOOOOOOO",
              "content": [
                "Sterilizer is now spawnable in Boss Rush",
                "All the Eternals are now possible final Bosses in Boss Rush",
                "You only get one final boss, instead of all of them. Fixed the minimap in sandbox mode"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "Things that should just exist",
              "content": [
                "Added Penta Machine to Beta",
                "Added Mega Swarmer to Beta",
                "Added Jabber to Beta",
                "Added Elamnecro to Beta",
                "Added Gondola to Beta",
                "Slightly nerfed Aggressor reload",
                "Buffed Underseer reload",
                "Underseer classes no longer have recoil",
                "Engineer now also branches off Arsenal"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "WERQYT",
              "content": [
                "Added Mythical Crasher",
                "Added Hellbringer",
                "Added Tetraplex",
                "Moved some bosses to Developer Bosses"
              ]
            },
            {
              "type": "Update",
              "date": "December 22, 2021",
              "name": "The World Serpent",
              "content": [
                "Added JÃ¶rmungandr, snake-like boss that circles and then stabs you with flails."
              ]
            },
            {
              "type": "Update",
              "date": "December 22, 2021",
              "name": "GUESS WHO&#039;S BACK",
              "content": [
                "Added Dogatorix",
                "Gave Dogatorix Permissions for Abuse"
              ]
            },
            {
              "type": "Update",
              "date": "December 20, 2021",
              "name": "OH MY GOD",
              "content": [
                "Added Legendary Crasher",
                "Added Sacred Crasher",
                "Added Legendary Quadral Machine",
                "Added Catalyst",
                "Added EK-6",
                "Added Sun King",
                "Added Hexadecimator",
                "Added Heptadecimator"
              ]
            },
            {
              "type": "Update",
              "date": "December 20, 2021",
              "name": "AUGH",
              "content": [
                "Boss Rush has been updated with more, rare and powerful bosses. As a surprise, I won&#039;t tell you what they are yet :)"
              ]
            },
            {
              "type": "Update",
              "date": "December 20, 2021",
              "name": "Smash me daddy",
              "content": [
                "Nerfed Smasher",
                "Added Spike, branches off of Smasher",
                "Added Mega Smasher, branches off of Smasher",
                "Added Landmine, branches off of Smasher",
                "Added Ninja Star, branches off of Smasher",
                "Added Auto-Smasher, branches off of Smasher"
              ]
            },
            {
              "type": "Update",
              "date": "December 19, 2021",
              "name": "AEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
              "content": [
                "Fixed bugs with and balanced Lancer, and moved it to Beta Tanks",
                "Added Flail, branches off of Lancer",
                "*inhales*",
                "Added Marner, branches off of Flail",
                "Added Mace, branches off of Flail",
                "Added Reacher, branches off of Flail",
                "Added Flangle, branches off of Flail",
                "Added Auto-Flail, branches off of Flail",
                "Added Nossle, branches off of Mace",
                "Added HongKongLongDong, branches off of Reacher",
                "Added Windmill, branches off of Marner",
                "Added Fidget Spinner, branches off of Marner",
                "Added Akafuji, branches off of Lancer",
                "Added Saboten, branches off of Akafuji",
                "Added Vessle, branches off of Akafuji",
                "Added Slipknot to Beta Tanks",
                "Added Ragnar to Beta Tanks",
                "Tooltips are now more accurate for mobile users, stating to Double Tap rather than Right-Click",
                "Reverted #wa to Sandbox mode"
              ]
            },
            {
              "type": "Update",
              "date": "December 19, 2021",
              "name": "Fast things go brr",
              "content": [
                "Added Pulsejet to Beta Tanks, branches off Gleamer",
                "Added Dogfighter to Beta Tanks",
                "Nerfed Arsenal",
                "Nerfed Musketeer",
                "Increased multishot branches spread",
                "Increased multishot branches reload",
                "Buffed Gleamer jump",
                "Beta Tanks now automatically go to tier 5"
              ]
            },
            {
              "type": "Update",
              "date": "December 18, 2021",
              "name": "So you&#039;re qualified for this job? Yes I just got out of Yale. That&#039;s great! Oh yeah your wife has a huge rack man. HEY!! HEY MAN LEARN TO TAKE A YOKE!!!",
              "content": [
                "Fixed issues with Arena Closing in Sandbox mode",
                "Readded Infection to the gamemode randomizer",
                "The #wa server can now be any gamemode",
                "Various Beta Tank balance changes",
                "Added Mercury, branches off of Acid",
                "Added Paralyzer, branches off of Chiller",
                "Added Blizzard, branches off of Chiller",
                "Added Frostbite, branches off of Acid and Chiller"
              ]
            },
            {
              "type": "Update",
              "date": "December 18, 2021",
              "name": "12/18/21 or something idfk",
              "content": [
                "Added Foam Gun to Beta Tanks",
                "Added Bubble Gun, branches off of Foam Gun",
                "Added Sponge, branches off of Bubble Gun",
                "Added Corroder, branches off of Bubble Gun",
                "Added Bomb, branches off of Foam Gun",
                "Added Nuclear Bomb, branches off of Bomb",
                "Added Sparkler, branches off of Foam Gun",
                "Added Crackler, branches off of Sparkler",
                "Added Flamethrower, branches off of Foam Gun",
                "Added Courser, branches off of Flamethrower",
                "Buffed the drone count of the Manager branch to 8"
              ]
            },
            {
              "type": "Update",
              "date": "December 17, 2021",
              "name": "lmao I do my job",
              "content": [
                "Reworked Sharpener",
                "Buffed Inferno",
                "Motor is no longer a Beta Tank and upgrades off of Director",
                "Manager is no longer a Beta Tank and upgrades off of Director",
                "Maleficitor is no longer a Beta Tank and upgrades off of Underseer",
                "Bent Boomber is no longer a Beta Tank and upgrades off of Boomer",
                "Redistributor is no longer a Beta Tank and upgrades off of Annihilator",
                "Scaler is no longer a Beta Tank and upgrades off of Rifle and Spreadling",
                "Added Scattergun, branches off of Spreadshot",
                "Added Heptashot, branches off of Pentashot",
                "Added Acid, Chiller and Desintegrator to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 17, 2021",
              "name": "Whatever, *Un-betas your beta things*",
              "content": [
                "Blaster is no longer a Beta Tank, and upgrades off of Machine",
                "Heptatrapper is no longer a Beta Tank, and upgrades off of Quad Trapper",
                "Zeppelin is no longer a Beta Tank, and upgrades off of Basicception",
                "Basic Ceptionist is no longer a Beta Tank, and upgrades off of Basic",
                "Smasher is no longer a Beta Tank, and upgrades off of Basic"
              ]
            },
            {
              "type": "Update",
              "date": "December 14, 2021",
              "name": "Beta things, whatever",
              "content": [
                "Added Gridlock to Beta Tanks",
                "Added Heavy Shotgun to Beta Tanks",
                "Added Musketeer to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 13, 2021",
              "name": "Am alive",
              "content": [
                "Added Industrialist; upgrades from Factory",
                "Added Arsenal to Beta Tanks",
                "Added Gleamer to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 12, 2021",
              "name": "omg belial is so fucking hot",
              "content": [
                "Added HMS Illustrious, a British carrier",
                "Added Mind Controller to Beta Tanks",
                "Balance Changes to Naval Ships",
                "Aggressor is no longer a Beta Tank and branches off of Predator",
                "Falcon is no longer a Beta Tank and branches off of Accelerator and Assassin",
                "Split is no longer a Beta Tank and branchess off of Penta Shot",
                "Gust is no longer a Beta Tank and branchess off of Spread Shot",
                "Master is no longer a Beta Tank and branches off of Overseer",
                "Backshield is no longer a Beta Tank and branches off of Flank Guard"
              ]
            },
            {
              "type": "Update",
              "date": "December 10, 2021",
              "name": "HEY IT IS NERFED BY ITS AVERAGE RELoAD I SWEAr",
              "content": [
                "Added Japanese Carriers",
                "Added Petropavlovsk",
                "Crashers, sentries and nest defenders no longer die on maze walls"
              ]
            },
            {
              "type": "Update",
              "date": "December 9, 2021",
              "name": "moblre",
              "content": [
                "Added more accessability for mobile mode, press the button in the bottom left corner to toggle"
              ]
            },
            {
              "type": "Update",
              "date": "December 7, 2021",
              "name": "Back to normalities, I guess...",
              "content": [
                "Reenabled normal gamemode shuffling",
                "Fixed bugs with the party link system not working",
                "You can no longer create a sandbox room by ID, it is set for you. You can still join with party links however",
                "You can now right click on mobile by double tapping on the righthand side of your screen",
                "Fixed numerous bugs with Aircraft Carriers on mobile"
              ]
            },
            {
              "type": "Update",
              "date": "December 5, 2021",
              "name": "So I stopped being lazy and unorganized",
              "content": [
                "Buffed Anti Aircraft firepower (again)",
                "Added more American carriers",
                "Added more Soviet carriers",
                "Reworked the stats of ALL carriers",
                "Added British carriers"
              ]
            },
            {
              "type": "Update",
              "date": "December 4, 2021",
              "name": "Action Stations!",
              "content": [
                "Buffed Anti Aircraft firepower",
                "Reworked how carriers launch planes",
                "Slightly nerfed American rockets",
                "Gave everything proper branches in Naval Ships",
                "Slightly nerfed Wesser due to it being OP",
                "Added Russian Carriers"
              ]
            },
            {
              "type": "Update",
              "date": "November 29, 2021",
              "name": "OMG MOBILE WORKS I&#039;M SO HAPPY HJHGFREHRFEHRUI",
              "content": [
                "Made the home menu work better on mobile",
                "Sandbox rooms now close once all players are disconnected",
                "Reworked the scale of food rarity, and doubled the rarity of green shapes",
                "Fixed the majority of bugs with mobile mode",
                "Removed the digital ocean server from the list",
                "Minimaps in sandbox are now accurate and only display things in the room they are bound to"
              ]
            },
            {
              "type": "Update",
              "date": "November 28, 2021",
              "name": "Uh oh.",
              "content": [
                "Re-added Elite Director and re-designed it, currently unspawnable",
                "Added a Rammer Sentry, currently unspawnable",
                "Added Scalene Triangles and Rhombuses",
                "Added a Pebble rock type",
                "Removed Industrian"
              ]
            },
            {
              "type": "Update",
              "date": "November 26, 2021",
              "name": "i may regrt this",
              "content": [
                "Fixed bugs with Sandbox mode",
                "Added a server selector"
              ]
            },
            {
              "type": "Update",
              "date": "November 26, 2021",
              "name": "So I made some uh, &#039;quality of life&#039; improvements",
              "content": [
                "Reworked the base Density, Pushability and Penetration of all entities",
                "Buffed Smasher",
                "Made Mothership slightly smaller",
                "Reworked gamemode generation",
                "Slightly changed gamemode codes",
                "Many gamemodes now have Open and Maze modes",
                "Added Sandbox mode",
                "Added a new server at #wa"
              ]
            },
            {
              "type": "Update",
              "date": "November 25, 2021",
              "name": "I hade a lovely hike",
              "content": [
                "Added a way to create custom arenas using the maze generator",
                "Reworked maze wall collision physics, they are no longer hugely bouncy",
                "Boss Rush now has a custom arena",
                "Fixed issues with spawning in bases controlled by the bosses in Boss Rush",
                "You cannot spawn if you have no bases in boss rush",
                "Added a lose condition in Boss Rush, similar to arras.io siege"
              ]
            },
            {
              "type": "Update",
              "date": "November 25, 2021",
              "name": "ok gonna spend time with family lol",
              "content": [
                "Made the #how-to-play status embeds better"
              ]
            },
            {
              "type": "Update",
              "date": "November 24, 2021",
              "name": "So I got bored",
              "content": [
                "Added EK-3 to X-K-X Bosses",
                "Added EK-4 to X-K-X Bosses",
                "Added EK-5 to X-K-X Bosses",
                "Added TK-1 to X-K-X Bosses",
                "Added TK-2 to X-K-X Bosses",
                "Added TK-3 to X-K-X Bosses",
                "Colony now branches off of Director",
                "Rebalanced Redistributor",
                "Buffed Smasher",
                "Added Master to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "November 21, 2021",
              "name": "WW91J3JlIGEgZnVja2luZyBuZXJkLiBHZXQgYSBsaWZl",
              "content": [
                "Reworked food spawning and chances",
                "Fixed various bugs",
                "Added Zeppelin to Beta Tanks",
                "Added Giffard, branches off of Zeppein",
                "Added Hindenburg, branches off of Zeppelin"
              ]
            },
            {
              "type": "Update",
              "date": "November 21, 2021",
              "name": "There&#039;s a real lake called &#039;El Lago Titikaka&#039; in South America",
              "content": [
                "Added Senior-Tester",
                "Nerfed Dominator health by ~8.334%",
                "You can no longer upgrade skill points on dominators",
                "Added Center Control mode! Keep members of your team in the center zone of the map to gain points!"
              ]
            },
            {
              "type": "Update",
              "date": "November 20, 2021",
              "name": "Absol likes to censor my changelogs. Watch: FUCK (Part Two)",
              "content": [
                "Made the start menu more compatible with mobile",
                "Fixed bugs with the IOS downloadable version. (Add the page to the home screen)",
                "Moved all launcher branch tanks in Developer branches to playable tanks as they are balanced",
                "Biohazard is now public and branches off of Arthropoda",
                "Trapswarmer is now public and branches off of Mini Swarmer",
                "Hivemind is now public and branches off of Spawner",
                "Auto-Basic is now public and branches off of Basic",
                "Added Drone Dominator",
                "Added Steamroller Dominator",
                "Added Crockett Dominator",
                "Added Spawner Dominator",
                "Added Auto-Dominator",
                "Added OctoceptionistÂ² to Overdone Tanks",
                "Added PentaceptionistÂ² to Overdone Tanks",
                "Added FighterceptionistÂ² to Overdone Tanks",
                "Added more Arena Closers"
              ]
            },
            {
              "type": "Update",
              "date": "November 20, 2021",
              "name": "So what if we ate the world? (Part One)",
              "content": [
                "Reworked Lucrehulk entirely, and made it a special boss in Boss Rush",
                "Nerfed Nest Defenders",
                "Nerfed the EK-X bosses",
                "Added a developer branch to take care of X-K-X bosses",
                "Added a developer branch to take care of overdone tanks",
                "Added MK-1 to X-K-X Bosses",
                "Added MK-2 to X-K-X Bosses",
                "Added MK-3 to X-K-X Bosses",
                "Added Paner to Misc",
                "Added Rose to Misc",
                "Added Cycloid to Misc",
                "Added Cardioid to Misc",
                "Added Parabol to Misc",
                "Added Flex to Misc",
                "Added Lissajous to Misc",
                "Added Vortext to Misc",
                "Added Flank Panzerfaust to Misc",
                "Added Stweamwinder to Overdone Tanks",
                "Added Stweamicane to Overdone Tanks",
                "Added Fallen Booster as a spawnable boss",
                "Added Fallen Hybrid as a spawnable boss",
                "Added Industrian as a special boss in Boss Rush"
              ]
            },
            {
              "type": "Update",
              "date": "November 19, 2021",
              "name": "A literal forest fire is approaching rapidly",
              "content": [
                "Added Ligma to TESTBED Misc",
                "Finished up the Sterilizer boss!"
              ]
            },
            {
              "type": "Gamemode",
              "date": "November 18, 2021",
              "name": "It&#039;s been long overdue..",
              "content": [
                "Readded randomized gamemodes",
                "Added many old and new modes to the gamemode randomizer",
                "Gamemodes chances of being selected are weighted now",
                "Reworked Space",
                "Added map randomization, rock placement will now be different in most modes",
                "Completely reworked how Domination&#039;s map is generated, allowing for Open Domination and bases easily",
                "This took a lot of work, so I&#039;d appreciate it if you shared woomy with your friends, and gave us feedback on our <a href="
                ]}
                ]} `,
      },
      {
        name: "main.py",
        path: "",
        content: `import os
        os .system ("pip install selenium==3.141.0")
        from webbot import Browserweb = Browser()
        web.go_to('https://launcher.ben5435.repl.co/landingpage.html')
        website = input('Ubuntu.py')
        from webbot import Browser`,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "Changelog": [
            {
              "type": "Update",
              "date": "January 25, 2022",
              "name": "Git Obliterated",
              "content": [
                "Obliterator has been released and upgrades from Pounder and Sniper",
                "Bulldozer has been released and upgrades from Obliterator and Assassin",
                "Bobcat has been released and upgrades from Bulldozer and Ranger",
                "Sleet has been released and upgrades from Obliterator and Chiller",
                "Nerfed Hotshot branch reload, damage, and bullet speed",
                "Added Megawatt to beta tanks. Upgrades from Tesla Trapper",
                "Added Gigawatt to beta tanks. Upgrades from Megawatt. Durr",
                "Added Shock Trooper to beta tanks. Upgrades from Megawatt",
                "Added Zapp Gun to beta tanks. Upgrades from Megawatt",
                "Added Electrician to beta tanks. Upgrades from Tesla Trapper"
              ]
            },
            {
              "type": "Update",
              "date": "January 24, 2022",
              "name": "I&#039;m adding tenks lel",
              "content": [
                "Decalibrator has been released and upgrades from Constructor and Giga-Trapper",
                "Glitterbomb has been released and upgrades from Reliquary",
                "Fixed a bug where Packer trap props would stare at people",
                "Added Hotshot to beta tanks. upgrades from Obliterator",
                "Added Hotliner to beta tanks. upgrades from Hotshot",
                "Added Steamshot to beta tanks. upgrades from Hotshot and Steamroller",
                "Added Planer to beta tanks. upgrades from Steamroller and Bulldozer",
                "Added Sleet to beta tanks. upgrades from Obliterator",
                "Added Tesla Trapper to beta tanks",
                "Nerfed the recoil of the entire Obliterator branch",
                "Nerfed the reload and bullet speed of Steamroller"
              ]
            },
            {
              "type": "Update",
              "date": "January 23, 2022",
              "name": "kill me",
              "content": [
                "Unkilled the game",
                "Added Redistributer Ception to misc"
              ]
            },
            {
              "type": "Update",
              "date": "January 23, 2022",
              "name": "They see me rollin&#039;",
              "content": [
                "Compounder has been released and upgrades from Computer and Poundbrid",
                "Archivist has been released and upgrades from Compounder and Hybrid",
                "Turing has been released and upgrades from Compounder and Megabyte",
                "Firewall has been released and upgrades from Computer",
                "Server has been released and upgrades from Computer and VIP",
                "Mainframe has been released and upgrades from Server and Deluxe",
                "Takeout has been released and upgrades from Packer",
                "Nerfed Server drones",
                "Added Obliterator to beta tanks",
                "Added Bulldozer to beta tanks",
                "Added Bobcat to beta tanks",
                "Added Steamroller to beta tanks",
                "Added Flattner to beta tanks",
                "Added Decalibrator to beta tanks",
                "Increased the space between Ascended Pentaquark&#039;s quarks",
                "Moved Ascended Pentaquark to Dev Bosses"
              ]
            },
            {
              "type": "Update",
              "date": "January 22, 2022",
              "name": "dsdn",
              "content": [
                "Removed curtain animations",
                "Added Pathfinding to dev spawned bosses with the F key",
                "Removed some servers on some days"
              ]
            },
            {
              "type": "Update",
              "date": "January 20, 2022",
              "name": "Real game update",
              "content": [
                "Added nothing because y&#039;all are ungrateful pieces of shit, fuck you"
              ]
            },
            {
              "type": "Update",
              "date": "January 19, 2022",
              "name": "Changing the game",
              "content": [
                "Increased the penetration of all objects to hopefully make collisions less bouncy",
                "Nerfed all boss health heavily",
                "Removed Mind Controller",
                "Removed Trump",
                "Removed Enigma",
                "Removed EMP",
                "Released Chiller, branches off Sniper",
                "Released Paralyzer, branches off Chiller",
                "Released Blizzard, branches off Chiller",
                "Released Frostbite, branches off Chiller and Acid",
                "Released Chillbrid, branches off Chiller",
                "Released Overchill, branches off Chillbrid",
                "Released Mortal Chill, branches off Chillbrid",
                "Released Slipknot, branches off Triple Shot and Double",
                "Released Frost Trapper, Branches off Trapper",
                "Released Icebox, branches off Frost Trapper and Builder",
                "Released Fabricator, Branched off Fighter and Triple",
                "Released Taser, branches off Kinematic",
                "Released Druid, branches off Magician",
                "Released Dragon, branches off Fighter and Booster",
                "Slightly buffed Flamethrower bullet health and damage",
                "Slightly buffed Emplacement Block lifetime",
                "Slightly buffed Gondola bullet speed and health",
                "Slightly buffed Redistributor bullet speed",
                "Redistributor&#039;s under trapezoid will now animate just before it shoots",
                "Buffed Shrapnel missile health",
                "Nerfed ICBM Explosion health",
                "Nerfed Driller bullet speed and Penetration",
                "Nerfed Foam Gun bullet reload",
                "Slightly nerfed Courser reload",
                "Slightly nerfed Matchlocks bullet speed and reload",
                "Halfed Questers back thruster reload",
                "Halfed Quadriatic Gust turret reload",
                "Nerfed Arras done max speed",
                "HEAVILY nerfed Treachery done health, damage, and max speed",
                "Treachery now has 6 drones",
                "Musketeer shoots one extra trap "
              ]
            },
            {
              "type": "Update",
              "date": "January 18, 2022",
              "name": "I do things",
              "content": [
                "Briefcase has been released and upgrades from Mega Trapper and Packer",
                "Wardrobe has been released and upgrades from Giga Trapper and Briefcase",
                "Giftwrapper has been released and upgrades from Briefcase",
                "Fungi has been released and upgrades from Multishot and Botanist",
                "Auto-Director has been released and upgrades from Director",
                "Rebellion has been released and upgrades from Auto-Director and Revolutionist",
                "Solar System has been released and upgrades from Rebellion and Spawner",
                "Added Glitterbomb to beta tanks",
                "Added Firewall to beta tanks",
                "Formed from a violent galaxy&#039;s dust around a sphere of everlasting fire, the Solar System Quark seems right at home!"
              ]
            },
            {
              "type": "Hotfix",
              "date": "January 17, 2022",
              "name": "Shrinking ballz",
              "content": [
                "Shrank the rest of Hadron&#039;s Balls",
                "Shrank the balls more",
                "Nerfed mamba dust reload."
              ]
            },
            {
              "type": "Update",
              "date": "January 17, 2022",
              "name": "Ignore the quarks they are not an omen of doom",
              "content": [
                "Proton has been released an upgrades from Revolutionist",
                "Hadron has been released an upgrades from Proton",
                "Kilonova has been released an upgrades from Proton",
                "Rho has been released an upgrades from Proton and Subverter",
                "Dustbowl has been released an upgrades from Launcher, because of course it does",
                "Mamba has been released an upgrades from Dustbowl",
                "Desert Nuke has been released an upgrades from Dustbowl and Shrapnel",
                "Tomb Raider has been released an upgrades from Dustbowl and Navyist",
                "Sandbender has been banished to misc for lag reasons",
                "Rammer has been released and upgrades from Pounder",
                "Buffed Rammer and Desert Nuke",
                "Fixed some upgrade tree issues",
                "Added Briefcase to Beta Tanks",
                "Added Wardrobe to Beta Tanks",
                "Added Giftwrapper to Beta Tanks",
                "Added Submachine to Beta Tanks",
                "From a place where the stars are too dark to see, the Magnetar Quark emerges from the void!"
              ]
            },
            {
              "type": "Balance",
              "date": "January 17, 2022",
              "name": "Under the sea.",
              "content": [
                "Added Zephyr; upgrades from Hybrid Trapper and Flank Cruiser",
                "Added Submarine; upgrades from Cruiser and Manager",
                "Added Sonar; upgrades from Submarine and Battleship",
                "Heavily nerfed Auto Turret bullet health",
                "Heavily buffed Swarm Range",
                "Nerfed bee range",
                "Slightly buffed Grow Bullet penetration",
                "Removed Gunner&#039;s buff in both range and bullet speed",
                "Buffed Propeller and it&#039;s upgrades&#039; bullet health and penetration",
                "Nerfed Redistributor&#039;s reload by a small amount",
                "Buffed Redistributor&#039;s recoil",
                "Slightly buffed Double and it&#039;s upgrades&#039; in general stats",
                "Added Tooltips for certain Accelerator upgrades",
                "Added Tooltips for Submarine upgrades",
                "Added Woodpecker to Beta Tanks",
                "Added Green Woodpecker to Beta Tanks",
                "Added Submersible to Beta Tanks",
                "Slightly changed Probationer and Apprentice&#039;s design",
                "Oqv jx * giiuqw fou"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 17, 2022",
              "name": "Okay maybe you can it&#039;s kinda relaxing for me",
              "content": [
                "Fixed bugs with Naval Battle",
                "Made portals and random colors more common"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 17, 2022",
              "name": "Don&#039;t get used to it.",
              "content": [
                "Fixed bots spawning in sandbox rooms that are closed",
                "Removed Senior-Tester",
                "Optimized server loading in the backend",
                "Buffed German Aircraft Carriers",
                "Naval Combat is back on the mode rotation",
                "Certain servers have certain modes, to prevent duplicates",
                "Added a new server for things like Boss Rush and Naval Combat",
                "Fixed Boss Rush&#039;s display name",
                "Made Maze modes have a 25% chance of happening (aside from other modifiers)"
              ]
            },
            {
              "type": "Update",
              "date": "January 16, 2022",
              "name": "I released 16 tanks in one update",
              "content": [
                "Malware has been released and upgrades from Computer",
                "Ransomware has been released and upgrades from Malware",
                "Malcontent has been released and upgrades from Malware",
                "Brute Force has been released and upgrades from Malware and Megabyte",
                "Mega-Trapper has been released and upgrades from Trapper",
                "Giga-Trapper has been released and upgrades from Mega-Trapper",
                "Tera-Trapper has been released and upgrades from Giga-Trapper",
                "Packer has been released and upgrades from Trapper",
                "Reliquary has been released and upgrades from Packer",
                "Mailman has been released and upgrades from Packer and Builder",
                "Package Bomb has been released and upgrades from Packer",
                "Ricin has been released and upgrades from Package Bomb",
                "Revolutionist has been released and upgrades from Auto-Basic",
                "Subverter has been released and upgrades from Revolutionist",
                "Deuteron has been released and upgrades from Subverter",
                "Toolbelt has been released and upgrades from Subverter and Multitool",
                "Added Takeout to Beta tanks",
                "Added Rammer to Beta tanks",
                "Added Solar System to Beta tanks",
                "Formed in the death of a thousand squares, the Summoner Quark begins to leave its mark upon the world!",
                "Summoner Fragment can now spawn in the Pentagon Nest"
              ]
            },
            {
              "type": "Hotfix",
              "date": "January 15, 2022",
              "name": "Nevermind",
              "content": [
                "Fixed an issue where firing a pillbox as Engineer would create a paradox",
                "Fixed an issue where Spike was defined twice"
              ]
            },
            {
              "type": "Update",
              "date": "January 15, 2022",
              "name": "Not completely incompetent",
              "content": [
                "Tesla has been released and upgrades from Smasher",
                "Coil has been released and upgrades from Tesla",
                "Mega Trapper and it&#039;s upgrades now all have incremental trap speed nerfs",
                "Fixed the appearance of Revolutionist and its upgrades in the upgrade tree",
                "Rebalanced a lot of revolutionist stuff",
                "Added Ricin to beta tanks. Upgrades from Package Bomb. Chill out Zed I&#039;ll release it tommorow."
              ]
            },
            {
              "type": "Update",
              "date": "January 15, 2022",
              "name": "Why is mega trapper not ingame yet?",
              "content": [
                "Computer has been released and upgrades from Basebrid",
                "Megabyte has been released and upgrades from Computer",
                "Gigabyte has been released and upgrades from Megabyte",
                "&#039;Pewterbrid has been released and upgrades from Computer",
                "Megabrid has been released and upgrades from &#039;Pewterbrid",
                "Added Mega-Trapper to beta tanks",
                "Added Giga-Trapper to beta tanks",
                "Added Tera-Trapper to beta tanks",
                "Added Packer to beta tanks",
                "Added Reliquary to beta tanks",
                "Added Mailman to beta tanks",
                "Package Bomb now upgrades from Packer"
              ]
            },
            {
              "type": "Update",
              "date": "January 14, 2022",
              "name": "The Bron Jame",
              "content": [
                "Released Arsenal Guard, branches from Trap Guard and Arsenal",
                "Released Navalist, branches from Navyist",
                "Released Captian, branches from Navalist",
                "Added Quester to beta",
                "Added Druid to beta",
                "Added Driller to beta",
                "Added Drillgun to beta, branches from Driller",
                "Added Exposer to beta, branches from Doxxer",
                "Added Dragon to beta",
                "Added Matchlock to beta",
                "Added Foghorn to beta",
                "Auto-Lancer now branches from Auto-Basic",
                "ð» Spoopy Ghost ð» now branches from Basebrid",
                "Overdrive now branches from Overseer",
                "Trailblazer now branches from Propeller",
                "Flangle now branches from Trailblazer",
                "Redesigned Scalpel",
                "Just kidding didn&#039;t actually add Foghorn to beta get pranked",
                "Buffed Lancer Damage",
                "Nerfed Empowerment block tesla effect radius",
                "Nerfed Puncher branch reload",
                "Speedbump&#039;s Missile has a slightly longer delay before firing"
              ]
            },
            {
              "type": "Update",
              "date": "January 13, 2022",
              "name": "Nanite Cring",
              "content": [
                "Reduced the lifespan of all surgeon traps and studs",
                "Nerfed the reload and lifespan of Nanite&#039;s drones",
                "Computer drones now have a slight danger value",
                "Added Server to beta tanks. Upgrades from Computer",
                "Added Kilonova to beta tanks. Upgrades from Proton",
                "Added Strangeliner to misc."
              ]
            },
            {
              "type": "Update",
              "date": "January 13, 2022",
              "name": "Who needs beta testers anyways?",
              "content": [
                "Completely rebalanced the entire Surgeon branch and then released it without any additional testing.",
                "Surgeon upgrades from Trapper and Launcher",
                "7 Surgeon upgrades were released. I can&#039;t be bothered to list em all",
                "Added Megabyte to Beta tanks. Upgrades from Computer",
                "Added Gigabyte to beta tanks. It&#039;s the dumbest looking tank ever",
                "Added Malware to Beta tanks. Upgrades from Computer",
                "Added Ransomware and Malcontent to Beta tanks. Upgrades from Malware",
                "Added Brute Force to Beta Tanks. It upgrades from Malware and Megabyte"
              ]
            },
            {
              "type": "Update",
              "date": "January 12, 2022",
              "name": "Gamig but even harder",
              "content": [
                "Released Propellery, branches off spawner",
                "Released Airport, branches off Propellery",
                "Released Acidic Spawner, branches off Spawner",
                "Added Embattlement to beta, branches from Emplacement",
                "Added Empowerment to beta, branches from Emplacement",
                "Renamed Thunderbolt to Lightningbolt",
                "Haploid now branches from Diploid",
                "Naturalistbrid now branches from Pelleter Hybrid",
                "Kinematic now branches from Accelerator",
                "Artillery now branches from Pounder",
                "Cyanide now branches from Sniper Ception",
                "Auto-Engineer now branches from Auto-Builder",
                "Removed Akafuji rear indicators",
                "Changed ICBM design so it doesn&#039;t look like a hybrid",
                "Changed Trailblazer design to be consistent with Propeller",
                "Navyist branch no longer has unique upgrade stats",
                "Skimmer branch now has normal recoil",
                "Removed spawn delay from Underseers",
                "Buffed Oxyrrhexis bullet health",
                "Buffed Gondola drone speed",
                "Buffed Botanist damage",
                "Buffed Superstorm damage",
                "Buffed Multishot branch damage",
                "Buffed Doxxer offensive stats",
                "Increased Multishot branch bullet spread",
                "Reduced Musketeer trap spread",
                "Reduced Doxxer shudder",
                "Increased Doxxer drone spead",
                "Slightly nerfed Egg Prince swarm damage",
                "Gave Quadriatic Gust stats",
                "Nerfed Elite Skimmer missile health",
                "Slightly increased the amount of points elite&#039;s are worth"
              ]
            },
            {
              "type": "Update",
              "date": "January 12, 2022",
              "name": "Multitwool is the wierdest tank name",
              "content": [
                "Multitool has been released and upgrades from Auto-3",
                "Multitwool has been released and upgrades from Multitool",
                "Everdeath has been released and upgrades from Multitool",
                "Triple-2 has been released and upgrades from Twin-2",
                "Triple-3 has been released and upgrades from Twin-3 and Triple-2",
                "Hybrid Triplet has been released and upgrades from Triplet",
                "Computer has been added to beta tanks",
                "Software now upgrades from Computer"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 12, 2022",
              "name": "oh my god i&#039;m dumb",
              "content": [
                "FINALLY fixed the world record ticket system not working on modded modes (Open, Maze)",
                "Fixed the help menu looking fucked",
                "Made the nest bigger",
                "Decreased the amount of crashers and made them spawn less",
                "FFA and TDM now have the chance to have portals in their generation",
                "Made random colors in FFA more rare",
                "Fixed maze not generating properly with non-square maps",
                "Added a way to convert eroded mazes into strings",
                "Added Duos to the rotation",
                "Changed up gamemode rotation",
                "Changed the way servers are loaded"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Gamig",
              "content": [
                "Fixed bug where resetting your tank carried over stats from the tank you previously were",
                "Fixed bug where resetting from an invisible tank would make your tank have invisibility",
                "Removed the knockback from Dominator heal bullets",
                "Released Naturalist, branches off Pelleter",
                "Added Doxxer to beta (BT note: I&#039;m trying to make it level 45 now)",
                "Added Redisplatterer to Misc",
                "Coronavirus now also branches off Virus",
                "Bonkmine now also branches off Landmine",
                "Removed Overflow",
                "Removed Black Ice",
                "Buffed Sandman damage",
                "Buffed Redistributor damage",
                "Buffed Eggmancer damage",
                "Buffed Gondola drone speed",
                "Buffed Acidic Spawners acid damage",
                "Nerfed Cyclone damage",
                "Nerfed Clicker reload",
                "Nerfed Dart (Green Crasher) damage",
                "Slightly nerfed Screwgun damage "
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Unhots your fix",
              "content": [
                "Removed the hotfix category",
                "Added AI to carriers",
                "Bug fixes",
                "Fixed the hotfix below not working",
                "Added Scharnhorst to Misc. and buffed Schlieffen"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Hotfix 0.0.1",
              "content": [
                "Added a hotfix category to the changelog",
                "Fixed styles on the changelog",
                "Fixed the bot not fetching the ticket channel properly due to it not being cached"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": ":weary:",
              "content": [
                "Fixed multiple crashes",
                "Added an easy way to regenerate map features such as obstacles and mazes",
                "Fixed Tesla Crasher not actually working",
                "Buffed Japanese and American Aircraft Carriers"
              ]
            },
            {
              "type": "Update",
              "date": "January 11, 2022",
              "name": "Clientside changes",
              "content": [
                "Added a way to detect AdBlockers, and annoying persistant messages if you have an AdBlocker ;)",
                "Improved clientside performance",
                "Fixed styling with the server selector",
                "Added the mobile app tips to desktop as well"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 10, 2022",
              "name": "One of my favorites",
              "content": [
                "Added Multitool to Beta Tanks",
                "Added Toolbelt to Beta Tanks",
                "Added Everdeath to Beta Tanks",
                "Added Tesla Crasher",
                "Buffed Package Bomb",
                "Delagged and nerfed Desert Temple some more",
                "Buffed the danger value of Dominators"
              ]
            },
            {
              "type": "Gamemode",
              "date": "January 10, 2022",
              "name": "YEAH WELL IF YOU GET WITH HIS BROTHER YOU GOT YOURSELF A TAGTEAM OF AWESOMENESS",
              "content": [
                "Nerfed Spawner Dominator slightly",
                "Reworked the map generation for Domination mode",
                "Fixed bugs with maze generation in Domination",
                "Added 8TDM support for Mothership, Tag and Kill Race",
                "Nerfed Mothership body stats",
                "Made the maze in tag more dense"
              ]
            },
            {
              "type": "Update",
              "date": "January 10, 2022",
              "name": "Meta Changes",
              "content": [
                "Added Steamboat, upgrades from Propeller",
                "Buffed Swarm reload",
                "Buffed Drone damage",
                "Buffed Trap duration",
                "Nerfed Turret reload",
                "Nerfed Clone health",
                "Buffed Propeller and it&#039;s upgrades in general stats",
                "Buffed Grow bullet damage",
                "Slightly nerfed Pelleter and it&#039;s upgrades",
                "Nerfed Gunner&#039;s bullet damage",
                "Moved Particle accelerator to misc",
                "Added a new Developer and Senior upgrade",
                "Added Putt-Putt to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 9, 2022",
              "name": "Go ahead. Play boss rush. I dare you.",
              "content": [
                "Delagged Desert Temple",
                "Buffed Desert Temple",
                "Desert Temple now spawns in boss rush",
                "Cyanide has been released and upgrades from Auto-Acid",
                "Toxin and Chlorine now have Acid Aura"
              ]
            },
            {
              "type": "Update",
              "date": "January 9, 2022",
              "name": "Serious work",
              "content": [
                "Fixed home screen input bugs",
                "Fixed the slider menu",
                "Fixed the wiki naming"
              ]
            },
            {
              "type": "Update",
              "date": "January 9, 2022",
              "name": "I made a boss lol",
              "content": [
                "Careener has been released and upgrades from Bonker",
                "Bonkmine has been released and upgrades from Bonker and Landmine",
                "Added Package Bomb to beta tanks",
                "Nerfed the main cannon of Subverter, Dueteron, and Hadron",
                "Shrank Hadron&#039;s balls",
                "Added Desert Temple to the beta boss branch"
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "BEGONE FELL BEAST",
              "content": [
                "Pentaquark has been banished to the dark realm of the netherworld, where there shall be weeping and the gnashing of teeth",
                "Hadron has been hired to replace Pentaquark",
                "Added Cyanide to beta tanks",
                "Nerfed the damage of Subverter and Deuteron turrets",
                "Added Rho Sentry",
                "Pentaquark has already escaped from hell. He just walked past the guards, they couldn&#039;t do shit.",
                "Don&#039;t let him find you."
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "DAS BOOT!!!!",
              "content": [
                "Fixed the class tree",
                "Fixed a major rendering bug with Nukes, Flails and other big things when they fade",
                "The title hints at what was introduced..."
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "Join the rebellion!",
              "content": [
                "Added Revolutionist to Beta tanks",
                "Added Subverter to Beta tanks",
                "Added Deuteron to Beta tanks",
                "Added Proton to Beta tanks",
                "Added Pentaquark to Beta tanks",
                "Added Rho to Beta tanks",
                "Buffed the homing bullet speed of Frier",
                "Rebalanced Surgeon a bit",
                "Released Heat Hive, upgrades from Mini-swarmer",
                "Released Toaster, upgrades from Heat Hive",
                "Released Frier, upgrades from Heat Hive",
                "Released Hotman, upgrades from Heat Hive and Swarmer",
                "Released Metaseeker, upgrades from Heat Hive",
                "Released Auto-Acid, upgrades from Acid"
              ]
            },
            {
              "type": "Update",
              "date": "January 8, 2022",
              "name": "Giving it a purpose",
              "content": [
                "Fixed players on the TEAL team being yellow",
                "Nerfed Myriapoda&#039;s small bullets as to not have them at the same strength as Arthropoda",
                "Fixed some bugs with teams",
                "Fixed some bugs in general",
                "Fixed the AFK timeout murdering you",
                "Fixed TDM modes never having bases",
                "Open TDM modes are now more common (25% instead of 10%)",
                "Fixed maze alignment in TDM and FFA modes",
                "Made standard rooms 16x16 cells",
                "Tag now has a 16x16 maze",
                "Tripled nest food amount",
                "It&#039;s now much harder to get stuck inside walls",
                "As a result of the proper maze collision, backshield no longer launches you 50 feet away from walls",
                "Nerfed hiveminds",
                "Rewrote the room object",
                "Massive optimizations",
                "Started experimenting with Space mode again",
                "Rewrote a lot of math so that it&#039;s not so computationally heavy",
                "General optimizations to bandwidth and mockups",
                "Fixed Lancer and Flail collisions while invulnerable"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": "Killing your favorite tanks since 2021",
              "content": [
                "Released Splatterer, branches off Gleamer",
                "Released Hybrid Trapper, branches off Basebrid and Trapper",
                "Released Magician, branches off Hybrid Trapper",
                "Released Witch, branches off Magician",
                "Released Juggernaut, branches off Overlord",
                "Released Suzerain, branches off Overlord",
                "Released Thunderbolt, branches off Lightning",
                "Arras now branches from Phaser and Sidewinder instead of Navyist",
                "Slightly nerfed hivemind minion health",
                "Slightly nerfed auto turrets",
                "Nerfed Gust damage stats",
                "Nerfed Punt Gun recoil",
                "Nerfed Decimator recoil",
                "Nerfed Ranger reload"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": "I hate sand",
              "content": [
                "Smashception has been released and upgrades from Smasher",
                "Mineception has been released and upgrades from Landmine and Smashception",
                "Spikeception has been released and upgrades from Spike and Smashception",
                "Coiffure has been released and upgrades from Smashception",
                "Nightgaunt has been released and upgrades from Landmine",
                "Added Sandbender to Beta tanks",
                "Added Mamba to Beta tanks",
                "Added Desert Nuke to Beta tanks",
                "Added Tomb Raider to Beta tanks",
                "Nerfed the reload of Surgeon and Nanite some more"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": ". this update was really painful .",
              "content": [
                "Reworked Maze Generation",
                "Fixed Maze Wall scaling",
                "Fixed Maze Wall grouping",
                "Optimizations to entities",
                "Optimizations to bandwidth",
                "Fixed the AFK timeout"
              ]
            },
            {
              "type": "Update",
              "date": "January 7, 2022",
              "name": "I&#039;ll teach Gust a lesson",
              "content": [
                "Nerfed Gust&#039;s bullet damage by a ton",
                "Slightly nerfed pelleter and it&#039;s upgrades",
                "Fixed some branch issues",
                "Nerfed dustbowl&#039;s reload",
                "Fixed particle accelerator&#039;s delay",
                "Doubled Particle Accelerator&#039;s explosion health",
                "Added Apprentice to Beta Tanks",
                "Added Overload to Beta Tanks",
                "Added Submarine to Beta Tanks",
                "Added Sonar to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "Acidmaggendon",
              "content": [
                "Acid has been released and upgrades from Sniper",
                "Mercury has been released and upgrades from Acid",
                "Disintegrator has been released and upgrades from Acid",
                "Formaldehyde has been released and upgrades from Acid and Minigun",
                "Saltsower has been released and upgrades from Formaldehyde and Cropduster",
                "Chlorine has been released and upgrades from Formaldehyde and Streamliner",
                "Iocane has been released and upgrades from Formaldehyde",
                "Smoker has been released and upgrades from Acid and Fume",
                "Acid Trapper has been released and upgrades from Trapper",
                "Biologist has been released and upgrades from Acid Trapper and Dual Trapper",
                "Biocontainment has been released and upgrades from Biologist, Formaldehyde, and Barricade",
                "Rat poison has been released and upgrades from Acid Trapper and builder",
                "Coronavirus has been released and upgrades from Acid Trapper and Virus",
                "Added Ryzen to beta tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "No school tomorrow yay",
              "content": [
                "Reworked maze generation slightly",
                "Nerfed Taser",
                "Buffed body stats",
                "Buffed Sentries",
                "Nerfed Crashers",
                "Buffed Banshee&#039;s turret and body FOV",
                "Nerfed Meta drones",
                "Nerfed the Auto-2 Branch",
                "Banshee now branches off of Auto-3",
                "Started experimenting with the Maze Portal TDM mode"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "I&#039;m double alive I promise",
              "content": [
                "Added Deluxe which upgrades from VIP",
                "Added Overluxe which upgrades from Deluxe",
                "Buffed Punt gun and it&#039;s upgrades",
                "Nerfed Gust",
                "Buffed Swarm reload again",
                "Man O&#039; War now has a tool tip to shoot with right click",
                "Added Dustbowl to Beta Tanks",
                "Added Software to Beta Tanks",
                "Added Probationer to Beta Tanks",
                "Buffed Particle Accelerator&#039;s reload by a ton",
                "Particle Accelerator now shoots a Particle with right click"
              ]
            },
            {
              "type": "Update",
              "date": "January 6, 2022",
              "name": "I&#039;m still alive I promise",
              "content": [
                "Rebalanced Man O&#039; War and it&#039;s upgrades",
                "Buffed Swarm reload",
                "Buffed Flank and it&#039;s upgrades",
                "Buffed Swarm Guard and it&#039;s upgrades",
                "Added Particle Accelerator to Beta Tanks",
                "Added Steamboat to Beta Tanks",
                "Added Fabricator to Beta Tanks",
                "Added Zephyr to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 5, 2022",
              "name": "Never start a land war in Asia!",
              "content": [
                "Grudge has been redecorated",
                "Nerfed the reload and bulled damage of Grudge",
                "Buffed the smackiness of Grudge&#039;s flails",
                "Nerfed the bullet health and damage of all acid snipers",
                "Nerfed the reload of Surgeon and Nanite",
                "Nerfed all surgeon studs a tiny bit",
                "Made Trios and Sandbox less common",
                "Pasted in some code that zed gave me idk wat it does",
                "Added Nightgaunt to beta tanks",
                "Added Iocane to beta tanks. It upgrades from Formaldehyde"
              ]
            },
            {
              "type": "Update",
              "date": "January 4, 2022",
              "name": "Vengeance!",
              "content": [
                "Buzzsaw has been released and upgrades from Spike",
                "Toxin has been released and upgrades from Spike",
                "Gigasmasher has been released and upgrades from Megasmasher",
                "Coiffure has recieved a damage buff",
                "Added Bonkmine to beta tanks",
                "Added Grudge to beta tanks",
                "Added Sandman to misc"
              ]
            },
            {
              "type": "Update",
              "date": "January 4, 2022",
              "name": "I hate Glitch&#039;s new editor",
              "content": [
                "Buffed body stats",
                "Fixed branch errors with the class tree",
                "Fixed not being able to spectate other players in Groups modes",
                "Fixed the &#039;seeInvisible&#039; aiSetting property not working",
                "Smasher Closer can no longer spawn",
                "Fixed team balancing, teams will now attempt to have the same amount of bots and players on them",
                "Deceased players now count towards a team&#039;s player count, preventing people from dying and allowing 50 bots on a team",
                "Reworked maze generation"
              ]
            },
            {
              "type": "Update",
              "date": "January 4, 2022",
              "name": "Spencer release shit",
              "content": [
                "Released Dogfighter, branches off Fighter",
                "Released Trappory, branches off Spawner",
                "Released Contagiory, branches off Trappory",
                "Added Hybrid Trapper to beta",
                "Added Magician to beta, branches off Hybrid Trapper",
                "Added Witch to beta, branches off Magician",
                "Overtrapper now also branches off Hybrid Trapper",
                "Nerfed Swarmer class reload",
                "Nerfed Screwgun penetration",
                "Buffed hive reload",
                "Buffed Pelleter damage",
                "Reduced Musketeer spread"
              ]
            },
            {
              "type": "Update",
              "date": "January 3, 2022",
              "name": "Topping off all the smasher branches",
              "content": [
                "Decimator has been released and upgrades from Annihilator",
                "Cropduster has been released and upgrades from Minigun",
                "Hyliner has been released and upgrades from Cropduster and Streamliner",
                "Flailception has been released and upgrades from Auto-Flail",
                "Bulwark has been released and upgrades from Trapper Flank",
                "Smashception and Coiffure have recieved a large buff to health and body damage",
                "Nerfed the speed of Bonker and Careener slightly",
                "Added Spikeception to beta tanks",
                "Added Mineception to beta tanks",
                "Added Buzzsaw to beta tanks",
                "Added Toxin to beta tanks",
                "Added Gigasmasher to beta tanks"
              ]
            },
            {
              "type": "Update",
              "date": "January 3, 2022",
              "name": "I&#039;m not original",
              "content": [
                "Added Fungi to Beta",
                "Added Trappory to Beta",
                "Added Contagiory to Beta, branches off Trappory",
                "Added Propellery to Beta",
                "Added Airport to Beta, branches off Propellery",
                "Added Navalist to Beta",
                "Added Captain to Beta, branches off Navalist",
                "Nerfed Ranger reload",
                "Nerfed Tri-Angle branch thruster damage",
                "Buffed Punt Gun offensive stats",
                "Buffed Bandolier offensive stats",
                "Nerfed the bullet size of Oxyrrhexis by one trillionth of one percent"
              ]
            },
            {
              "type": "Update",
              "date": "January 2, 2022",
              "name": "The biggest and the smallest",
              "content": [
                "Oxyrrhexis has been released and upgrades from Annihilator and Astronaut",
                "Ragnar has been released and upgrades from Ranger and Gunner Trapper",
                "Auto-Engineer has been released and upgrades from Engineer",
                "Hybrid Engineer has been released and upgrades from Engineer",
                "Added Careener to Beta tanks",
                "Added Smashception to Beta tanks",
                "Added Coiffure to Beta tanks",
                "Added Flail Ception to Beta tanks",
                "Nerfed the acid of the Formadehyde branch",
                "Nerfed the bullet size of Oxyrrhexis by one billionth of one percent"
              ]
            },
            {
              "type": "Update",
              "date": "January 2, 2022",
              "name": "Oxy is less OP now",
              "content": [
                "Added Saltsower to Beta tanks",
                "Added Metaseeker to Beta tanks",
                "Nerfed Oxy reload, damage, and bullet health",
                "Nerfed Surgeon stud damage and health by 30%",
                "Zamboni now upgrades from Rifle at lvl 60",
                "Poison Dart has been banished to Misc untill I can fix it",
                "Deliverance has been renamed to Medkit"
              ]
            },
            {
              "type": "Update",
              "date": "January 1, 2022",
              "name": "New year new tonkz",
              "content": [
                "Added Suzerain to Beta",
                "Added Overflow to Beta",
                "Added Juggernaut to Beta",
                "Added Thunderbolt to Beta",
                "Buffed Gondola drone speed",
                "Buffed Emplacement swarm reload",
                "Nerfed Decimator speed",
                "Nerfed Splatterer ring damage",
                "Slightly nerfed Gleamer jump reload",
                "Nerfed Acidic Spawner&#039;s minion acid damage "
              ]
            },
            {
              "type": "Update",
              "date": "January 1, 2022",
              "name": "New year new tonkz",
              "content": [
                "Man O&#039; War has been released and upgrades from Tri-Angle and Pounder",
                "Jellyfish has been released and upgrades from Man O&#039; War and Swarmer",
                "Warfare has been released and upgrades from Man O&#039; War and Fighter",
                "Betelguese has been released and upgrades from Man O&#039; War and Gleamer",
                "Ambassador has been released and upgrades from Man O&#039; War and Destroyer",
                "Fume has been released and upgrades from Sniper and Inferno",
                "Zamboni has been released and upgrades from Fume",
                "Fumigator has been released and upgrades from Fume",
                "Dual Trapper has been released and upgrades from Trapper",
                "Barricade has been released and upgrades from Dual Trapper and Minigun",
                "Deluge, Bridicade, and Auto-Barricade have been released and upgrade from Barricade",
                "Cat O&#039; Nine Tails has been released and upgrades from Marner",
                "Bushwhacker has been released and upgrades from Sniper and Trap Guard",
                "Warden and Hybrid Ranger have been released and upgrade from Ranger",
                "Megaswarmer has been released and upgrades from Swarmer",
                "Smotherer has been released and upgrades from Streamliner",
                "Smotherer has been mildly nerfed"
              ]
            },
            {
              "type": "Update",
              "date": "January 1, 2022",
              "name": "HAPPY NEW YEAR!!!",
              "content": [
                "Surgeon has been altered to better match its old design",
                "Heat Hive has been adjusted to better match Sharpener",
                "Added Treppaner to beta tanks",
                "Added Scalpel to beta tanks",
                "Added Deliverance to beta tanks",
                "Added Fungalmancer to beta tanks",
                "Added EMT to beta tanks",
                "Added Toaster to beta tanks",
                "Added Frier to beta tanks",
                "Added Hotman to beta tanks",
                "Added Manipulator to beta tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 31, 2021",
              "name": "Happy new year",
              "content": [
                "Fixed bugs with the new protocol",
                "Optimized bandwidth usage",
                "Added a bandwidth monitor to the debug menu",
                "Nerfed sentries a lot, fixing a mistake that caused them to be OP",
                "Made the map bigger",
                "Redid gamemode shuffling",
                "FFA has a 20% chance of having random colors"
              ]
            },
            {
              "type": "Update",
              "date": "December 31, 2021",
              "name": "No there isn&#039;t I killed the doctor.",
              "content": [
                "You now respawn with a portion of your score",
                "You have a chance of spawning from a factory in TDM modes",
                "Optimized drones and fixed balancing issues with the Moderator and Maleficitor tanks",
                "Nerfed drone damage and speed slightly",
                "Rebalanced Maleficitor",
                "Nerfed the Underseer branch",
                "Nerfed Snipers",
                "Nerfed Tri-Angle branch front guns",
                "Buffed and released Vulcan, branches off of Gunner",
                "Rebalanced Sentries",
                "Fixed Artificialist&#039;s design",
                "Disabling Fancy Animations now also improves the frame rate"
              ]
            },
            {
              "type": "Update",
              "date": "December 31, 2021",
              "name": "Is there a doctor in the house?",
              "content": [
                "Reverted Warden reload",
                "Nerfed Man O&#039; War branch side bullet damage",
                "Added Surgeon to Beta Tanks",
                "Added Nanite to Beta tanks",
                "Added Heat Hive to Beta tanks",
                "Added Studlayer to misc for later use"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "Warm butter",
              "content": [
                "Added Cropduster to Beta",
                "Added Hyliner to Beta, branches off Cropduster",
                "Added Bridicade to Beta, branches off Cropduster and Barricade",
                "Added Auto-Barricade, branches off Barricade",
                "Added Splatterer to Beta"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "The time has come my fellow deciples!",
              "content": [
                "Added Oxyrrhexis to Beta Tanks",
                "I would say it&#039;s as OP as it used to be, except it&#039;s actually way, WAY more OP",
                "Added Chlorine to Beta Tanks",
                "Added tooltip to Poison Dart"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "NEPH YOU FUCKING SUCK AT CODING",
              "content": [
                "Fixed AI"
              ]
            },
            {
              "type": "Update",
              "date": "December 30, 2021",
              "name": "just a quicky (:lenny:)",
              "content": [
                "Reworked how mockups are loaded"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "Why do I work full time",
              "content": [
                "Buffed Warden reload",
                "Nerfed reload of all Formaldehyde tanks",
                "Added Smotherer to Beta Tanks",
                "Added Rat Poison to Beta Tanks",
                "Added Icebox to Beta Tanks",
                "Added Poison Dart to Beta Tanks. it&#039;s kinda broke but I&#039;ll deal with that later lol",
                "I also added acid streamliner but I forgot to add upgrade path. Sorry no time lol goodnight."
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "Yes, am lazy",
              "content": [
                "Added Auto-Engineer to Beta",
                "Added Hybrid Engineer to Beta",
                "Added Frost Trapper to Beta",
                "Added Black Ice to Beta, branches off Frost Trapper",
                "Added Avalanche to Beta, branches off Barricade",
                "Added Pergola to Beta, Branches off Gondola",
                "Added Hybrid Ranger to Beta",
                "Nerfed Barricade reload"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "SJGIHIUFHEGHE IAHDGOFHO AEIIFH ",
              "content": [
                "Staff, Resigned Staff and Former Developers can join the #c (Closed Beta) server with a token from the $c claim command",
                "Added Single to Beta Tanks",
                "Added Twingle, branches off of Single",
                "Added Mingle, branches off of Single",
                "I&#039;ll be taking some time off, due to how hard it was to name these tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "AAAAHHHHHH",
              "content": [
                "Reworked and rebalanced status effects",
                "Added EMP effect, stops you from shooting for a period of time",
                "Added Tesla effect, deals damage to you if you get close to it",
                "Added EMP to Beta Tanks",
                "Added Tesla to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 29, 2021",
              "name": "OK SO LISTEN UP FUCKERS",
              "content": [
                "Double Whammy is no longer a Beta Tank and now branches off of Reacher and Marner",
                "Reworked all stats to make the game more balanced",
                "Fixed bullets having too much variation and spread",
                "Changed the map in #c"
              ]
            },
            {
              "type": "Update",
              "date": "December 28, 2021",
              "name": "How did I get here",
              "content": [
                "Added Emplacement to Beta",
                "Added Enforcement to Beta, branches off Emplacement",
                "Cried",
                "Renamed Obliterator to Decimator",
                "Nerfed Decimator bullet speed, health, and penetration",
                "Nerfed Mega Swarmer reload",
                "Nerfed Gondola drone speed",
                "Fixed a visual issue with Artificialist"
              ]
            },
            {
              "type": "Update",
              "date": "December 28, 2021",
              "name": "Pain",
              "content": [
                "Buffed Fume backflares",
                "Added Warden to Beta Tanks",
                "Added Chillbrid to Beta Tanks",
                "Added Overchill to Beta Tanks",
                "Added Mortal Chill to Beta Tanks",
                "Added Formaldehyde to Beta Tanks",
                "Added Biocontainment to Beta Tanks",
                "Added Double Whammy to Beta Tanks",
                "Added Cat O&#039; Nine Tails to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 28, 2021",
              "name": "We&#039;ve had a disappointingly low amount of snow this year... :(",
              "content": [
                "Buffed Twister&#039;s mini bullets while nerfing it&#039;s main bullet",
                "Buffed Rocketeer",
                "Gave Twister a tooltip for its special ability",
                "Added Ordnance, branches off of Artillery",
                "Added Beekeeper, branches off of Hunter and Artillery",
                "Nerfed Sentries",
                "Added Caltrop, branches off of Quad Trapper and Builder",
                "Added Gunner Cruiser, branches off of Cruiser and Gunner",
                "Added Bonker, branches off of Smasher",
                "Added Fortress, branches off of Quad Trapper and Cruiser",
                "Added Palisade, branches off of Spawner and Quad Trapper",
                "Bullet bots no longer upgrade to Smasher and Lancer",
                "Added custom Lancer AI",
                "Inferno is no longer a Beta Tank and branches off of Machine Gun and Sniper",
                "Sharpener is no longer a Beta Tank and branches off of Twister",
                "Hybrado is no longer a Beta Tank and branches off of Cruiser",
                "Gridlock is no longer a Beta Tank and branches off of Necromancer",
                "Musketeer is no longer a Beta Tank and branches off of Multishot and Trapper",
                "Rimfire is no longer a Beta Tank and branches off of Gunner"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": "Back at it again",
              "content": [
                "Added Dual Trapper to Beta",
                "Added Deluge to Beta, branches off Barricade",
                "Added Obliterator to Beta",
                "Nerfed Bomb Reload",
                "Nerfed Bomb Damage",
                "Buffed Bomb shrapnel damage",
                "Increased Nuclear Bomb bullet size",
                "Rotated the indicator for Acid Traps"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": "2020 be like",
              "content": [
                "Zamboni is now a Rifle like its original design",
                "Added Fumigator to Beta Tanks",
                "Added Acid Trapper to Beta Tanks",
                "Added Coronovirus to Beta Tanks",
                "Added Cryobomb to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": "Hi",
              "content": [
                "You now flash when you&#039;re invulnerable",
                "You now get invulnerability for 30 seconds when exiting a portal",
                "When you spawn, you get invulnerability for 60 seconds",
                "Fixed bugs with portals",
                "Added Vulcan to Beta Tanks",
                "Added Taser to Beta Tanks",
                "Added Rimfire to Beta Tanks",
                "Added Barricade to Beta Tanks",
                "Added Bulwark to Beta Tanks",
                "Added Bushwhacker to Beta Tanks",
                "Added Constructor, branches off of Builder",
                "Added Conqueror, branches off of Builder",
                "Added Cyclone, branches off of Gunner and Hexa",
                "Added an experimental Tank Editor for Developers only, this allows us to edit tanks and balance things on the fly without having to restart the server"
              ]
            },
            {
              "type": "Update",
              "date": "December 27, 2021",
              "name": ":)",
              "content": [
                "The player cap for sandbox mode is now 35",
                "The default player cap is now 20",
                "Optimized AI and controllers",
                "Optimized loops",
                "Optimized socket stuff",
                "Added tank recovery, if you disconnect, reconnect quickly to get your tank back!",
                "Boss Rush waves are organized by amount and difficulty",
                "Made Boss Rush more fun (more bosses)"
              ]
            },
            {
              "type": "Update",
              "date": "December 26, 2021",
              "name": "Fumin&#039;",
              "content": [
                "Added Fume to Beta Tanks",
                "Added Smoker to Beta Tanks",
                "Added Zamboni to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 26, 2021",
              "name": "So you may have noticed....",
              "content": [
                "Reworked how servers are loaded.",
                "All Heroku hosted servers now have a schedule, which means that two days a week, they will not be accessible, this will mean we won&#039;t lose servers at the end of the month",
                "Added a #c server for my experimenting, this is only public when I want it to be"
              ]
            },
            {
              "type": "Update",
              "date": "December 25, 2021",
              "name": "Merry Christmas to all, and to all a good fight",
              "content": [
                "Added Man O&#039; War to Beta Tanks",
                "Added Ambassador to Beta Tanks",
                "Added Jellyfish to Beta Tanks",
                "Added Betelguese to Beta Tanks",
                "Added Warfare to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 25, 2021",
              "name": "So Winter Rush was too easy, in my opinion",
              "content": [
                "Buffed the base Health of Eternals",
                "Buffed Thor",
                "Buffed and reworked Nyx",
                "Buffed Oceanus",
                "Made some of the later waves harder in Boss Rush",
                "Attempted to rework boss orbiting",
                "Fixed boss aiming in Boss Rush when they are moving to waypoints",
                "Bots are more brave",
                "Sentries are now targeted by AI with priority over Polygons",
                "Nerfed Polygon pushability",
                "Nerfed Lancers due to them being so fucking busted",
                "Rebalanced Traps and Minion density/pushability",
                "Made the Upgrade menu smaller",
                "Added Machine Gunner, branches off of Gunner and Artillery",
                "Minishot now branches off of Basic",
                "Lancer now branches off of Basic",
                "Moved Winter Rush to #ha"
              ]
            },
            {
              "type": "Update",
              "date": "December 24, 2021",
              "name": "Before I go",
              "content": [
                "Released Gleamer, branches off Tri-Angle",
                "Released Pulsejet, branches off Gleamer",
                "Released Jabber, branches off Puncher",
                "Released Elamnecro, branches off Necromancer",
                "Released Heavy Shotgun, branches off Shotgun",
                "Slightly increased Shotgun bullet spread"
              ]
            },
            {
              "type": "Update",
              "date": "December 24, 2021",
              "name": "Merry Christmas everyone I hope you know you&#039;re appreciated!",
              "content": [
                "Reworked the map in Boss Rush",
                "Reworked boss spawning mechanics in Boss Rush",
                "Gave bosses better AI in Boss Rush",
                "Bots now attempt to defend sanctuaries in Boss Rush",
                "AI Captured Sanctuaries no longer fight back",
                "Played around with body damage and health for weapons and bosses",
                "Nerfed Sentries and Nest Defenders",
                "Added Nyx, a new Eternal",
                "Added Pontus, a new Celestial",
                "Added Hades, a new Celestial",
                "Rebalanced Dominator body stats",
                "Fixed message clogging"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "I&#039;m dev now what",
              "content": [
                "Added Bloodcurdler to beta tanks. It upgrades from Marner and Mace",
                "That&#039;s it lol"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "I&#039;m z46, not Oblivion",
              "content": [
                "Added a /help page, this also includes instructions on how to install the game as an app",
                "Fixed issues with Demeter&#039;s top turrets",
                "Buffed body damage and nerfed health",
                "Added Turkey",
                "Removed part of the map of Boss Rush",
                "Gave Dominators in Boss Rush healing turrets",
                "Fixed bugs with healing bullets making your health go really high",
                "Buffed Crashers",
                "Nerfed Sentries and Nest Defenders",
                "Added a Server Overloaded feature if the servers get too stressed out",
                "The server speed is now measured in mspt (Ms per tick)",
                "Heavy entity optimizations"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "Rebranding",
              "content": [
                "Woomy is being renamed to Tanon.io.",
                "This is because we love Tanks and Kannon."
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "SOOOOOOOOOOOOOOOOOOOOOOOOOOO",
              "content": [
                "Sterilizer is now spawnable in Boss Rush",
                "All the Eternals are now possible final Bosses in Boss Rush",
                "You only get one final boss, instead of all of them. Fixed the minimap in sandbox mode"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "Things that should just exist",
              "content": [
                "Added Penta Machine to Beta",
                "Added Mega Swarmer to Beta",
                "Added Jabber to Beta",
                "Added Elamnecro to Beta",
                "Added Gondola to Beta",
                "Slightly nerfed Aggressor reload",
                "Buffed Underseer reload",
                "Underseer classes no longer have recoil",
                "Engineer now also branches off Arsenal"
              ]
            },
            {
              "type": "Update",
              "date": "December 23, 2021",
              "name": "WERQYT",
              "content": [
                "Added Mythical Crasher",
                "Added Hellbringer",
                "Added Tetraplex",
                "Moved some bosses to Developer Bosses"
              ]
            },
            {
              "type": "Update",
              "date": "December 22, 2021",
              "name": "The World Serpent",
              "content": [
                "Added JÃ¶rmungandr, snake-like boss that circles and then stabs you with flails."
              ]
            },
            {
              "type": "Update",
              "date": "December 22, 2021",
              "name": "GUESS WHO&#039;S BACK",
              "content": [
                "Added Dogatorix",
                "Gave Dogatorix Permissions for Abuse"
              ]
            },
            {
              "type": "Update",
              "date": "December 20, 2021",
              "name": "OH MY GOD",
              "content": [
                "Added Legendary Crasher",
                "Added Sacred Crasher",
                "Added Legendary Quadral Machine",
                "Added Catalyst",
                "Added EK-6",
                "Added Sun King",
                "Added Hexadecimator",
                "Added Heptadecimator"
              ]
            },
            {
              "type": "Update",
              "date": "December 20, 2021",
              "name": "AUGH",
              "content": [
                "Boss Rush has been updated with more, rare and powerful bosses. As a surprise, I won&#039;t tell you what they are yet :)"
              ]
            },
            {
              "type": "Update",
              "date": "December 20, 2021",
              "name": "Smash me daddy",
              "content": [
                "Nerfed Smasher",
                "Added Spike, branches off of Smasher",
                "Added Mega Smasher, branches off of Smasher",
                "Added Landmine, branches off of Smasher",
                "Added Ninja Star, branches off of Smasher",
                "Added Auto-Smasher, branches off of Smasher"
              ]
            },
            {
              "type": "Update",
              "date": "December 19, 2021",
              "name": "AEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
              "content": [
                "Fixed bugs with and balanced Lancer, and moved it to Beta Tanks",
                "Added Flail, branches off of Lancer",
                "*inhales*",
                "Added Marner, branches off of Flail",
                "Added Mace, branches off of Flail",
                "Added Reacher, branches off of Flail",
                "Added Flangle, branches off of Flail",
                "Added Auto-Flail, branches off of Flail",
                "Added Nossle, branches off of Mace",
                "Added HongKongLongDong, branches off of Reacher",
                "Added Windmill, branches off of Marner",
                "Added Fidget Spinner, branches off of Marner",
                "Added Akafuji, branches off of Lancer",
                "Added Saboten, branches off of Akafuji",
                "Added Vessle, branches off of Akafuji",
                "Added Slipknot to Beta Tanks",
                "Added Ragnar to Beta Tanks",
                "Tooltips are now more accurate for mobile users, stating to Double Tap rather than Right-Click",
                "Reverted #wa to Sandbox mode"
              ]
            },
            {
              "type": "Update",
              "date": "December 19, 2021",
              "name": "Fast things go brr",
              "content": [
                "Added Pulsejet to Beta Tanks, branches off Gleamer",
                "Added Dogfighter to Beta Tanks",
                "Nerfed Arsenal",
                "Nerfed Musketeer",
                "Increased multishot branches spread",
                "Increased multishot branches reload",
                "Buffed Gleamer jump",
                "Beta Tanks now automatically go to tier 5"
              ]
            },
            {
              "type": "Update",
              "date": "December 18, 2021",
              "name": "So you&#039;re qualified for this job? Yes I just got out of Yale. That&#039;s great! Oh yeah your wife has a huge rack man. HEY!! HEY MAN LEARN TO TAKE A YOKE!!!",
              "content": [
                "Fixed issues with Arena Closing in Sandbox mode",
                "Readded Infection to the gamemode randomizer",
                "The #wa server can now be any gamemode",
                "Various Beta Tank balance changes",
                "Added Mercury, branches off of Acid",
                "Added Paralyzer, branches off of Chiller",
                "Added Blizzard, branches off of Chiller",
                "Added Frostbite, branches off of Acid and Chiller"
              ]
            },
            {
              "type": "Update",
              "date": "December 18, 2021",
              "name": "12/18/21 or something idfk",
              "content": [
                "Added Foam Gun to Beta Tanks",
                "Added Bubble Gun, branches off of Foam Gun",
                "Added Sponge, branches off of Bubble Gun",
                "Added Corroder, branches off of Bubble Gun",
                "Added Bomb, branches off of Foam Gun",
                "Added Nuclear Bomb, branches off of Bomb",
                "Added Sparkler, branches off of Foam Gun",
                "Added Crackler, branches off of Sparkler",
                "Added Flamethrower, branches off of Foam Gun",
                "Added Courser, branches off of Flamethrower",
                "Buffed the drone count of the Manager branch to 8"
              ]
            },
            {
              "type": "Update",
              "date": "December 17, 2021",
              "name": "lmao I do my job",
              "content": [
                "Reworked Sharpener",
                "Buffed Inferno",
                "Motor is no longer a Beta Tank and upgrades off of Director",
                "Manager is no longer a Beta Tank and upgrades off of Director",
                "Maleficitor is no longer a Beta Tank and upgrades off of Underseer",
                "Bent Boomber is no longer a Beta Tank and upgrades off of Boomer",
                "Redistributor is no longer a Beta Tank and upgrades off of Annihilator",
                "Scaler is no longer a Beta Tank and upgrades off of Rifle and Spreadling",
                "Added Scattergun, branches off of Spreadshot",
                "Added Heptashot, branches off of Pentashot",
                "Added Acid, Chiller and Desintegrator to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 17, 2021",
              "name": "Whatever, *Un-betas your beta things*",
              "content": [
                "Blaster is no longer a Beta Tank, and upgrades off of Machine",
                "Heptatrapper is no longer a Beta Tank, and upgrades off of Quad Trapper",
                "Zeppelin is no longer a Beta Tank, and upgrades off of Basicception",
                "Basic Ceptionist is no longer a Beta Tank, and upgrades off of Basic",
                "Smasher is no longer a Beta Tank, and upgrades off of Basic"
              ]
            },
            {
              "type": "Update",
              "date": "December 14, 2021",
              "name": "Beta things, whatever",
              "content": [
                "Added Gridlock to Beta Tanks",
                "Added Heavy Shotgun to Beta Tanks",
                "Added Musketeer to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 13, 2021",
              "name": "Am alive",
              "content": [
                "Added Industrialist; upgrades from Factory",
                "Added Arsenal to Beta Tanks",
                "Added Gleamer to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "December 12, 2021",
              "name": "omg belial is so fucking hot",
              "content": [
                "Added HMS Illustrious, a British carrier",
                "Added Mind Controller to Beta Tanks",
                "Balance Changes to Naval Ships",
                "Aggressor is no longer a Beta Tank and branches off of Predator",
                "Falcon is no longer a Beta Tank and branches off of Accelerator and Assassin",
                "Split is no longer a Beta Tank and branchess off of Penta Shot",
                "Gust is no longer a Beta Tank and branchess off of Spread Shot",
                "Master is no longer a Beta Tank and branches off of Overseer",
                "Backshield is no longer a Beta Tank and branches off of Flank Guard"
              ]
            },
            {
              "type": "Update",
              "date": "December 10, 2021",
              "name": "HEY IT IS NERFED BY ITS AVERAGE RELoAD I SWEAr",
              "content": [
                "Added Japanese Carriers",
                "Added Petropavlovsk",
                "Crashers, sentries and nest defenders no longer die on maze walls"
              ]
            },
            {
              "type": "Update",
              "date": "December 9, 2021",
              "name": "moblre",
              "content": [
                "Added more accessability for mobile mode, press the button in the bottom left corner to toggle"
              ]
            },
            {
              "type": "Update",
              "date": "December 7, 2021",
              "name": "Back to normalities, I guess...",
              "content": [
                "Reenabled normal gamemode shuffling",
                "Fixed bugs with the party link system not working",
                "You can no longer create a sandbox room by ID, it is set for you. You can still join with party links however",
                "You can now right click on mobile by double tapping on the righthand side of your screen",
                "Fixed numerous bugs with Aircraft Carriers on mobile"
              ]
            },
            {
              "type": "Update",
              "date": "December 5, 2021",
              "name": "So I stopped being lazy and unorganized",
              "content": [
                "Buffed Anti Aircraft firepower (again)",
                "Added more American carriers",
                "Added more Soviet carriers",
                "Reworked the stats of ALL carriers",
                "Added British carriers"
              ]
            },
            {
              "type": "Update",
              "date": "December 4, 2021",
              "name": "Action Stations!",
              "content": [
                "Buffed Anti Aircraft firepower",
                "Reworked how carriers launch planes",
                "Slightly nerfed American rockets",
                "Gave everything proper branches in Naval Ships",
                "Slightly nerfed Wesser due to it being OP",
                "Added Russian Carriers"
              ]
            },
            {
              "type": "Update",
              "date": "November 29, 2021",
              "name": "OMG MOBILE WORKS I&#039;M SO HAPPY HJHGFREHRFEHRUI",
              "content": [
                "Made the home menu work better on mobile",
                "Sandbox rooms now close once all players are disconnected",
                "Reworked the scale of food rarity, and doubled the rarity of green shapes",
                "Fixed the majority of bugs with mobile mode",
                "Removed the digital ocean server from the list",
                "Minimaps in sandbox are now accurate and only display things in the room they are bound to"
              ]
            },
            {
              "type": "Update",
              "date": "November 28, 2021",
              "name": "Uh oh.",
              "content": [
                "Re-added Elite Director and re-designed it, currently unspawnable",
                "Added a Rammer Sentry, currently unspawnable",
                "Added Scalene Triangles and Rhombuses",
                "Added a Pebble rock type",
                "Removed Industrian"
              ]
            },
            {
              "type": "Update",
              "date": "November 26, 2021",
              "name": "i may regrt this",
              "content": [
                "Fixed bugs with Sandbox mode",
                "Added a server selector"
              ]
            },
            {
              "type": "Update",
              "date": "November 26, 2021",
              "name": "So I made some uh, &#039;quality of life&#039; improvements",
              "content": [
                "Reworked the base Density, Pushability and Penetration of all entities",
                "Buffed Smasher",
                "Made Mothership slightly smaller",
                "Reworked gamemode generation",
                "Slightly changed gamemode codes",
                "Many gamemodes now have Open and Maze modes",
                "Added Sandbox mode",
                "Added a new server at #wa"
              ]
            },
            {
              "type": "Update",
              "date": "November 25, 2021",
              "name": "I hade a lovely hike",
              "content": [
                "Added a way to create custom arenas using the maze generator",
                "Reworked maze wall collision physics, they are no longer hugely bouncy",
                "Boss Rush now has a custom arena",
                "Fixed issues with spawning in bases controlled by the bosses in Boss Rush",
                "You cannot spawn if you have no bases in boss rush",
                "Added a lose condition in Boss Rush, similar to arras.io siege"
              ]
            },
            {
              "type": "Update",
              "date": "November 25, 2021",
              "name": "ok gonna spend time with family lol",
              "content": [
                "Made the #how-to-play status embeds better"
              ]
            },
            {
              "type": "Update",
              "date": "November 24, 2021",
              "name": "So I got bored",
              "content": [
                "Added EK-3 to X-K-X Bosses",
                "Added EK-4 to X-K-X Bosses",
                "Added EK-5 to X-K-X Bosses",
                "Added TK-1 to X-K-X Bosses",
                "Added TK-2 to X-K-X Bosses",
                "Added TK-3 to X-K-X Bosses",
                "Colony now branches off of Director",
                "Rebalanced Redistributor",
                "Buffed Smasher",
                "Added Master to Beta Tanks"
              ]
            },
            {
              "type": "Update",
              "date": "November 21, 2021",
              "name": "WW91J3JlIGEgZnVja2luZyBuZXJkLiBHZXQgYSBsaWZl",
              "content": [
                "Reworked food spawning and chances",
                "Fixed various bugs",
                "Added Zeppelin to Beta Tanks",
                "Added Giffard, branches off of Zeppein",
                "Added Hindenburg, branches off of Zeppelin"
              ]
            },
            {
              "type": "Update",
              "date": "November 21, 2021",
              "name": "There&#039;s a real lake called &#039;El Lago Titikaka&#039; in South America",
              "content": [
                "Added Senior-Tester",
                "Nerfed Dominator health by ~8.334%",
                "You can no longer upgrade skill points on dominators",
                "Added Center Control mode! Keep members of your team in the center zone of the map to gain points!"
              ]
            },
            {
              "type": "Update",
              "date": "November 20, 2021",
              "name": "Absol likes to censor my changelogs. Watch: FUCK (Part Two)",
              "content": [
                "Made the start menu more compatible with mobile",
                "Fixed bugs with the IOS downloadable version. (Add the page to the home screen)",
                "Moved all launcher branch tanks in Developer branches to playable tanks as they are balanced",
                "Biohazard is now public and branches off of Arthropoda",
                "Trapswarmer is now public and branches off of Mini Swarmer",
                "Hivemind is now public and branches off of Spawner",
                "Auto-Basic is now public and branches off of Basic",
                "Added Drone Dominator",
                "Added Steamroller Dominator",
                "Added Crockett Dominator",
                "Added Spawner Dominator",
                "Added Auto-Dominator",
                "Added OctoceptionistÂ² to Overdone Tanks",
                "Added PentaceptionistÂ² to Overdone Tanks",
                "Added FighterceptionistÂ² to Overdone Tanks",
                "Added more Arena Closers"
              ]
            },
            {
              "type": "Update",
              "date": "November 20, 2021",
              "name": "So what if we ate the world? (Part One)",
              "content": [
                "Reworked Lucrehulk entirely, and made it a special boss in Boss Rush",
                "Nerfed Nest Defenders",
                "Nerfed the EK-X bosses",
                "Added a developer branch to take care of X-K-X bosses",
                "Added a developer branch to take care of overdone tanks",
                "Added MK-1 to X-K-X Bosses",
                "Added MK-2 to X-K-X Bosses",
                "Added MK-3 to X-K-X Bosses",
                "Added Paner to Misc",
                "Added Rose to Misc",
                "Added Cycloid to Misc",
                "Added Cardioid to Misc",
                "Added Parabol to Misc",
                "Added Flex to Misc",
                "Added Lissajous to Misc",
                "Added Vortext to Misc",
                "Added Flank Panzerfaust to Misc",
                "Added Stweamwinder to Overdone Tanks",
                "Added Stweamicane to Overdone Tanks",
                "Added Fallen Booster as a spawnable boss",
                "Added Fallen Hybrid as a spawnable boss",
                "Added Industrian as a special boss in Boss Rush"
              ]
            },
            {
              "type": "Update",
              "date": "November 19, 2021",
              "name": "A literal forest fire is approaching rapidly",
              "content": [
                "Added Ligma to TESTBED Misc",
                "Finished up the Sterilizer boss!"
              ]
            },
            {
              "type": "Gamemode",
              "date": "November 18, 2021",
              "name": "It&#039;s been long overdue..",
              "content": [
                "Readded randomized gamemodes",
                "Added many old and new modes to the gamemode randomizer",
                "Gamemodes chances of being selected are weighted now",
                "Reworked Space",
                "Added map randomization, rock placement will now be different in most modes",
                "Completely reworked how Domination&#039;s map is generated, allowing for Open Domination and bases easily",
                "This took a lot of work, so I&#039;d appreciate it if you shared woomy with your friends, and gave us feedback on our <a href="
              ]
            }
          ],
          "keywords": [],
          "name": "chrome",
          "description": "browser?"
        }`,
      },
      {
        name: "pyproject.toml",
        path: "",
        content: `[tool.poetry]
        name = "repl_python3_google-chrome"
        version = "0.1.0"
        description = ""
        authors = ["Your Name <you@example.com>"]
        
        [tool.poetry.dependencies]
        python = "^3.8"
        webbot = "^0.34"
        
        [tool.poetry.dev-dependencies]
        
        [build-system]
        requires = ["poetry-core>=1.0.0"]
        build-backend = "poetry.core.masonry.api"
        `,
      },
      {
        name: "something.py",
        path: "",
        content: `#!/usr/bin/env python3


        #	Python Code Obfuscator
        #	by Brandon Asuncion
        #	
        #	Questions/Comments?	me@brandonasuncion.tech
        
        
        import string
        import sys
        import argparse
        
        # How strings are encoded
        #	Turning off will remove all numbers in the code,
        #	but will increase output size by a lot!
        USE_HEXSTRINGS = False
        
        # Obfuscate Python's built-in function calls
        OBFUSCATE_BUILTINS = False
        
        # Remove comments from code
        REMOVE_COMMENTS = True
        
        # Special code replacements
        REPLACEMENTS = {
          'True': '(()==())',
          'False': '(()==[])',
        }
        
        # Ignore the following two constants if you don't know what they mean
        RESERVED_VAR = "__RSV"		# Name of variable for internal actions (such as string decryption)
        BUILTINS_CONST = "__B"		# name used in the header for storing the "builtins" string
        
        _RESERVED = [
          # Python reserved keywords
          'None', 'and', 'as', 'assert', 'break', 'class', 'continue',
          'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from',
          'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not',
          'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield',
        ]
        
        # Python Built-in functions
        # can be called like: getattr(__import__('builtins'), 'abs')(1)
        _BUILT_IN = [
          'abs', 'dict', 'help', 'min', 'setattr',
          'all', 'dir', 'hex', 'next', 'slice',
          'any', 'divmod', 'id', 'object', 'sorted',
          'ascii', 'enumerate', 'input', 'oct', 'staticmethod',
          'bin', 'eval', 'int', 'open', 'str',
          'bool', 'exec', 'isinstance', 'ord', 'sum',
          'bytearray', 'filter', 'issubclass', 'pow', 'super',
          'bytes', 'float', 'iter', 'print', 'tuple',
          'callable', 'format', 'len', 'property', 'type',
          'chr', 'frozenset', 'list', 'range', 'vars',
          'classmethod', 'getattr', 'locals', 'repr', 'zip',
          'compile', 'globals', 'map', 'reversed', '__import__',
          'complex', 'hasattr', 'max', 'round',
          'delattr', 'hash', 'memoryview', 'set'
        ]
        
        # Might not be a complete list...
        _PREPAD = [';', ':', '=', '+', '-', '*', '%', '^', '<<', '>>', '|', '^', '/', ',', '{', '}', '[', ']']
        
        class Obfuscator(object):
          
          def __init__(self):
            self.header_variables = {}
            self.variables = {}
        
          # Header includes stuff like pre-processed integers
          def getHeader(self):
            return ";".join("{}={}".format(self.header_variables[number], self.variables[self.header_variables[number]]) for number in sorted(self.header_variables, key = lambda x: len(self.header_variables[x]))) + "\n"
            
          def getVariable(self, variableName):
            pass
        
          def addHeaderVar(self, varName, expression):
                
            if varName in self.header_variables:
              return self.header_variables[varName]
            
            # if the variable list is already too big,
            # it is better to just use the expression
            if len(expression) < (len(self.variables) + 1) + 2:
              return expression
            
            variable_name = '_' * (len(self.variables) + 1)
            self.variables[variable_name] = expression
            self.header_variables[varName] = variable_name
          
            return variable_name
          
        
          def encodeNumber(self, number, addToHeader = False):
            
            
            if int(number) < 0:
              return "(~([]==())*{})".format(self.encodeNumber(abs(int(number))))		# Not working for some reason
              #return "(({}-{})*{})".format(self.encodeNumber('0'), self.encodeNumber('1'), self.encodeNumber(-int(number)))
            
            number = str(number)
            
            if number in self.header_variables:
              return self.variables[self.header_variables[number]]
            
            
            if number == '0':
              return '((()==[])+(()==[]))'
            elif number == '1':
              return '((()==())+(()==[]))'
            
            else:
              # Try to avoid adding a header unless you really need to
              
              if ('0' not in self.header_variables):
                self.addHeaderVar('0', '((()==[])+(()==[]))')
                self.addHeaderVar('1', '({0}**{0})'.format(self.header_variables['0']))
              
              # Convert a number to binary, then encode
              # eg.	13 	=> 1101 (binary)	=> (1 << 3)+(1 << 2)+(1 << 0)
              bin_number = bin(int(number))[2:]
              shifts = 0
              obf_number = ''
              while bin_number != '':
                if bin_number[-1] == '1':
                
                  if shifts == 0:
                    obf_number += self.encodeNumber(1)
                    
                  elif str(1<<shifts) in self.header_variables:
                    obf_number += self.header_variables[str(1<<shifts)]
                  
                  elif str(shifts) in self.header_variables:
                    encode_bitshift = self.header_variables[str(shifts)]
                    obf_number += '({}<<{})'.format(self.header_variables['1'], encode_bitshift)
                    
                  else:
                    bit_m1 = self.encodeNumber(str(1 << (shifts-1)), True)
                    obf_number += '({}<<{})'.format(bit_m1, self.encodeNumber('1'))
                    
                  obf_number += '+'
              
                bin_number = bin_number[:-1]
                shifts += 1
              if bin_number.count('1') == 1:
                obf_number = obf_number[:-1]
              else:
                obf_number = "({})".format(obf_number[:-1])
              
              if addToHeader:
                return self.addHeaderVar(number, obf_number)
              return obf_number
            
          def encodeString(self, string, addToHeader = False, forceHexstrings = False):
          
            if USE_HEXSTRINGS or forceHexstrings:
              #byte_array = "[{}]".format(",".join([hex(ord(c)) for c in string]))
              #result = "str(''.join(chr({0}) for {0} in {1}))".format(RESERVED_VAR, byte_array)
              result = "'{}'".format("".join("\\x{:02x}".format(ord(c)) for c in string))
            else:
              byte_array = "[{}]".format(",".join([self.encodeNumber(ord(c)) for c in string]))
              result = "str(''.join(chr({0}) for {0} in {1}))".format(RESERVED_VAR, byte_array)
            
            if addToHeader:
              return self.addHeaderVar(string, result)
            return result
                
        
          def obfuscate(self, code, append_header = True):
          
            # import statements should just be returned
            if code.split()[0] in ['import', 'from']:
              return code
            
            # Pad certain characters so they can be parsed properly
            prepadded = code
            for p in _PREPAD:
              prepadded = prepadded.replace(p, " {} ".format(p))
            prepadded = prepadded.replace('(', "( ").replace(')', ' )')
          
            result = ''
            parsingQuote = ''
            lineCommented = False
          
            for symbol in prepadded.split():
            
              # Check if the rest of the line is commented
              if symbol[0] == '#':
                if REMOVE_COMMENTS:
                  return
                lineCommented = True
              
              if lineCommented:
                result += symbol + ' '
                continue
            
              # If you encounter a string
              if (parsingQuote == '') and (symbol[0] in ["\"", "\'"]):
                parsingQuote = symbol + ' '
                continue
            
              # when it reaches the end of the string
              if parsingQuote != '':
                if (symbol.find(parsingQuote[0]) != -1):
                  parsingQuote += symbol[:symbol.find(parsingQuote[0])+1]
                  result += self.encodeString(parsingQuote[1:-1])
                  parsingQuote = ''
                else:
                  parsingQuote += symbol + ' '
                continue
              
              
              # Reserved words are passed along with spacing
              if symbol in _RESERVED:
                result += " {} ".format(symbol)
                continue
              
            
              # arithmetic and similar symbols are passed along as well
              if symbol in _PREPAD:
                result += symbol
                continue
            
              # special replacements
              if symbol in REPLACEMENTS:
                result += REPLACEMENTS[symbol]
                continue
            
              # if we find a number
              if symbol.isdigit():
                result += self.encodeNumber(int(symbol))
                continue
            
              # Try to find the name of a variable / function
              name = ""
              for s in symbol:
                if s in string.ascii_letters + '_':
                  name += s
                elif name:
                  #if name in self.variables
                  if name[0] in string.digits:
                    name = ""
                  
              if name in _BUILT_IN:
                
                if OBFUSCATE_BUILTINS:
                  if BUILTINS_CONST not in self.header_variables:
                    self.addHeaderVar(BUILTINS_CONST, self.encodeString('builtins'))
                  
                  enc_name = self.addHeaderVar(name, self.encodeString(name))
                  result += "getattr(__import__({}), {})".format(self.header_variables[BUILTINS_CONST], enc_name)
                  result += symbol[len(name):]
                else:
                  result += symbol
                  
                continue
            
              # If it is a variable/function, replace the old variable name with a new one
              if (name != "") and (name not in _RESERVED) and (name not in _BUILT_IN):
                if name not in self.variables:
                  self.variables[name] = '_' * (len(self.variables) + 1)
                result += self.variables[name] + symbol[len(name):]
                continue
            
              # If there aren't any changes, just use the original code
              result += symbol
          
            # restore original indentation
            indents = ""
            i = 0
            while code[i] in ['\t', ' ']:
              indents += code[i]
              i += 1
            result = indents + result.strip()
          
            if append_header and (len(self.header_variables) > 0):
              return getHeader() + result
            
            return result
          
          # For processing multiple lines at once
          def obfuscate_lines(self, code):
            
            str_start = -1
            strings = []
            
            # get all strings in the code
            for i, c in enumerate(code):
              if (c in ['\'', '\"']) and (code[i-1] != '\\'):
                if str_start == -1:
                  str_start = i
                elif c == code[str_start]:
                  strings.append(code[str_start : i+1])
                  str_start = -1
                  
            # encode all the strings, and store them as variables in the header
            string_vars = {}
            for s in strings:
              encoded_str = self.encodeString(s[1:-1])
              string_vars[s] = self.addHeaderVar(s, encoded_str)
              
            for s in string_vars:
              code = code.replace(s, string_vars[s])
              
            
            result = ""
            for line in code.split('\n'):
              if not line:
                continue
              
              result += self.obfuscate(line, False) + "\n"
            return self.getHeader() + result
            
        class MyArgParser(argparse.ArgumentParser):
          def error(self, message):
            sys.stderr.write('Error: {}\n'.format(message))
            self.print_help()
            sys.exit(2)
        
        def main():
          parser = MyArgParser(description='Python Code Obfuscator by Brandon Asuncion (me@brandonasuncion.tech)')
          parser.add_argument('inputfile', help="Name of the input file")
          parser.add_argument('outputfile', help="Name of the output file")
          parser.add_argument('--debug', help="Show debug info", action="store_true")
          args = vars(parser.parse_args())
            
          print('Opening {} for obfuscation'.format(args['inputfile']))
          with open(args['inputfile'], 'r') as fh:
            lines = fh.read()
            
          obf = Obfuscator()
          output = obf.obfuscate_lines(lines)
            
          with open(args['outputfile'], 'w') as fh:
            fh.write(output)
            print('Written to {}\n'.format(args['outputfile']))
              
          if args['debug']:
            print('CONVERTED VARIABLES')
            for v in obf.variables:
              print("{}\t=> {}".format(v, obf.variables[v]))
        
            print('\nVARIABLES IN HEADER')
            for n in sorted(obf.header_variables, key=len):
              print("{}\t=> {}".format(n, obf.header_variables[n]))
            print()		
        
        if __name__ == "__main__":
          main()
        `,
      },
      
      
    ],
  },
  firefox: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        <style>
          /* These styles make the body full-height */
          html,
          body {
            height: 100%;
          }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body {
            overflow: hidden;
          }
          /* These styles make the root element full-height */
          #root {
            display: flex;
            height: 100%;
          }
        </style>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "blocking.js",
        path: "public/javascripts",
        content: `let now = Date.now();

        while (Date.now() - now < 1000) {}
        `,
      },
      
      {
        name: "loader.js",
        path: "public/javascripts",
        content: `import { Application } from "@hotwired/stimulus";

        console.log(Application);
        `,
      },
      {
        name: "style.css",
        path: "public/stylesheets",
        content: `body {
          padding: 50px;
          font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
        }
        
        a {
          color: #00B7FF;
        }
        `,
      },
      {
        name: "index.html",
        path: "public",
        content: `<html>

        <head>
          <title>Firefox import-maps test</title>
          <link rel="stylesheet" href="/stylesheets/style.css">
          <script src="/javascripts/blocking.js"></script>
          <script type="importmap">
            {
              "imports": {
                "@hotwired/stimulus": "https://cdn.jsdelivr.net/npm/@hotwired/stimulus@3.2.1/+esm"
              }
            }
          </script>
          <script src="/javascripts/loader.js" type="module"></script>
        </head>
        
        <body>
          <h1>Firefox import-maps test</h1>
          <p>see console</p>
        </body>
        
        </html>
        `,
      },
      {
        name: "index.js",
        path: "routes",
        content: `var express = require('express');
        var router = express.Router();
        
        /* GET home page. */
        router.get('/', function(req, res, next) {
          res.render('index', { title: 'Express' });
        });
        
        module.exports = router;
        `,
      },
      {
        name: "user.js",
        path: "routes",
        content: `var express = require('express');
        var router = express.Router();
        
        /* GET users listing. */
        router.get('/', function(req, res, next) {
          res.send('respond with a resource');
        });
        
        module.exports = router;
        `,
      },
      
      {
        name: "app.js",
        path: "",
        content: `var express = require("express");
        var path = require("path");
        var cookieParser = require("cookie-parser");
        var logger = require("morgan");
        
        var indexRouter = require("./routes/index");
        var usersRouter = require("./routes/users");
        
        var app = express();
        
        app.use(logger("dev"));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, "public")));
        
        app.use("/", indexRouter);
        app.use("/users", usersRouter);
        
        var listener = app.listen(8080, function() {
          console.log("Listening on port " + listener.address().port);
        });
        `,
      },
      {
        name: "package.json",
        path: "",
        content: `{
          "name": "express-example-starter",
          "version": "1.0.0",
          "description": "An Express-based application skeleton",
          "main": "app.js",
          "scripts": {
            "start": "nodemon app.js localhost 8080"
          },
          "dependencies": {
            "cookie-parser": "~1.4.4",
            "debug": "~2.6.9",
            "express": "~4.16.1",
            "morgan": "~1.9.1"
          },
          "devDependencies": {
            "nodemon": "1.18.4"
          },
          "keywords": [
            "expressjs",
            "express"
          ]
        }`,
      },
      
      
    ],
  },
  electron: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        <style>
          /* These styles make the body full-height */
          html,
          body {
            height: 100%;
          }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body {
            overflow: hidden;
          }
          /* These styles make the root element full-height */
          #root {
            display: flex;
            height: 100%;
          }
        </style>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "app.js",
        path: "activity-monitor",
        content: `const {app, BrowserWindow} = require('electron')
        const path = require('path')
        const url = require('url')
        
        let window = null
        
        // Wait until the app is ready
        app.once('ready', () => {
          // Create a new window
          window = new BrowserWindow({
            // Set the initial width to 500px
            width: 500,
            // Set the initial height to 400px
            height: 400,
            // set the title bar style
            titleBarStyle: 'hiddenInset',
            // set the background color to black
            backgroundColor: "#111",
            // Don't show the window until it's ready, this prevents any white flickering
            show: false
          })
        
          window.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
          }))
        
          window.once('ready-to-show', () => {
            window.show()
          })
        })
        `,
      },
      
      {
        name: "index.html",
        path: "activity-monitor",
        content: `<!DOCTYPE html>
        <html>
        
        <head>
          <meta charset="utf-8">
        
          <title>Activity Monitor</title>
        
          <!-- Stylesheets -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
          <link rel="stylesheet" href="./styles.css">
        
          <!-- Scripts -->
          <script>
            delete module.exports
          </script>
          <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.bundle.min.js"></script>
          <script src="./window.js"></script>
        
        </head>
        
        <body>
        
          <div class="container-fluid">
            <canvas class="chart"></canvas>
          </div>
        
        </body>
        
        </html>`,
      },
      {
        name: "style.css",
        path: "activity-monitor",
        content: `html, body, .container-fluid {
          height: 100%;
          background-color: #111;
        }
        
        html {
          -webkit-app-region: drag;
        }
        
        .container-fluid {
          padding: 25px;
        }
        `,
      },
      
      {
        name: "package.json",
        path: "activity-monitor",
        content: `{
          "name": "activity-monitor",
          "version": "1.0.0",
          "description": "CPU activity monitor",
          "repository": "electron/simple-samples",
          "main": "app.js",
          "scripts": {
            "start": "electron app.js"
          },
          "license": "ISC",
          "devDependencies": {
            "electron": "^3.0.2"
          }
        }
        `,
      },  
      {
        name: "package-lock.json",
        path: "activity-monitor",
        content: `{
          "name": "activity-monitor",
          "version": "1.0.0",
          "lockfileVersion": 1,
          "requires": true,
          "dependencies": {
            "@types/node": {
              "version": "8.10.30",
              "resolved": "https://registry.npmjs.org/@types/node/-/node-8.10.30.tgz",
              "integrity": "sha512-Le8HGMI5gjFSBqcCuKP/wfHC19oURzkU2D+ERIescUoJd+CmNEMYBib9LQ4zj1HHEZOJQWhw2ZTnbD8weASh/Q==",
              "dev": true
            },
            "ajv": {
              "version": "5.5.2",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-5.5.2.tgz",
              "integrity": "sha1-c7Xuyj+rZT49P5Qis0GtQiBdyWU=",
              "dev": true,
              "requires": {
                "co": "^4.6.0",
                "fast-deep-equal": "^1.0.0",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.3.0"
              }
            },
            "ansi-regex": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
              "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
              "dev": true
            },
            "array-find-index": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
              "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
              "dev": true
            },
            "asn1": {
              "version": "0.2.4",
              "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
              "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
              "dev": true,
              "requires": {
                "safer-buffer": "~2.1.0"
              }
            },
            "assert-plus": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
              "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
              "dev": true
            },
            "asynckit": {
              "version": "0.4.0",
              "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
              "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
              "dev": true
            },
            "aws-sign2": {
              "version": "0.7.0",
              "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
              "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
              "dev": true
            },
            "aws4": {
              "version": "1.8.0",
              "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.8.0.tgz",
              "integrity": "sha512-ReZxvNHIOv88FlT7rxcXIIC0fPt4KZqZbOlivyWtXLt8ESx84zd3kMC6iK5jVeS2qt+g7ftS7ye4fi06X5rtRQ==",
              "dev": true
            },
            "bcrypt-pbkdf": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
              "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
              "dev": true,
              "optional": true,
              "requires": {
                "tweetnacl": "^0.14.3"
              }
            },
            "buffer-from": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
              "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
              "dev": true
            },
            "builtin-modules": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz",
              "integrity": "sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=",
              "dev": true
            },
            "camelcase": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
              "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8=",
              "dev": true
            },
            "camelcase-keys": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
              "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
              "dev": true,
              "requires": {
                "camelcase": "^2.0.0",
                "map-obj": "^1.0.0"
              }
            },
            "caseless": {
              "version": "0.12.0",
              "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
              "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
              "dev": true
            },
            "co": {
              "version": "4.6.0",
              "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
              "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
              "dev": true
            },
            "code-point-at": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
              "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
              "dev": true
            },
            "combined-stream": {
              "version": "1.0.7",
              "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.7.tgz",
              "integrity": "sha512-brWl9y6vOB1xYPZcpZde3N9zDByXTosAeMDo4p1wzo6UMOX4vumB+TP1RZ76sfE6Md68Q0NJSrE/gbezd4Ul+w==",
              "dev": true,
              "requires": {
                "delayed-stream": "~1.0.0"
              }
            },
            "concat-stream": {
              "version": "1.6.2",
              "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
              "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
              "dev": true,
              "requires": {
                "buffer-from": "^1.0.0",
                "inherits": "^2.0.3",
                "readable-stream": "^2.2.2",
                "typedarray": "^0.0.6"
              },
              "dependencies": {
                "isarray": {
                  "version": "1.0.0",
                  "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
                  "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
                  "dev": true
                },
                "readable-stream": {
                  "version": "2.3.6",
                  "resolved": "http://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
                  "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
                  "dev": true,
                  "requires": {
                    "core-util-is": "~1.0.0",
                    "inherits": "~2.0.3",
                    "isarray": "~1.0.0",
                    "process-nextick-args": "~2.0.0",
                    "safe-buffer": "~5.1.1",
                    "string_decoder": "~1.1.1",
                    "util-deprecate": "~1.0.1"
                  }
                },
                "string_decoder": {
                  "version": "1.1.1",
                  "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
                  "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
                  "dev": true,
                  "requires": {
                    "safe-buffer": "~5.1.0"
                  }
                }
              }
            },
            "core-util-is": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
              "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
              "dev": true
            },
            "currently-unhandled": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
              "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
              "dev": true,
              "requires": {
                "array-find-index": "^1.0.1"
              }
            },
            "dashdash": {
              "version": "1.14.1",
              "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
              "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0"
              }
            },
            "debug": {
              "version": "3.2.5",
              "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.5.tgz",
              "integrity": "sha512-D61LaDQPQkxJ5AUM2mbSJRbPkNs/TmdmOeLAi1hgDkpDfIfetSrjmWhccwtuResSwMbACjx/xXQofvM9CE/aeg==",
              "dev": true,
              "requires": {
                "ms": "^2.1.1"
              }
            },
            "decamelize": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
              "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
              "dev": true
            },
            "deep-extend": {
              "version": "0.6.0",
              "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
              "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
              "dev": true
            },
            "delayed-stream": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
              "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
              "dev": true
            },
            "ecc-jsbn": {
              "version": "0.1.2",
              "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
              "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
              "dev": true,
              "optional": true,
              "requires": {
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.1.0"
              }
            },
            "electron": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/electron/-/electron-3.0.2.tgz",
              "integrity": "sha512-BsU/KJRPODlEoaOZhsmFTIaG2h1Y28JCrqeTGVqGL+fef/7xQZdHx5ZCStUDXXUSTcoqiHlc5QvLH4PfZFbOmg==",
              "dev": true,
              "requires": {
                "@types/node": "^8.0.24",
                "electron-download": "^4.1.0",
                "extract-zip": "^1.0.3"
              }
            },
            "electron-download": {
              "version": "4.1.1",
              "resolved": "https://registry.npmjs.org/electron-download/-/electron-download-4.1.1.tgz",
              "integrity": "sha512-FjEWG9Jb/ppK/2zToP+U5dds114fM1ZOJqMAR4aXXL5CvyPE9fiqBK/9YcwC9poIFQTEJk/EM/zyRwziziRZrg==",
              "dev": true,
              "requires": {
                "debug": "^3.0.0",
                "env-paths": "^1.0.0",
                "fs-extra": "^4.0.1",
                "minimist": "^1.2.0",
                "nugget": "^2.0.1",
                "path-exists": "^3.0.0",
                "rc": "^1.2.1",
                "semver": "^5.4.1",
                "sumchecker": "^2.0.2"
              }
            },
            "env-paths": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-1.0.0.tgz",
              "integrity": "sha1-QWgTO0K7BcOKNbGuQ5fIKYqzaeA=",
              "dev": true
            },
            "error-ex": {
              "version": "1.3.2",
              "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
              "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
              "dev": true,
              "requires": {
                "is-arrayish": "^0.2.1"
              }
            },
            "extend": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
              "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
              "dev": true
            },
            "extract-zip": {
              "version": "1.6.7",
              "resolved": "https://registry.npmjs.org/extract-zip/-/extract-zip-1.6.7.tgz",
              "integrity": "sha1-qEC0uK9kAyZMjbV/Txp0Mz74H+k=",
              "dev": true,
              "requires": {
                "concat-stream": "1.6.2",
                "debug": "2.6.9",
                "mkdirp": "0.5.1",
                "yauzl": "2.4.1"
              },
              "dependencies": {
                "debug": {
                  "version": "2.6.9",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                  "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                  "dev": true,
                  "requires": {
                    "ms": "2.0.0"
                  }
                },
                "ms": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                  "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                  "dev": true
                }
              }
            },
            "extsprintf": {
              "version": "1.3.0",
              "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
              "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
              "dev": true
            },
            "fast-deep-equal": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-1.1.0.tgz",
              "integrity": "sha1-wFNHeBfIa1HaqFPIHgWbcz0CNhQ=",
              "dev": true
            },
            "fast-json-stable-stringify": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
              "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
              "dev": true
            },
            "fd-slicer": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.0.1.tgz",
              "integrity": "sha1-i1vL2ewyfFBBv5qwI/1nUPEXfmU=",
              "dev": true,
              "requires": {
                "pend": "~1.2.0"
              }
            },
            "find-up": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
              "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
              "dev": true,
              "requires": {
                "path-exists": "^2.0.0",
                "pinkie-promise": "^2.0.0"
              },
              "dependencies": {
                "path-exists": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
                  "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
                  "dev": true,
                  "requires": {
                    "pinkie-promise": "^2.0.0"
                  }
                }
              }
            },
            "forever-agent": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
              "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
              "dev": true
            },
            "form-data": {
              "version": "2.3.2",
              "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.2.tgz",
              "integrity": "sha1-SXBJi+YEwgwAXU9cI67NIda0kJk=",
              "dev": true,
              "requires": {
                "asynckit": "^0.4.0",
                "combined-stream": "1.0.6",
                "mime-types": "^2.1.12"
              },
              "dependencies": {
                "combined-stream": {
                  "version": "1.0.6",
                  "resolved": "http://registry.npmjs.org/combined-stream/-/combined-stream-1.0.6.tgz",
                  "integrity": "sha1-cj599ugBrFYTETp+RFqbactjKBg=",
                  "dev": true,
                  "requires": {
                    "delayed-stream": "~1.0.0"
                  }
                }
              }
            },
            "fs-extra": {
              "version": "4.0.3",
              "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.3.tgz",
              "integrity": "sha512-q6rbdDd1o2mAnQreO7YADIxf/Whx4AHBiRf6d+/cVT8h44ss+lHgxf1FemcqDnQt9X3ct4McHr+JMGlYSsK7Cg==",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "jsonfile": "^4.0.0",
                "universalify": "^0.1.0"
              }
            },
            "get-stdin": {
              "version": "4.0.1",
              "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
              "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4=",
              "dev": true
            },
            "getpass": {
              "version": "0.1.7",
              "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
              "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0"
              }
            },
            "graceful-fs": {
              "version": "4.1.11",
              "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.11.tgz",
              "integrity": "sha1-Dovf5NHduIVNZOBOp8AOKgJuVlg=",
              "dev": true
            },
            "har-schema": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
              "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
              "dev": true
            },
            "har-validator": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.0.tgz",
              "integrity": "sha512-+qnmNjI4OfH2ipQ9VQOw23bBd/ibtfbVdK2fYbY4acTDqKTW/YDp9McimZdDbG8iV9fZizUqQMD5xvriB146TA==",
              "dev": true,
              "requires": {
                "ajv": "^5.3.0",
                "har-schema": "^2.0.0"
              }
            },
            "hosted-git-info": {
              "version": "2.7.1",
              "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.7.1.tgz",
              "integrity": "sha512-7T/BxH19zbcCTa8XkMlbK5lTo1WtgkFi3GvdWEyNuc4Vex7/9Dqbnpsf4JMydcfj9HCg4zUWFTL3Za6lapg5/w==",
              "dev": true
            },
            "http-signature": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
              "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0",
                "jsprim": "^1.2.2",
                "sshpk": "^1.7.0"
              }
            },
            "indent-string": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
              "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
              "dev": true,
              "requires": {
                "repeating": "^2.0.0"
              }
            },
            "inherits": {
              "version": "2.0.3",
              "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
              "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
              "dev": true
            },
            "ini": {
              "version": "1.3.5",
              "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
              "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw==",
              "dev": true
            },
            "is-arrayish": {
              "version": "0.2.1",
              "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
              "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
              "dev": true
            },
            "is-builtin-module": {
              "version": "1.0.0",
              "resolved": "http://registry.npmjs.org/is-builtin-module/-/is-builtin-module-1.0.0.tgz",
              "integrity": "sha1-VAVy0096wxGfj3bDDLwbHgN6/74=",
              "dev": true,
              "requires": {
                "builtin-modules": "^1.0.0"
              }
            },
            "is-finite": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.0.2.tgz",
              "integrity": "sha1-zGZ3aVYCvlUO8R6LSqYwU0K20Ko=",
              "dev": true,
              "requires": {
                "number-is-nan": "^1.0.0"
              }
            },
            "is-fullwidth-code-point": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
              "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
              "dev": true,
              "requires": {
                "number-is-nan": "^1.0.0"
              }
            },
            "is-typedarray": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
              "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
              "dev": true
            },
            "is-utf8": {
              "version": "0.2.1",
              "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
              "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
              "dev": true
            },
            "isarray": {
              "version": "0.0.1",
              "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
              "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8=",
              "dev": true
            },
            "isstream": {
              "version": "0.1.2",
              "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
              "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
              "dev": true
            },
            "jsbn": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
              "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
              "dev": true,
              "optional": true
            },
            "json-schema": {
              "version": "0.2.3",
              "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
              "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
              "dev": true
            },
            "json-schema-traverse": {
              "version": "0.3.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.3.1.tgz",
              "integrity": "sha1-NJptRMU6Ud6JtAgFxdXlm0F9M0A=",
              "dev": true
            },
            "json-stringify-safe": {
              "version": "5.0.1",
              "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
              "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
              "dev": true
            },
            "jsonfile": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
              "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.6"
              }
            },
            "jsprim": {
              "version": "1.4.1",
              "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
              "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
              "dev": true,
              "requires": {
                "assert-plus": "1.0.0",
                "extsprintf": "1.3.0",
                "json-schema": "0.2.3",
                "verror": "1.10.0"
              }
            },
            "load-json-file": {
              "version": "1.1.0",
              "resolved": "http://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
              "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "parse-json": "^2.2.0",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0",
                "strip-bom": "^2.0.0"
              }
            },
            "loud-rejection": {
              "version": "1.6.0",
              "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
              "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
              "dev": true,
              "requires": {
                "currently-unhandled": "^0.4.1",
                "signal-exit": "^3.0.0"
              }
            },
            "map-obj": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
              "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
              "dev": true
            },
            "meow": {
              "version": "3.7.0",
              "resolved": "https://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
              "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
              "dev": true,
              "requires": {
                "camelcase-keys": "^2.0.0",
                "decamelize": "^1.1.2",
                "loud-rejection": "^1.0.0",
                "map-obj": "^1.0.1",
                "minimist": "^1.1.3",
                "normalize-package-data": "^2.3.4",
                "object-assign": "^4.0.1",
                "read-pkg-up": "^1.0.1",
                "redent": "^1.0.0",
                "trim-newlines": "^1.0.0"
              }
            },
            "mime-db": {
              "version": "1.36.0",
              "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.36.0.tgz",
              "integrity": "sha512-L+xvyD9MkoYMXb1jAmzI/lWYAxAMCPvIBSWur0PZ5nOf5euahRLVqH//FKW9mWp2lkqUgYiXPgkzfMUFi4zVDw==",
              "dev": true
            },
            "mime-types": {
              "version": "2.1.20",
              "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.20.tgz",
              "integrity": "sha512-HrkrPaP9vGuWbLK1B1FfgAkbqNjIuy4eHlIYnFi7kamZyLLrGlo2mpcx0bBmNpKqBtYtAfGbodDddIgddSJC2A==",
              "dev": true,
              "requires": {
                "mime-db": "~1.36.0"
              }
            },
            "minimist": {
              "version": "1.2.0",
              "resolved": "http://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
              "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
              "dev": true
            },
            "mkdirp": {
              "version": "0.5.1",
              "resolved": "http://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
              "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
              "dev": true,
              "requires": {
                "minimist": "0.0.8"
              },
              "dependencies": {
                "minimist": {
                  "version": "0.0.8",
                  "resolved": "http://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
                  "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0=",
                  "dev": true
                }
              }
            },
            "ms": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
              "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
              "dev": true
            },
            "normalize-package-data": {
              "version": "2.4.0",
              "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
              "integrity": "sha512-9jjUFbTPfEy3R/ad/2oNbKtW9Hgovl5O1FvFWKkKblNXoN/Oou6+9+KKohPK13Yc3/TyunyWhJp6gvRNR/PPAw==",
              "dev": true,
              "requires": {
                "hosted-git-info": "^2.1.4",
                "is-builtin-module": "^1.0.0",
                "semver": "2 || 3 || 4 || 5",
                "validate-npm-package-license": "^3.0.1"
              }
            },
            "nugget": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/nugget/-/nugget-2.0.1.tgz",
              "integrity": "sha1-IBCVpIfhrTYIGzQy+jytpPjQcbA=",
              "dev": true,
              "requires": {
                "debug": "^2.1.3",
                "minimist": "^1.1.0",
                "pretty-bytes": "^1.0.2",
                "progress-stream": "^1.1.0",
                "request": "^2.45.0",
                "single-line-log": "^1.1.2",
                "throttleit": "0.0.2"
              },
              "dependencies": {
                "debug": {
                  "version": "2.6.9",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                  "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                  "dev": true,
                  "requires": {
                    "ms": "2.0.0"
                  }
                },
                "ms": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                  "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                  "dev": true
                }
              }
            },
            "number-is-nan": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
              "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
              "dev": true
            },
            "oauth-sign": {
              "version": "0.9.0",
              "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
              "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
              "dev": true
            },
            "object-assign": {
              "version": "4.1.1",
              "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
              "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
              "dev": true
            },
            "object-keys": {
              "version": "0.4.0",
              "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-0.4.0.tgz",
              "integrity": "sha1-KKaq50KN0sOpLz2V8hM13SBOAzY=",
              "dev": true
            },
            "parse-json": {
              "version": "2.2.0",
              "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
              "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
              "dev": true,
              "requires": {
                "error-ex": "^1.2.0"
              }
            },
            "path-exists": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
              "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
              "dev": true
            },
            "path-type": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
              "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0"
              }
            },
            "pend": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
              "integrity": "sha1-elfrVQpng/kRUzH89GY9XI4AelA=",
              "dev": true
            },
            "performance-now": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
              "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
              "dev": true
            },
            "pify": {
              "version": "2.3.0",
              "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
              "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
              "dev": true
            },
            "pinkie": {
              "version": "2.0.4",
              "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
              "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
              "dev": true
            },
            "pinkie-promise": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
              "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
              "dev": true,
              "requires": {
                "pinkie": "^2.0.0"
              }
            },
            "pretty-bytes": {
              "version": "1.0.4",
              "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-1.0.4.tgz",
              "integrity": "sha1-CiLoIQYJrTVUL4yNXSFZr/B1HIQ=",
              "dev": true,
              "requires": {
                "get-stdin": "^4.0.1",
                "meow": "^3.1.0"
              }
            },
            "process-nextick-args": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
              "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw==",
              "dev": true
            },
            "progress-stream": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/progress-stream/-/progress-stream-1.2.0.tgz",
              "integrity": "sha1-LNPP6jO6OonJwSHsM0er6asSX3c=",
              "dev": true,
              "requires": {
                "speedometer": "~0.1.2",
                "through2": "~0.2.3"
              }
            },
            "psl": {
              "version": "1.1.29",
              "resolved": "https://registry.npmjs.org/psl/-/psl-1.1.29.tgz",
              "integrity": "sha512-AeUmQ0oLN02flVHXWh9sSJF7mcdFq0ppid/JkErufc3hGIV/AMa8Fo9VgDo/cT2jFdOWoFvHp90qqBH54W+gjQ==",
              "dev": true
            },
            "punycode": {
              "version": "1.4.1",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
              "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
              "dev": true
            },
            "qs": {
              "version": "6.5.2",
              "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
              "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
              "dev": true
            },
            "rc": {
              "version": "1.2.8",
              "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
              "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
              "dev": true,
              "requires": {
                "deep-extend": "^0.6.0",
                "ini": "~1.3.0",
                "minimist": "^1.2.0",
                "strip-json-comments": "~2.0.1"
              }
            },
            "read-pkg": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
              "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
              "dev": true,
              "requires": {
                "load-json-file": "^1.0.0",
                "normalize-package-data": "^2.3.2",
                "path-type": "^1.0.0"
              }
            },
            "read-pkg-up": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
              "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
              "dev": true,
              "requires": {
                "find-up": "^1.0.0",
                "read-pkg": "^1.0.0"
              }
            },
            "readable-stream": {
              "version": "1.1.14",
              "resolved": "http://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
              "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
              "dev": true,
              "requires": {
                "core-util-is": "~1.0.0",
                "inherits": "~2.0.1",
                "isarray": "0.0.1",
                "string_decoder": "~0.10.x"
              }
            },
            "redent": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
              "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
              "dev": true,
              "requires": {
                "indent-string": "^2.1.0",
                "strip-indent": "^1.0.1"
              }
            },
            "repeating": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
              "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
              "dev": true,
              "requires": {
                "is-finite": "^1.0.0"
              }
            },
            "request": {
              "version": "2.88.0",
              "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
              "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
              "dev": true,
              "requires": {
                "aws-sign2": "~0.7.0",
                "aws4": "^1.8.0",
                "caseless": "~0.12.0",
                "combined-stream": "~1.0.6",
                "extend": "~3.0.2",
                "forever-agent": "~0.6.1",
                "form-data": "~2.3.2",
                "har-validator": "~5.1.0",
                "http-signature": "~1.2.0",
                "is-typedarray": "~1.0.0",
                "isstream": "~0.1.2",
                "json-stringify-safe": "~5.0.1",
                "mime-types": "~2.1.19",
                "oauth-sign": "~0.9.0",
                "performance-now": "^2.1.0",
                "qs": "~6.5.2",
                "safe-buffer": "^5.1.2",
                "tough-cookie": "~2.4.3",
                "tunnel-agent": "^0.6.0",
                "uuid": "^3.3.2"
              }
            },
            "safe-buffer": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
              "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
              "dev": true
            },
            "safer-buffer": {
              "version": "2.1.2",
              "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
              "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
              "dev": true
            },
            "semver": {
              "version": "5.5.1",
              "resolved": "https://registry.npmjs.org/semver/-/semver-5.5.1.tgz",
              "integrity": "sha512-PqpAxfrEhlSUWge8dwIp4tZnQ25DIOthpiaHNIthsjEFQD6EvqUKUDM7L8O2rShkFccYo1VjJR0coWfNkCubRw==",
              "dev": true
            },
            "signal-exit": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
              "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=",
              "dev": true
            },
            "single-line-log": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/single-line-log/-/single-line-log-1.1.2.tgz",
              "integrity": "sha1-wvg/Jzo+GhbtsJlWYdoO1e8DM2Q=",
              "dev": true,
              "requires": {
                "string-width": "^1.0.1"
              }
            },
            "spdx-correct": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.0.1.tgz",
              "integrity": "sha512-hxSPZbRZvSDuOvADntOElzJpenIR7wXJkuoUcUtS0erbgt2fgeaoPIYretfKpslMhfFDY4k0MZ2F5CUzhBsSvQ==",
              "dev": true,
              "requires": {
                "spdx-expression-parse": "^3.0.0",
                "spdx-license-ids": "^3.0.0"
              }
            },
            "spdx-exceptions": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.1.0.tgz",
              "integrity": "sha512-4K1NsmrlCU1JJgUrtgEeTVyfx8VaYea9J9LvARxhbHtVtohPs/gFGG5yy49beySjlIMhhXZ4QqujIZEfS4l6Cg==",
              "dev": true
            },
            "spdx-expression-parse": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
              "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
              "dev": true,
              "requires": {
                "spdx-exceptions": "^2.1.0",
                "spdx-license-ids": "^3.0.0"
              }
            },
            "spdx-license-ids": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.1.tgz",
              "integrity": "sha512-TfOfPcYGBB5sDuPn3deByxPhmfegAhpDYKSOXZQN81Oyrrif8ZCodOLzK3AesELnCx03kikhyDwh0pfvvQvF8w==",
              "dev": true
            },
            "speedometer": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/speedometer/-/speedometer-0.1.4.tgz",
              "integrity": "sha1-mHbb0qFp0xFUAtSObqYynIgWpQ0=",
              "dev": true
            },
            "sshpk": {
              "version": "1.14.2",
              "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.14.2.tgz",
              "integrity": "sha1-xvxhZIo9nE52T9P8306hBeSSupg=",
              "dev": true,
              "requires": {
                "asn1": "~0.2.3",
                "assert-plus": "^1.0.0",
                "bcrypt-pbkdf": "^1.0.0",
                "dashdash": "^1.12.0",
                "ecc-jsbn": "~0.1.1",
                "getpass": "^0.1.1",
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.0.2",
                "tweetnacl": "~0.14.0"
              }
            },
            "string-width": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
              "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
              "dev": true,
              "requires": {
                "code-point-at": "^1.0.0",
                "is-fullwidth-code-point": "^1.0.0",
                "strip-ansi": "^3.0.0"
              }
            },
            "string_decoder": {
              "version": "0.10.31",
              "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
              "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ=",
              "dev": true
            },
            "strip-ansi": {
              "version": "3.0.1",
              "resolved": "http://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
              "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
              "dev": true,
              "requires": {
                "ansi-regex": "^2.0.0"
              }
            },
            "strip-bom": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
              "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
              "dev": true,
              "requires": {
                "is-utf8": "^0.2.0"
              }
            },
            "strip-indent": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
              "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
              "dev": true,
              "requires": {
                "get-stdin": "^4.0.1"
              }
            },
            "strip-json-comments": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
              "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
              "dev": true
            },
            "sumchecker": {
              "version": "2.0.2",
              "resolved": "https://registry.npmjs.org/sumchecker/-/sumchecker-2.0.2.tgz",
              "integrity": "sha1-D0LBDl0F2l1C7qPlbDOZo31sWz4=",
              "dev": true,
              "requires": {
                "debug": "^2.2.0"
              },
              "dependencies": {
                "debug": {
                  "version": "2.6.9",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                  "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                  "dev": true,
                  "requires": {
                    "ms": "2.0.0"
                  }
                },
                "ms": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                  "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                  "dev": true
                }
              }
            },
            "throttleit": {
              "version": "0.0.2",
              "resolved": "https://registry.npmjs.org/throttleit/-/throttleit-0.0.2.tgz",
              "integrity": "sha1-z+34jmDADdlpe2H90qg0OptoDq8=",
              "dev": true
            },
            "through2": {
              "version": "0.2.3",
              "resolved": "https://registry.npmjs.org/through2/-/through2-0.2.3.tgz",
              "integrity": "sha1-6zKE2k6jEbbMis42U3SKUqvyWj8=",
              "dev": true,
              "requires": {
                "readable-stream": "~1.1.9",
                "xtend": "~2.1.1"
              }
            },
            "tough-cookie": {
              "version": "2.4.3",
              "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
              "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
              "dev": true,
              "requires": {
                "psl": "^1.1.24",
                "punycode": "^1.4.1"
              }
            },
            "trim-newlines": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz",
              "integrity": "sha1-WIeWa7WCpFA6QetST301ARgVphM=",
              "dev": true
            },
            "tunnel-agent": {
              "version": "0.6.0",
              "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
              "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
              "dev": true,
              "requires": {
                "safe-buffer": "^5.0.1"
              }
            },
            "tweetnacl": {
              "version": "0.14.5",
              "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
              "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
              "dev": true,
              "optional": true
            },
            "typedarray": {
              "version": "0.0.6",
              "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
              "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
              "dev": true
            },
            "universalify": {
              "version": "0.1.2",
              "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
              "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
              "dev": true
            },
            "util-deprecate": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
              "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
              "dev": true
            },
            "uuid": {
              "version": "3.3.2",
              "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
              "integrity": "sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA==",
              "dev": true
            },
            "validate-npm-package-license": {
              "version": "3.0.4",
              "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
              "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
              "dev": true,
              "requires": {
                "spdx-correct": "^3.0.0",
                "spdx-expression-parse": "^3.0.0"
              }
            },
            "verror": {
              "version": "1.10.0",
              "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
              "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0",
                "core-util-is": "1.0.2",
                "extsprintf": "^1.2.0"
              }
            },
            "xtend": {
              "version": "2.1.2",
              "resolved": "https://registry.npmjs.org/xtend/-/xtend-2.1.2.tgz",
              "integrity": "sha1-bv7MKk2tjmlixJAbM3znuoe10os=",
              "dev": true,
              "requires": {
                "object-keys": "~0.4.0"
              }
            },
            "yauzl": {
              "version": "2.4.1",
              "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.4.1.tgz",
              "integrity": "sha1-lSj0QtqxsihOWLQ3m7GU4i4MQAU=",
              "dev": true,
              "requires": {
                "fd-slicer": "~1.0.1"
              }
            }
          }
        }
        `,
      },  
      {
        name: "window.js",
        path: "activity-monitor",
        content: `const os = require('os')
        var chart = null;
        var lastMeasureTimes = [];
        
        function setLastMeasureTimes(cpus) {
          for (let i = 0; i < cpus.length; i++) {
            lastMeasureTimes[i] = getCpuTimes(cpus[i]);
          }
        }
        
        function getDatasets() {
          const datasets = []
          const cpus = os.cpus()
        
          for (let i = 0; i < cpus.length; i++) {
            const cpu = cpus[i]
            const cpuData = {
              data: getCpuTimes(cpu),
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ]
            }
            datasets.push(cpuData)
          }
          testCpus = os.cpus();
          return datasets;
        }
        
        function updateDatasets() {
          const cpus = os.cpus()
          for (let i = 0; i < cpus.length; i++) {
            const cpu = cpus[i]
            chart.data.datasets[i].data = getCpuTimes(cpu);
            chart.data.datasets[i].data[0] -= lastMeasureTimes[i][0];
            chart.data.datasets[i].data[1] -= lastMeasureTimes[i][1];
            chart.data.datasets[i].data[2] -= lastMeasureTimes[i][2];
          }
          chart.update();
          setLastMeasureTimes(cpus);
        }
        
        function getCpuTimes(cpu) {
          return [
            cpu.times.user,
            cpu.times.sys,
            cpu.times.idle,
          ];
        }
        
        function drawChart() {
          chart = new Chart($('.chart'), {
            type: 'doughnut',
            data: {
              labels: [
                'User Time (ms)',
                'System Time (ms)',
                'Idle Time (ms)'
              ],
              datasets: getDatasets()
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: 'CPU Activity',
                fontColor: 'rgb(250, 250, 250)',
                fontSize: 16
              },
              legend: {
                display: true,
                labels: {
                  fontColor: 'rgb(250, 250, 250)',
                  fontSize: 12
                }
              }
            }
          });
        
          setInterval(updateDatasets, 1000);
        }
        
        $(() => {
          setLastMeasureTimes(os.cpus());
          drawChart();
        })`,
      },  
      
      
    ],
  },
  nwjs: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "public",
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <!--
              Notice the use of %PUBLIC_URL% in the tags above.
              It will be replaced with the URL of the \`public\` folder during the build.
              Only files inside the \`public\` folder can be referenced from the HTML.
        
              Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
              work correctly both with client-side routing and a non-root public URL.
              Learn how to configure a non-root public URL by running \`npm run build\`.
            -->
          <title>React App</title>
        <style>
          /* These styles make the body full-height */
          html,
          body {
            height: 100%;
          }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body {
            overflow: hidden;
          }
          /* These styles make the root element full-height */
          #root {
            display: flex;
            height: 100%;
          }
        </style>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
        
              To begin the development, run \`npm start\` or \`yarn start\`.
              To create a production bundle, use \`npm run build\` or \`yarn build\`.
            -->
        </body>
        
        </html>`,
      },
      
      {
        name: "app.js",
        path: "activity-monitor",
        content: `const {app, BrowserWindow} = require('electron')
        const path = require('path')
        const url = require('url')
        
        let window = null
        
        // Wait until the app is ready
        app.once('ready', () => {
          // Create a new window
          window = new BrowserWindow({
            // Set the initial width to 500px
            width: 500,
            // Set the initial height to 400px
            height: 400,
            // set the title bar style
            titleBarStyle: 'hiddenInset',
            // set the background color to black
            backgroundColor: "#111",
            // Don't show the window until it's ready, this prevents any white flickering
            show: false
          })
        
          window.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
          }))
        
          window.once('ready-to-show', () => {
            window.show()
          })
        })
        `,
      },
      
      {
        name: "index.html",
        path: "activity-monitor",
        content: `<!DOCTYPE html>
        <html>
        
        <head>
          <meta charset="utf-8">
        
          <title>Activity Monitor</title>
        
          <!-- Stylesheets -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
          <link rel="stylesheet" href="./styles.css">
        
          <!-- Scripts -->
          <script>
            delete module.exports
          </script>
          <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.bundle.min.js"></script>
          <script src="./window.js"></script>
        
        </head>
        
        <body>
        
          <div class="container-fluid">
            <canvas class="chart"></canvas>
          </div>
        
        </body>
        
        </html>`,
      },
      {
        name: "style.css",
        path: "activity-monitor",
        content: `html, body, .container-fluid {
          height: 100%;
          background-color: #111;
        }
        
        html {
          -webkit-app-region: drag;
        }
        
        .container-fluid {
          padding: 25px;
        }
        `,
      },
      
      {
        name: "package.json",
        path: "activity-monitor",
        content: `{
          "name": "activity-monitor",
          "version": "1.0.0",
          "description": "CPU activity monitor",
          "repository": "electron/simple-samples",
          "main": "app.js",
          "scripts": {
            "start": "electron app.js"
          },
          "license": "ISC",
          "devDependencies": {
            "electron": "^3.0.2"
          }
        }
        `,
      },  
      {
        name: "package-lock.json",
        path: "activity-monitor",
        content: `{
          "name": "activity-monitor",
          "version": "1.0.0",
          "lockfileVersion": 1,
          "requires": true,
          "dependencies": {
            "@types/node": {
              "version": "8.10.30",
              "resolved": "https://registry.npmjs.org/@types/node/-/node-8.10.30.tgz",
              "integrity": "sha512-Le8HGMI5gjFSBqcCuKP/wfHC19oURzkU2D+ERIescUoJd+CmNEMYBib9LQ4zj1HHEZOJQWhw2ZTnbD8weASh/Q==",
              "dev": true
            },
            "ajv": {
              "version": "5.5.2",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-5.5.2.tgz",
              "integrity": "sha1-c7Xuyj+rZT49P5Qis0GtQiBdyWU=",
              "dev": true,
              "requires": {
                "co": "^4.6.0",
                "fast-deep-equal": "^1.0.0",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.3.0"
              }
            },
            "ansi-regex": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
              "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
              "dev": true
            },
            "array-find-index": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
              "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
              "dev": true
            },
            "asn1": {
              "version": "0.2.4",
              "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
              "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
              "dev": true,
              "requires": {
                "safer-buffer": "~2.1.0"
              }
            },
            "assert-plus": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
              "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
              "dev": true
            },
            "asynckit": {
              "version": "0.4.0",
              "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
              "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
              "dev": true
            },
            "aws-sign2": {
              "version": "0.7.0",
              "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
              "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
              "dev": true
            },
            "aws4": {
              "version": "1.8.0",
              "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.8.0.tgz",
              "integrity": "sha512-ReZxvNHIOv88FlT7rxcXIIC0fPt4KZqZbOlivyWtXLt8ESx84zd3kMC6iK5jVeS2qt+g7ftS7ye4fi06X5rtRQ==",
              "dev": true
            },
            "bcrypt-pbkdf": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
              "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
              "dev": true,
              "optional": true,
              "requires": {
                "tweetnacl": "^0.14.3"
              }
            },
            "buffer-from": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
              "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
              "dev": true
            },
            "builtin-modules": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz",
              "integrity": "sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=",
              "dev": true
            },
            "camelcase": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
              "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8=",
              "dev": true
            },
            "camelcase-keys": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
              "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
              "dev": true,
              "requires": {
                "camelcase": "^2.0.0",
                "map-obj": "^1.0.0"
              }
            },
            "caseless": {
              "version": "0.12.0",
              "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
              "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
              "dev": true
            },
            "co": {
              "version": "4.6.0",
              "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
              "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
              "dev": true
            },
            "code-point-at": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
              "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
              "dev": true
            },
            "combined-stream": {
              "version": "1.0.7",
              "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.7.tgz",
              "integrity": "sha512-brWl9y6vOB1xYPZcpZde3N9zDByXTosAeMDo4p1wzo6UMOX4vumB+TP1RZ76sfE6Md68Q0NJSrE/gbezd4Ul+w==",
              "dev": true,
              "requires": {
                "delayed-stream": "~1.0.0"
              }
            },
            "concat-stream": {
              "version": "1.6.2",
              "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
              "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
              "dev": true,
              "requires": {
                "buffer-from": "^1.0.0",
                "inherits": "^2.0.3",
                "readable-stream": "^2.2.2",
                "typedarray": "^0.0.6"
              },
              "dependencies": {
                "isarray": {
                  "version": "1.0.0",
                  "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
                  "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
                  "dev": true
                },
                "readable-stream": {
                  "version": "2.3.6",
                  "resolved": "http://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
                  "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
                  "dev": true,
                  "requires": {
                    "core-util-is": "~1.0.0",
                    "inherits": "~2.0.3",
                    "isarray": "~1.0.0",
                    "process-nextick-args": "~2.0.0",
                    "safe-buffer": "~5.1.1",
                    "string_decoder": "~1.1.1",
                    "util-deprecate": "~1.0.1"
                  }
                },
                "string_decoder": {
                  "version": "1.1.1",
                  "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
                  "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
                  "dev": true,
                  "requires": {
                    "safe-buffer": "~5.1.0"
                  }
                }
              }
            },
            "core-util-is": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
              "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
              "dev": true
            },
            "currently-unhandled": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
              "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
              "dev": true,
              "requires": {
                "array-find-index": "^1.0.1"
              }
            },
            "dashdash": {
              "version": "1.14.1",
              "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
              "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0"
              }
            },
            "debug": {
              "version": "3.2.5",
              "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.5.tgz",
              "integrity": "sha512-D61LaDQPQkxJ5AUM2mbSJRbPkNs/TmdmOeLAi1hgDkpDfIfetSrjmWhccwtuResSwMbACjx/xXQofvM9CE/aeg==",
              "dev": true,
              "requires": {
                "ms": "^2.1.1"
              }
            },
            "decamelize": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
              "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
              "dev": true
            },
            "deep-extend": {
              "version": "0.6.0",
              "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
              "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
              "dev": true
            },
            "delayed-stream": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
              "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
              "dev": true
            },
            "ecc-jsbn": {
              "version": "0.1.2",
              "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
              "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
              "dev": true,
              "optional": true,
              "requires": {
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.1.0"
              }
            },
            "electron": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/electron/-/electron-3.0.2.tgz",
              "integrity": "sha512-BsU/KJRPODlEoaOZhsmFTIaG2h1Y28JCrqeTGVqGL+fef/7xQZdHx5ZCStUDXXUSTcoqiHlc5QvLH4PfZFbOmg==",
              "dev": true,
              "requires": {
                "@types/node": "^8.0.24",
                "electron-download": "^4.1.0",
                "extract-zip": "^1.0.3"
              }
            },
            "electron-download": {
              "version": "4.1.1",
              "resolved": "https://registry.npmjs.org/electron-download/-/electron-download-4.1.1.tgz",
              "integrity": "sha512-FjEWG9Jb/ppK/2zToP+U5dds114fM1ZOJqMAR4aXXL5CvyPE9fiqBK/9YcwC9poIFQTEJk/EM/zyRwziziRZrg==",
              "dev": true,
              "requires": {
                "debug": "^3.0.0",
                "env-paths": "^1.0.0",
                "fs-extra": "^4.0.1",
                "minimist": "^1.2.0",
                "nugget": "^2.0.1",
                "path-exists": "^3.0.0",
                "rc": "^1.2.1",
                "semver": "^5.4.1",
                "sumchecker": "^2.0.2"
              }
            },
            "env-paths": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-1.0.0.tgz",
              "integrity": "sha1-QWgTO0K7BcOKNbGuQ5fIKYqzaeA=",
              "dev": true
            },
            "error-ex": {
              "version": "1.3.2",
              "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
              "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
              "dev": true,
              "requires": {
                "is-arrayish": "^0.2.1"
              }
            },
            "extend": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
              "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
              "dev": true
            },
            "extract-zip": {
              "version": "1.6.7",
              "resolved": "https://registry.npmjs.org/extract-zip/-/extract-zip-1.6.7.tgz",
              "integrity": "sha1-qEC0uK9kAyZMjbV/Txp0Mz74H+k=",
              "dev": true,
              "requires": {
                "concat-stream": "1.6.2",
                "debug": "2.6.9",
                "mkdirp": "0.5.1",
                "yauzl": "2.4.1"
              },
              "dependencies": {
                "debug": {
                  "version": "2.6.9",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                  "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                  "dev": true,
                  "requires": {
                    "ms": "2.0.0"
                  }
                },
                "ms": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                  "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                  "dev": true
                }
              }
            },
            "extsprintf": {
              "version": "1.3.0",
              "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
              "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
              "dev": true
            },
            "fast-deep-equal": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-1.1.0.tgz",
              "integrity": "sha1-wFNHeBfIa1HaqFPIHgWbcz0CNhQ=",
              "dev": true
            },
            "fast-json-stable-stringify": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
              "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
              "dev": true
            },
            "fd-slicer": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.0.1.tgz",
              "integrity": "sha1-i1vL2ewyfFBBv5qwI/1nUPEXfmU=",
              "dev": true,
              "requires": {
                "pend": "~1.2.0"
              }
            },
            "find-up": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
              "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
              "dev": true,
              "requires": {
                "path-exists": "^2.0.0",
                "pinkie-promise": "^2.0.0"
              },
              "dependencies": {
                "path-exists": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
                  "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
                  "dev": true,
                  "requires": {
                    "pinkie-promise": "^2.0.0"
                  }
                }
              }
            },
            "forever-agent": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
              "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
              "dev": true
            },
            "form-data": {
              "version": "2.3.2",
              "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.2.tgz",
              "integrity": "sha1-SXBJi+YEwgwAXU9cI67NIda0kJk=",
              "dev": true,
              "requires": {
                "asynckit": "^0.4.0",
                "combined-stream": "1.0.6",
                "mime-types": "^2.1.12"
              },
              "dependencies": {
                "combined-stream": {
                  "version": "1.0.6",
                  "resolved": "http://registry.npmjs.org/combined-stream/-/combined-stream-1.0.6.tgz",
                  "integrity": "sha1-cj599ugBrFYTETp+RFqbactjKBg=",
                  "dev": true,
                  "requires": {
                    "delayed-stream": "~1.0.0"
                  }
                }
              }
            },
            "fs-extra": {
              "version": "4.0.3",
              "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.3.tgz",
              "integrity": "sha512-q6rbdDd1o2mAnQreO7YADIxf/Whx4AHBiRf6d+/cVT8h44ss+lHgxf1FemcqDnQt9X3ct4McHr+JMGlYSsK7Cg==",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "jsonfile": "^4.0.0",
                "universalify": "^0.1.0"
              }
            },
            "get-stdin": {
              "version": "4.0.1",
              "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
              "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4=",
              "dev": true
            },
            "getpass": {
              "version": "0.1.7",
              "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
              "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0"
              }
            },
            "graceful-fs": {
              "version": "4.1.11",
              "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.11.tgz",
              "integrity": "sha1-Dovf5NHduIVNZOBOp8AOKgJuVlg=",
              "dev": true
            },
            "har-schema": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
              "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
              "dev": true
            },
            "har-validator": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.0.tgz",
              "integrity": "sha512-+qnmNjI4OfH2ipQ9VQOw23bBd/ibtfbVdK2fYbY4acTDqKTW/YDp9McimZdDbG8iV9fZizUqQMD5xvriB146TA==",
              "dev": true,
              "requires": {
                "ajv": "^5.3.0",
                "har-schema": "^2.0.0"
              }
            },
            "hosted-git-info": {
              "version": "2.7.1",
              "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.7.1.tgz",
              "integrity": "sha512-7T/BxH19zbcCTa8XkMlbK5lTo1WtgkFi3GvdWEyNuc4Vex7/9Dqbnpsf4JMydcfj9HCg4zUWFTL3Za6lapg5/w==",
              "dev": true
            },
            "http-signature": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
              "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0",
                "jsprim": "^1.2.2",
                "sshpk": "^1.7.0"
              }
            },
            "indent-string": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
              "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
              "dev": true,
              "requires": {
                "repeating": "^2.0.0"
              }
            },
            "inherits": {
              "version": "2.0.3",
              "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
              "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
              "dev": true
            },
            "ini": {
              "version": "1.3.5",
              "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
              "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw==",
              "dev": true
            },
            "is-arrayish": {
              "version": "0.2.1",
              "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
              "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
              "dev": true
            },
            "is-builtin-module": {
              "version": "1.0.0",
              "resolved": "http://registry.npmjs.org/is-builtin-module/-/is-builtin-module-1.0.0.tgz",
              "integrity": "sha1-VAVy0096wxGfj3bDDLwbHgN6/74=",
              "dev": true,
              "requires": {
                "builtin-modules": "^1.0.0"
              }
            },
            "is-finite": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.0.2.tgz",
              "integrity": "sha1-zGZ3aVYCvlUO8R6LSqYwU0K20Ko=",
              "dev": true,
              "requires": {
                "number-is-nan": "^1.0.0"
              }
            },
            "is-fullwidth-code-point": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
              "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
              "dev": true,
              "requires": {
                "number-is-nan": "^1.0.0"
              }
            },
            "is-typedarray": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
              "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
              "dev": true
            },
            "is-utf8": {
              "version": "0.2.1",
              "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
              "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
              "dev": true
            },
            "isarray": {
              "version": "0.0.1",
              "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
              "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8=",
              "dev": true
            },
            "isstream": {
              "version": "0.1.2",
              "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
              "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
              "dev": true
            },
            "jsbn": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
              "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
              "dev": true,
              "optional": true
            },
            "json-schema": {
              "version": "0.2.3",
              "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
              "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
              "dev": true
            },
            "json-schema-traverse": {
              "version": "0.3.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.3.1.tgz",
              "integrity": "sha1-NJptRMU6Ud6JtAgFxdXlm0F9M0A=",
              "dev": true
            },
            "json-stringify-safe": {
              "version": "5.0.1",
              "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
              "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
              "dev": true
            },
            "jsonfile": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
              "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.6"
              }
            },
            "jsprim": {
              "version": "1.4.1",
              "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
              "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
              "dev": true,
              "requires": {
                "assert-plus": "1.0.0",
                "extsprintf": "1.3.0",
                "json-schema": "0.2.3",
                "verror": "1.10.0"
              }
            },
            "load-json-file": {
              "version": "1.1.0",
              "resolved": "http://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
              "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "parse-json": "^2.2.0",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0",
                "strip-bom": "^2.0.0"
              }
            },
            "loud-rejection": {
              "version": "1.6.0",
              "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
              "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
              "dev": true,
              "requires": {
                "currently-unhandled": "^0.4.1",
                "signal-exit": "^3.0.0"
              }
            },
            "map-obj": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
              "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
              "dev": true
            },
            "meow": {
              "version": "3.7.0",
              "resolved": "https://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
              "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
              "dev": true,
              "requires": {
                "camelcase-keys": "^2.0.0",
                "decamelize": "^1.1.2",
                "loud-rejection": "^1.0.0",
                "map-obj": "^1.0.1",
                "minimist": "^1.1.3",
                "normalize-package-data": "^2.3.4",
                "object-assign": "^4.0.1",
                "read-pkg-up": "^1.0.1",
                "redent": "^1.0.0",
                "trim-newlines": "^1.0.0"
              }
            },
            "mime-db": {
              "version": "1.36.0",
              "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.36.0.tgz",
              "integrity": "sha512-L+xvyD9MkoYMXb1jAmzI/lWYAxAMCPvIBSWur0PZ5nOf5euahRLVqH//FKW9mWp2lkqUgYiXPgkzfMUFi4zVDw==",
              "dev": true
            },
            "mime-types": {
              "version": "2.1.20",
              "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.20.tgz",
              "integrity": "sha512-HrkrPaP9vGuWbLK1B1FfgAkbqNjIuy4eHlIYnFi7kamZyLLrGlo2mpcx0bBmNpKqBtYtAfGbodDddIgddSJC2A==",
              "dev": true,
              "requires": {
                "mime-db": "~1.36.0"
              }
            },
            "minimist": {
              "version": "1.2.0",
              "resolved": "http://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
              "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
              "dev": true
            },
            "mkdirp": {
              "version": "0.5.1",
              "resolved": "http://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
              "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
              "dev": true,
              "requires": {
                "minimist": "0.0.8"
              },
              "dependencies": {
                "minimist": {
                  "version": "0.0.8",
                  "resolved": "http://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
                  "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0=",
                  "dev": true
                }
              }
            },
            "ms": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
              "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
              "dev": true
            },
            "normalize-package-data": {
              "version": "2.4.0",
              "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
              "integrity": "sha512-9jjUFbTPfEy3R/ad/2oNbKtW9Hgovl5O1FvFWKkKblNXoN/Oou6+9+KKohPK13Yc3/TyunyWhJp6gvRNR/PPAw==",
              "dev": true,
              "requires": {
                "hosted-git-info": "^2.1.4",
                "is-builtin-module": "^1.0.0",
                "semver": "2 || 3 || 4 || 5",
                "validate-npm-package-license": "^3.0.1"
              }
            },
            "nugget": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/nugget/-/nugget-2.0.1.tgz",
              "integrity": "sha1-IBCVpIfhrTYIGzQy+jytpPjQcbA=",
              "dev": true,
              "requires": {
                "debug": "^2.1.3",
                "minimist": "^1.1.0",
                "pretty-bytes": "^1.0.2",
                "progress-stream": "^1.1.0",
                "request": "^2.45.0",
                "single-line-log": "^1.1.2",
                "throttleit": "0.0.2"
              },
              "dependencies": {
                "debug": {
                  "version": "2.6.9",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                  "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                  "dev": true,
                  "requires": {
                    "ms": "2.0.0"
                  }
                },
                "ms": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                  "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                  "dev": true
                }
              }
            },
            "number-is-nan": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
              "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
              "dev": true
            },
            "oauth-sign": {
              "version": "0.9.0",
              "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
              "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
              "dev": true
            },
            "object-assign": {
              "version": "4.1.1",
              "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
              "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
              "dev": true
            },
            "object-keys": {
              "version": "0.4.0",
              "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-0.4.0.tgz",
              "integrity": "sha1-KKaq50KN0sOpLz2V8hM13SBOAzY=",
              "dev": true
            },
            "parse-json": {
              "version": "2.2.0",
              "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
              "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
              "dev": true,
              "requires": {
                "error-ex": "^1.2.0"
              }
            },
            "path-exists": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
              "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
              "dev": true
            },
            "path-type": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
              "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0"
              }
            },
            "pend": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
              "integrity": "sha1-elfrVQpng/kRUzH89GY9XI4AelA=",
              "dev": true
            },
            "performance-now": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
              "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
              "dev": true
            },
            "pify": {
              "version": "2.3.0",
              "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
              "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
              "dev": true
            },
            "pinkie": {
              "version": "2.0.4",
              "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
              "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
              "dev": true
            },
            "pinkie-promise": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
              "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
              "dev": true,
              "requires": {
                "pinkie": "^2.0.0"
              }
            },
            "pretty-bytes": {
              "version": "1.0.4",
              "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-1.0.4.tgz",
              "integrity": "sha1-CiLoIQYJrTVUL4yNXSFZr/B1HIQ=",
              "dev": true,
              "requires": {
                "get-stdin": "^4.0.1",
                "meow": "^3.1.0"
              }
            },
            "process-nextick-args": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
              "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw==",
              "dev": true
            },
            "progress-stream": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/progress-stream/-/progress-stream-1.2.0.tgz",
              "integrity": "sha1-LNPP6jO6OonJwSHsM0er6asSX3c=",
              "dev": true,
              "requires": {
                "speedometer": "~0.1.2",
                "through2": "~0.2.3"
              }
            },
            "psl": {
              "version": "1.1.29",
              "resolved": "https://registry.npmjs.org/psl/-/psl-1.1.29.tgz",
              "integrity": "sha512-AeUmQ0oLN02flVHXWh9sSJF7mcdFq0ppid/JkErufc3hGIV/AMa8Fo9VgDo/cT2jFdOWoFvHp90qqBH54W+gjQ==",
              "dev": true
            },
            "punycode": {
              "version": "1.4.1",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
              "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
              "dev": true
            },
            "qs": {
              "version": "6.5.2",
              "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
              "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
              "dev": true
            },
            "rc": {
              "version": "1.2.8",
              "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
              "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
              "dev": true,
              "requires": {
                "deep-extend": "^0.6.0",
                "ini": "~1.3.0",
                "minimist": "^1.2.0",
                "strip-json-comments": "~2.0.1"
              }
            },
            "read-pkg": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
              "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
              "dev": true,
              "requires": {
                "load-json-file": "^1.0.0",
                "normalize-package-data": "^2.3.2",
                "path-type": "^1.0.0"
              }
            },
            "read-pkg-up": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
              "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
              "dev": true,
              "requires": {
                "find-up": "^1.0.0",
                "read-pkg": "^1.0.0"
              }
            },
            "readable-stream": {
              "version": "1.1.14",
              "resolved": "http://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
              "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
              "dev": true,
              "requires": {
                "core-util-is": "~1.0.0",
                "inherits": "~2.0.1",
                "isarray": "0.0.1",
                "string_decoder": "~0.10.x"
              }
            },
            "redent": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
              "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
              "dev": true,
              "requires": {
                "indent-string": "^2.1.0",
                "strip-indent": "^1.0.1"
              }
            },
            "repeating": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
              "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
              "dev": true,
              "requires": {
                "is-finite": "^1.0.0"
              }
            },
            "request": {
              "version": "2.88.0",
              "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
              "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
              "dev": true,
              "requires": {
                "aws-sign2": "~0.7.0",
                "aws4": "^1.8.0",
                "caseless": "~0.12.0",
                "combined-stream": "~1.0.6",
                "extend": "~3.0.2",
                "forever-agent": "~0.6.1",
                "form-data": "~2.3.2",
                "har-validator": "~5.1.0",
                "http-signature": "~1.2.0",
                "is-typedarray": "~1.0.0",
                "isstream": "~0.1.2",
                "json-stringify-safe": "~5.0.1",
                "mime-types": "~2.1.19",
                "oauth-sign": "~0.9.0",
                "performance-now": "^2.1.0",
                "qs": "~6.5.2",
                "safe-buffer": "^5.1.2",
                "tough-cookie": "~2.4.3",
                "tunnel-agent": "^0.6.0",
                "uuid": "^3.3.2"
              }
            },
            "safe-buffer": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
              "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
              "dev": true
            },
            "safer-buffer": {
              "version": "2.1.2",
              "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
              "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
              "dev": true
            },
            "semver": {
              "version": "5.5.1",
              "resolved": "https://registry.npmjs.org/semver/-/semver-5.5.1.tgz",
              "integrity": "sha512-PqpAxfrEhlSUWge8dwIp4tZnQ25DIOthpiaHNIthsjEFQD6EvqUKUDM7L8O2rShkFccYo1VjJR0coWfNkCubRw==",
              "dev": true
            },
            "signal-exit": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
              "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=",
              "dev": true
            },
            "single-line-log": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/single-line-log/-/single-line-log-1.1.2.tgz",
              "integrity": "sha1-wvg/Jzo+GhbtsJlWYdoO1e8DM2Q=",
              "dev": true,
              "requires": {
                "string-width": "^1.0.1"
              }
            },
            "spdx-correct": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.0.1.tgz",
              "integrity": "sha512-hxSPZbRZvSDuOvADntOElzJpenIR7wXJkuoUcUtS0erbgt2fgeaoPIYretfKpslMhfFDY4k0MZ2F5CUzhBsSvQ==",
              "dev": true,
              "requires": {
                "spdx-expression-parse": "^3.0.0",
                "spdx-license-ids": "^3.0.0"
              }
            },
            "spdx-exceptions": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.1.0.tgz",
              "integrity": "sha512-4K1NsmrlCU1JJgUrtgEeTVyfx8VaYea9J9LvARxhbHtVtohPs/gFGG5yy49beySjlIMhhXZ4QqujIZEfS4l6Cg==",
              "dev": true
            },
            "spdx-expression-parse": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
              "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
              "dev": true,
              "requires": {
                "spdx-exceptions": "^2.1.0",
                "spdx-license-ids": "^3.0.0"
              }
            },
            "spdx-license-ids": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.1.tgz",
              "integrity": "sha512-TfOfPcYGBB5sDuPn3deByxPhmfegAhpDYKSOXZQN81Oyrrif8ZCodOLzK3AesELnCx03kikhyDwh0pfvvQvF8w==",
              "dev": true
            },
            "speedometer": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/speedometer/-/speedometer-0.1.4.tgz",
              "integrity": "sha1-mHbb0qFp0xFUAtSObqYynIgWpQ0=",
              "dev": true
            },
            "sshpk": {
              "version": "1.14.2",
              "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.14.2.tgz",
              "integrity": "sha1-xvxhZIo9nE52T9P8306hBeSSupg=",
              "dev": true,
              "requires": {
                "asn1": "~0.2.3",
                "assert-plus": "^1.0.0",
                "bcrypt-pbkdf": "^1.0.0",
                "dashdash": "^1.12.0",
                "ecc-jsbn": "~0.1.1",
                "getpass": "^0.1.1",
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.0.2",
                "tweetnacl": "~0.14.0"
              }
            },
            "string-width": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
              "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
              "dev": true,
              "requires": {
                "code-point-at": "^1.0.0",
                "is-fullwidth-code-point": "^1.0.0",
                "strip-ansi": "^3.0.0"
              }
            },
            "string_decoder": {
              "version": "0.10.31",
              "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
              "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ=",
              "dev": true
            },
            "strip-ansi": {
              "version": "3.0.1",
              "resolved": "http://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
              "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
              "dev": true,
              "requires": {
                "ansi-regex": "^2.0.0"
              }
            },
            "strip-bom": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
              "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
              "dev": true,
              "requires": {
                "is-utf8": "^0.2.0"
              }
            },
            "strip-indent": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
              "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
              "dev": true,
              "requires": {
                "get-stdin": "^4.0.1"
              }
            },
            "strip-json-comments": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
              "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
              "dev": true
            },
            "sumchecker": {
              "version": "2.0.2",
              "resolved": "https://registry.npmjs.org/sumchecker/-/sumchecker-2.0.2.tgz",
              "integrity": "sha1-D0LBDl0F2l1C7qPlbDOZo31sWz4=",
              "dev": true,
              "requires": {
                "debug": "^2.2.0"
              },
              "dependencies": {
                "debug": {
                  "version": "2.6.9",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                  "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                  "dev": true,
                  "requires": {
                    "ms": "2.0.0"
                  }
                },
                "ms": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                  "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                  "dev": true
                }
              }
            },
            "throttleit": {
              "version": "0.0.2",
              "resolved": "https://registry.npmjs.org/throttleit/-/throttleit-0.0.2.tgz",
              "integrity": "sha1-z+34jmDADdlpe2H90qg0OptoDq8=",
              "dev": true
            },
            "through2": {
              "version": "0.2.3",
              "resolved": "https://registry.npmjs.org/through2/-/through2-0.2.3.tgz",
              "integrity": "sha1-6zKE2k6jEbbMis42U3SKUqvyWj8=",
              "dev": true,
              "requires": {
                "readable-stream": "~1.1.9",
                "xtend": "~2.1.1"
              }
            },
            "tough-cookie": {
              "version": "2.4.3",
              "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
              "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
              "dev": true,
              "requires": {
                "psl": "^1.1.24",
                "punycode": "^1.4.1"
              }
            },
            "trim-newlines": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz",
              "integrity": "sha1-WIeWa7WCpFA6QetST301ARgVphM=",
              "dev": true
            },
            "tunnel-agent": {
              "version": "0.6.0",
              "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
              "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
              "dev": true,
              "requires": {
                "safe-buffer": "^5.0.1"
              }
            },
            "tweetnacl": {
              "version": "0.14.5",
              "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
              "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
              "dev": true,
              "optional": true
            },
            "typedarray": {
              "version": "0.0.6",
              "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
              "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
              "dev": true
            },
            "universalify": {
              "version": "0.1.2",
              "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
              "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
              "dev": true
            },
            "util-deprecate": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
              "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
              "dev": true
            },
            "uuid": {
              "version": "3.3.2",
              "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
              "integrity": "sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA==",
              "dev": true
            },
            "validate-npm-package-license": {
              "version": "3.0.4",
              "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
              "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
              "dev": true,
              "requires": {
                "spdx-correct": "^3.0.0",
                "spdx-expression-parse": "^3.0.0"
              }
            },
            "verror": {
              "version": "1.10.0",
              "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
              "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
              "dev": true,
              "requires": {
                "assert-plus": "^1.0.0",
                "core-util-is": "1.0.2",
                "extsprintf": "^1.2.0"
              }
            },
            "xtend": {
              "version": "2.1.2",
              "resolved": "https://registry.npmjs.org/xtend/-/xtend-2.1.2.tgz",
              "integrity": "sha1-bv7MKk2tjmlixJAbM3znuoe10os=",
              "dev": true,
              "requires": {
                "object-keys": "~0.4.0"
              }
            },
            "yauzl": {
              "version": "2.4.1",
              "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.4.1.tgz",
              "integrity": "sha1-lSj0QtqxsihOWLQ3m7GU4i4MQAU=",
              "dev": true,
              "requires": {
                "fd-slicer": "~1.0.1"
              }
            }
          }
        }
        `,
      },  
      {
        name: "window.js",
        path: "activity-monitor",
        content: `const os = require('os')
        var chart = null;
        var lastMeasureTimes = [];
        
        function setLastMeasureTimes(cpus) {
          for (let i = 0; i < cpus.length; i++) {
            lastMeasureTimes[i] = getCpuTimes(cpus[i]);
          }
        }
        
        function getDatasets() {
          const datasets = []
          const cpus = os.cpus()
        
          for (let i = 0; i < cpus.length; i++) {
            const cpu = cpus[i]
            const cpuData = {
              data: getCpuTimes(cpu),
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ]
            }
            datasets.push(cpuData)
          }
          testCpus = os.cpus();
          return datasets;
        }
        
        function updateDatasets() {
          const cpus = os.cpus()
          for (let i = 0; i < cpus.length; i++) {
            const cpu = cpus[i]
            chart.data.datasets[i].data = getCpuTimes(cpu);
            chart.data.datasets[i].data[0] -= lastMeasureTimes[i][0];
            chart.data.datasets[i].data[1] -= lastMeasureTimes[i][1];
            chart.data.datasets[i].data[2] -= lastMeasureTimes[i][2];
          }
          chart.update();
          setLastMeasureTimes(cpus);
        }
        
        function getCpuTimes(cpu) {
          return [
            cpu.times.user,
            cpu.times.sys,
            cpu.times.idle,
          ];
        }
        
        function drawChart() {
          chart = new Chart($('.chart'), {
            type: 'doughnut',
            data: {
              labels: [
                'User Time (ms)',
                'System Time (ms)',
                'Idle Time (ms)'
              ],
              datasets: getDatasets()
            },
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: 'CPU Activity',
                fontColor: 'rgb(250, 250, 250)',
                fontSize: 16
              },
              legend: {
                display: true,
                labels: {
                  fontColor: 'rgb(250, 250, 250)',
                  fontSize: 12
                }
              }
            }
          });
        
          setInterval(updateDatasets, 1000);
        }
        
        $(() => {
          setLastMeasureTimes(os.cpus());
          drawChart();
        })`,
      },  
      
      
    ],
  },
  photoshop: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "",
        content: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Extension Title</title>
          </head>
          <body style="background: white;">
            Hello World
          </body>
        </html>`,
      },
      
      
      
      {
        name: "manifest.xml",
        path: "CSXS",
        content: `
        <?xml version="1.0" encoding="UTF-8"?>
        <!-- 1 -->
        <ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ExtensionBundleId="com.myextension" ExtensionBundleVersion="1.0.0" Version="9.0">
           <!-- 2 -->
           <ExtensionList>
              <Extension Id="com.myextension.panel" Version="0.0.1" />
           </ExtensionList>
           <ExecutionEnvironment>
              <!-- 3 -->
              <HostList>
                 <Host Name="PHSP" Version="20" />
                 <Host Name="PHXS" Version="20" />
              </HostList>
              <LocaleList>
                 <Locale Code="All" />
              </LocaleList>
              <RequiredRuntimeList>
                 <!-- 4 -->
                 <RequiredRuntime Name="CSXS" Version="9.0" />
              </RequiredRuntimeList>
           </ExecutionEnvironment>
           <DispatchInfoList>
              <Extension Id="com.myextension.panel">
                 <DispatchInfo>
                    <Resources>
                       <!-- 5 -->
                       <MainPath>./index.html</MainPath>
                    </Resources>
                    <UI>
                       <!-- 6 -->
                       <Type>Panel</Type>
                       <!-- 7 -->
                       <Menu>My Extension</Menu>
                       <Geometry>
                          <!-- 8 -->
                          <Size>
                             <Height>500</Height>
                             <Width>350</Width>
                          </Size>
                       </Geometry>
                    </UI>
                 </DispatchInfo>
              </Extension>
           </DispatchInfoList>
        </ExtensionManifest>`,
      },
      
      {
        name: ".debug",
        path: "",
        content: `
        <ExtensionList>
          <Extension Id="com.example.helloworld">
            <HostList>
              <Host Name="PHXS" Port="8088"/>
              <Host Name="PHSP" Port="8088"/>
            </HostList>
          </Extension>
        </ExtensionList>`,
      },  
       
      
      
    ],
  },
  illustrator: {
    library: [
      {
        name: "Express",
        icon: "fab fa-node-js",
        package: "express",
      },
      {
        name: "Mongoose",
        icon: "fab fa-node-js",
        package: "mongoose",
      },
      {
        name: "Cors",
        icon: "fab fa-node-js",
        package: "cors",
      },
      {
        name: "Dotenv",
        icon: "fab fa-node-js",
        package: "dotenv",
      },
      {
        name: "Express-Fileupload",
        icon: "fab fa-node-js",
        package: "express-fileupload",
      },
      {
        name: "Express-Validator",
        icon: "fab fa-node-js",
        package: "express-validator",
      },
    ],
    files: [ 
      {
        name: "index.html",
        path: "",
        content: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Extension Title</title>
          </head>
          <body style="background: white;">
            Hello World
          </body>
        </html>`,
      },
      
      
      
      {
        name: "manifest.xml",
        path: "CSXS",
        content: `
        <?xml version="1.0" encoding="UTF-8"?>
        <!-- 1 -->
        <ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ExtensionBundleId="com.myextension" ExtensionBundleVersion="1.0.0" Version="9.0">
           <!-- 2 -->
           <ExtensionList>
              <Extension Id="com.myextension.panel" Version="0.0.1" />
           </ExtensionList>
           <ExecutionEnvironment>
              <!-- 3 -->
              <HostList>
                 <Host Name="PHSP" Version="20" />
                 <Host Name="PHXS" Version="20" />
              </HostList>
              <LocaleList>
                 <Locale Code="All" />
              </LocaleList>
              <RequiredRuntimeList>
                 <!-- 4 -->
                 <RequiredRuntime Name="CSXS" Version="9.0" />
              </RequiredRuntimeList>
           </ExecutionEnvironment>
           <DispatchInfoList>
              <Extension Id="com.myextension.panel">
                 <DispatchInfo>
                    <Resources>
                       <!-- 5 -->
                       <MainPath>./index.html</MainPath>
                    </Resources>
                    <UI>
                       <!-- 6 -->
                       <Type>Panel</Type>
                       <!-- 7 -->
                       <Menu>My Extension</Menu>
                       <Geometry>
                          <!-- 8 -->
                          <Size>
                             <Height>500</Height>
                             <Width>350</Width>
                          </Size>
                       </Geometry>
                    </UI>
                 </DispatchInfo>
              </Extension>
           </DispatchInfoList>
        </ExtensionManifest>`,
      },
      
      {
        name: ".debug",
        path: "",
        content: `
        <ExtensionList>
          <Extension Id="com.example.helloworld">
            <HostList>
              <Host Name="PHXS" Port="8088"/>
              <Host Name="PHSP" Port="8088"/>
            </HostList>
          </Extension>
        </ExtensionList>`,
      },  
       
      
      
    ],
  },


};
     

const app_config = {
  apiUrl: "http://localhost:5000",
  title: "Node Guardian",
  themeColor: "#3e863d",
  status: {
    login: {
      success: 200,
      fail: 401,
    },
  },
  options: {
    webApp: {
      fullstack: {
        mern: {
          frontend: "react",
          backend: "express",
          generate: true,
          multi: true,
        },
        mevn: {
          frontend: "vue",
          backend: "express",
          generate: true,
          multi: true,
        },
        mean: {
          frontend: "angular",
          backend: "express",
          generate: true,
          multi: true,
        },
        pern: {
          frontend: "react",
          backend: "express",
          generate: true,
          multi: true,
        },
        fern: {
          frontend: "react",
          backend: "express",
          generate: true,
          multi: true,
        },
      },
      frontend: {
        react: {
          generate: true,
          main: "react",
        },
        vue: {
          generate: true,
          main: "vue",
        },
        angular: {
          generate: true,
          main: "angular",
        },
      },

      backend: {
        express: {
          generate: true,
          main: "express",
        },

        nest: {
          generate: true,
          main: "nest",
        },
      },
    },
    mobileApp: {
      "react-native": {
        generate: true, 
        main : "react-native"
      },
      ionic: {
        generate: true,
        main : "ionic"
      },
      "native-script": {
        generate: true,
        main : "native-script"
      },
    },
    desktopApp: {
      electron: {
        generate: true,
        main : "electron"
      },
      nwjs: {
        generate: true,
        main : "nwjs"
      },
    },
    plugin: {
      photoshop: {
          generate: true,
          main : "photoshop"
      },
      illustrator: {
        generate: true,
          main : "illustrator"
      },
      
    },
    extension: {
      browser: {
        chrome: {
          generate: true,
          main: "chrome",
        },
        firefox: {
          generate: true,
          main: "firefox",
        },
      },
    },
  },
};

export default app_config;
