# UIT: User Interface Toolkit
The User Interface Toolkit is a library with components and other resources for Angular applications. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
The library project has dependencies that require
* Node 6.9.0 or higher
* NPM 3 or higher
* Angular CLI 1.6 or higher (for Playground and Demo application)

### Installing
To get the project for local development:
```
git clone https://github.com/Wampe/uit.git
cd uit
npm install
```
When all packages are installed, create a first build of the library source.
```
npm run build:lib
```
## Usage
The project has three parts.
* UIT library source 
* Playground app
* Demo application

There are some `NPM scripts` given for the usage of the several parts.

### UIT library
```
npm run build:lib
```
You will find the output in the dist folder. The build also provides a copy of the library output into the `node_modules` folder that works for both Angular CLI based applications (playground and demo app) as source of the library. 

### Playground
The Playground app is for tests of usage and to play with the implementation. This is the area of chaos!
To start the Playground locally just use the NPM script
```
npm run start:playground
```
and open the app in the Browser. The predefined port to serve the playground app is 4200.

### Demo application
The Demo application is for the demonstration of all previous implementations. It will get extend with every new library ressource. Currently the app is only locally. In the future the app shall get published to a website.
To start the Demo app locally just use the NPM script
```
npm run start:demo
```
and open the app in the Browser. The predefined port to serve the playground app is 4201.

## Deployment
Currently it is not planned to publish the library at npmjs.com

### Consuming the library in a Angular application (via GitHub)
```
npm install --save git+https://git@github.com/Wampe/uit.git
```

### Consuming the library in a Angular application (locally via link)
At first create a build output of the library.
```
npm run build:lib
```
Link the ouput in the dist folder (subfolder uit) via 
```
cd dist/uit
npm link
```
Navigate to the root folder of the consuming Angular app and create a symlink to it.
```
cd path/to/the/app
npm link @wampe/uit
```
Now you can consume the library locally.

### Deployment of the Demo application
At first create a build output of the library.
```
npm run build:lib
```
After this create a build of the Demo application by using the NPM script 
```
npm run build:demo
```
Take the output in the dist folder (subfolder demo-app) and upload it to your site.

## Built With

* [Angular CLI](https://github.com/angular/angular-cli) 
* [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library) 

## Contributing
At the moment the project is still in its infancy. When the first implementations will given the possibility for submitting issues and pull requets will get started a.s.a.p.

## License
This project is licensed under the MIT License.
