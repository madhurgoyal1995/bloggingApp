# BloggingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##  To setup local json-server on you machine

Follow below steps:

1. Create a folder named => server.
2. Copy db.json present in extras folder.
3. Open gitbash.
4. Create a package.json file by using command npm init 
5. Now, install json server using command  npm i json-server
6. global install npm install  -g json-server
7. Start json server json-server --watch db.json
8. If local setup done than in blogs and users services change routes links to https://localhost:3000/blogs , https://localhost:3000/users resp.

