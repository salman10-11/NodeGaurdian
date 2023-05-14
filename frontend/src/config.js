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
        name: "App.js",
        path: "src",
        content: `import React from 'react';
  import './App.css';
  
  function App() {
  return (
  <div className="App">
      <h1>React Application</h1>
  </div>
  );
  }
  
  export default App;`,
      },
      {
        name: "index.css",
        path: "src",
        content: "",
      },
      {
        name: "App.css",
        path: "src",
        content: "",
      },
      {
        name: "package.json",
        path: "",
        content: `{
  "name": "react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
  "react": "^17.0.1",
  "react-dom": "^17.0.1",
  "react-scripts": "4.0.1",
  "web-vitals": "^0.2.4"
  },
  "scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
  },
  "eslintConfig": {
  "extends": [
      "react-app",
      "react-app/jest"
  ]
  },
  "browserslist": {
  "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
  ],
  "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
  ]
  }
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
              <router-link class="welcome__button" tag="button" :to="\`/vehicles/${region.key}\`">
                <img class="welcome__img" :src="require(\`@/assets/${region.key}.png\`)"/>
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
        },
        mevn: {
          frontend: "vue",
          backend: "express",
          generate: true,
        },
        mean: {
          frontend: "angular",
          backend: "express",
          generate: true,
        },
        pern: {
          frontend: "react",
          backend: "express",
          generate: true,
        },
        fern: {
          frontend: "react",
          backend: "express",
          generate: true,
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
      "react-native": {},
      ionic: {},
      "native-script": {},
    },
    desktopApp: {
      electron: {},
      nwjs: {},
    },
    plugin: {
      photoshop: {},
      illustrator: {},
      "after-effects": {},
      premiere: {},
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
