    Application must be deployed in the same domain as the API endpoint or 
    API should set proper access control response headers eg: Access-Control-Allow-Origin: *

    Edit Config.js file to set correct API end point
        export const API_ENDPOINT = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars';


    ------------------------------------------------------------------------------------------------    
    Running the application
        Install Node (node must be in the classpath)
        Go in to the project folder using command line

    Method 1
        copy the content of the build folder to a static web server (folder name eacras)       
        Access index.html file

    Method 2
        Install dependancies 
            run command - npm install
        Start the app
            run command - npm start
        Go to - ttp://localhost:3000

    Method 3
        Install dependancies
            run command - npm install
        Build the app
            run command - npm run build
        Deploy    
            copy the content of build folder to a static web server        
            Access index.html file
