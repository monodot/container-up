# container-up
Simple demo of building and running a container

Assuming you already have Docker installed, to build the container, run:

    $ docker build -t mywebsite .

This will pull the Apache HTTP server image from Docker Hub and build. Then, to run the container:

    $ docker run -p 8080:80 mywebsite

The container will start, and you can then access the website at `http://localhost:8080`.


