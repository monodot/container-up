# java-hello-world

A ReallySimple(TM) standalone Java application which says _"Hello world!"_. It also comes with a Dockerfile which builds a container image, based on the [openjdk image on DockerHub](https://hub.docker.com/_/openjdk/)

To build:

    javac HelloWorld.java
    
To build a container:

    docker build -t java-hello-world .

To run it:

    docker run java-hello-world
