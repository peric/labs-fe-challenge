# LabsFeChallenge

[![CircleCI](https://circleci.com/gh/peric/labs-fe-challenge.svg?style=svg)](https://circleci.com/gh/peric/labs-fe-challenge)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Notes from the Author

* I followed the instructions for most of the tasks, but somewhere I also took a bit different approach. Even though, we are not talking about any critical changes. i.e. by default, all the posts are shown, then user has an ability to filter by "all", "odd" or "even" types.
* Part of the task is related to data modification (e.g. "_...only posts with an odd ID remain_", "_Data should also be modified so that the "title" property text value is all uppercase_"). For odd ids, I am filtering those in the component (on request), and uppercase title is modified in the template. I did not want to do this modifications before (i.e. in service) so I took mentioned approach. 
* Current project structure is something that I took mostly from [Angular documentation](https://angular.io/guide/styleguide#overall-structural-guidelines). I must admit that some things are still not completely logical for me, and I am missing that Angular community is not enforcing any specific structure, but just suggesting.
* Since project has `shared` and `core` modules, I have added all the shared visible components and helpers (e.g. navigation, pipes) to `shared` module, and all the core components and helpers (e.g. loader, interceptor, errors handler) to `core` module. Because of that, I am then importing `CoreModule` to `SharedModule`, and then `SharedModule` to all the other modules. 
* \>80% of code is covered, but I am not sure if I took the best approach for written tests. I have found quite some different examples, so I have tried to get the best of all worlds.
* There are only unit tests, without end-to-end tests.

## Setup

```bash
git clone git@github.com:peric/labs-fe-challenge.git
cd labs-fe-challenge
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
