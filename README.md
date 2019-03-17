    Application must be deployed in the same domain as the API endpoint or 
    API should set proper access control response headers eg: Access-Control-Allow-Origin: *

    ------------------------------------------------------------------------------------------------    
    Running the application

    Method 1
        copy the content of the build folder to a static web server (folder name eacras)       
        Access index.html file

    Method 2
        Install Node (node must be in the classpath)
        Go in to the project folder using command line

        Edit Config.js file to set correct API end point
        export const API_ENDPOINT = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars';

    Install dependancies 
        run command - npm install
    Start the app
        run command - npm start
    Go to - http://localhost:3000

    Method 3
        Install Node (node must be in the classpath)
        Go in to the project folder using command line

        dit Config.js file to set correct API end point
        export const API_ENDPOINT = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars';

        Install dependancies
            run command - npm install
        Build the app
            run command - npm run build
        Deploy    
            copy the content of build folder to a static web server        
            Access index.html file
    --------------------------------------------------------------------------------------------------------

    Using NgInx as a reverse proxy to bypass CORS
        Edit src/Config.js 
            API_ANDPOINT = '/api/v1/cars';
    
        Build React app - Method 3 above
        copy the content of build folder to nginx_home/html/eacars
            
        NgInx server configuration
            conf/nginx.conf
                 location / {
                    root   html/eacars;
                    try_files $uri /index.html;		
                }
                location /api/v1/cars{
                    proxy_pass http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars;	
                }
                location ~ \.css {
                        add_header  Content-Type    text/css;
                }
                location ~ \.js {
                        add_header  Content-Type    application/x-javascript;
                }	    
        
    
    
