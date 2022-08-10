# Website repository

## Installation

clone repo:
```
git clone https://github.com/ThomasMott/fg.git
```
cd into root folder and install dependencies:
```
npm install
```

## Gulp Css

To gulp the scss into a clean css file follow the steps below:

cd into root folder and run:
```
gulp
```
This will automatically watch and compile all.css and dark.css when files are saved in the /scss folder

### Gulp issues

If encountering issues:

Make sure Gulp is installed globally

```npm install gulp --global```

If using Windows you may need to make sure it can run unrestricted. Open Powershell and run:

```Set-ExecutionPolicy Unrestricted```


## Local host
To run the project locally use [liveserver plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Right click on index.html and click Open with Live Server


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
