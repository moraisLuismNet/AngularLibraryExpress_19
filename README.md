## AngularLibraryExpress
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

AngularLibraryExpress/
├───app/  
│   ├───guards/  
│   │   └───auth-guard.service.ts  
│   ├───library/  
│   │   ├───authors/  
│   │   │   ├───authors.component.css  
│   │   │   ├───authors.component.html  
│   │   │   └───authors.component.ts  
│   │   ├───books/  
│   │   │   ├───books.component.css  
│   │   │   ├───books.component.html  
│   │   │   └───books.component.ts  
│   │   ├───publishing-houses/  
│   │   │   ├───publishing-houses.component.css  
│   │   │   ├───publishing-houses.component.html  
│   │   │   └───publishing-houses.component.ts  
│   │   ├───interfaces/  
│   │   │   └───login.interfaces.ts  
│   │   ├───library.component.html  
│   │   ├───library.component.ts  
│   │   ├───library.interface.ts  
│   │   └───library.service.ts  
│   ├───services/  
│   │   └───app.service.ts  
│   ├───shared/  
│   │   ├───navbar/  
│   │   │   ├───navbar.component.html  
│   │   │   └───navbar.component.ts  
│   ├───start/  
│   │   ├───login/  
│   │   │   ├───login.component.css  
│   │   │   ├───login.component.html  
│   │   │   └───login.component.ts  
│   │   ├───not-found/  
│   │   │   ├───not-found.component.css  
│   │   │   ├───not-found.component.html  
│   │   │   └───not-found.component.ts  
│   ├───app-routing.module.ts  
│   ├───app.component.html  
│   ├───app.component.ts  
│   ├───app.config.ts  
│   └───routes.ts  
├───environments/  
│   ├───environment.development.ts  
│   └───environment.ts  
├───angular.json  
└───package.json  

![AngularLibraryExpress](img/1.png)
![AngularLibraryExpress](img/2.png)
![AngularLibraryExpress](img/3.png)


## environment

```
export const environment = {
  urlAPI: 'http://localhost:3000/',
};

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

