# GamesApp

Don't use it directly in Angular CLI (unless environment variables are created).
Environment variables are created based on the .env file.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Steps to create environment variables:
1. Clone the `.env.template` file and rename it to `.env`
2. Fill environment variables accordingly
3. Create Angular Envs (optional) with command:
```
npm run envs
```


## Development server
Run the next command for a dev server.
```
npm run start
```
In case the environment variables are already created, you can use `ng serve` command.

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run the next command to build the project.
```
npm run build
```
In case the environment variables are already created, you can use `ng build` command.

The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
