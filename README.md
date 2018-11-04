# Entity Watcher


This is a react-native Android/iOS application for showing a list of watch list of entites using https://api.iextrading.com.User can search for an entity by its name and then can add in to its list.

1. All the entities name list will be fetched first and then will be saved for future for fast response. 
2. Once an entity is added then it can be deleted as well later. 
3. All entities can be fetch again using pull to refresh. 


This is developed on React native with Redux architecture.

Other useful libraries used in this project are:- 
1. Redux-persist for offline compatibility. 
2. redux-logger for development purposes. 
3. redux-thunk for handling async calls. 



## Getting Started

### React-native environment set

....
 follow official website of react-native for setting up react-native environment in to your machine.

https://facebook.github.io/react-native/docs/getting-started.html 
....

* Make sure `nodejs` and `yarn` are installed
* React Native CLI is needed, do `npm install -g react-native-cli`
* clone the repo `git clone https://github.com/Nasirilahi/watcher.git`
* move into the project directory and
* Run `yarn install` or `npm install` to install the dependencies
* Run `react-native link` command to link all binaries files

 After installing dependencies run your server by running command :- 
  
  Now create build for both platform one after another Android/iOS

```
$ react-native run-android
```



```
$ react-native run-ios
```
