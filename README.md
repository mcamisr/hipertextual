#  COF Test Automation Project

***
This project uses Cucumber,javascript and WebdriverIO to automate testing in a web application. The project structure is designed to facilitate the scalability and maintenance of the tests.

## Prerequisites

Make sure you have Node. js and npm installed on your machine. You can download them from [https://nodejs. org/](https://nodejs.org/) and create environment variables.

## Installation

1. Clone this repository:

```bash
git clone https://github.com.mcas.ms/gorefabrics/drupal-automated-testing-tool-fabrics
git cd your-project
```

2. Install the dependencies:

```bash
npm install 
```


The  report is generated with the command:

```bash
npm run report
```
To see the allure report, enter the allure report folder and open the index file with liver server plugin
## Setting

* Open the wdio.conf.js file to configure the WebdriverIO options according to your needs.
* Configure the paths and URLs in the corresponding files in the config directory.

## Project Structure

```
├── src .................................................................. contains the scripts to run the project  
│   ├── features .......................................................... Contains feature definition files written in Gherkin.
│   |    └── search-news.feature..................................................... 
│   │        
│   ├── steps definitions ............................................................. Contains the Cucumber step implementation files.
|   │   └── search-news.steps.js..................................................... 
│   │   
|   └── pageObjects ................................................... Contains page objects to encapsulate interaction with user interface elements.
|     └── search-news.page.js...................................................... 
│      
|  
├── package-lock.json ................................................... a lockfile that captures the exact versions of packages and their dependencies
├── wdio.conf.js ........................................................  Main config file
├── package.json ........................................................  Dependencies file
├── gitignore ........................................................  <File specifying which files should be ignored


```
## Testing execution
To run all the tests, use the following command:

```bash
npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)