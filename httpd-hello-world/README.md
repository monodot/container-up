# httpd-hello-world
Simple demo of building and running a static website on Apache HTTP Server, in a container

## Build and run locally

Assuming you already have Docker installed, to build the container, run:

    $ docker build -t mywebsite .

This will pull the Apache HTTP server image from Docker Hub and build. Then, to run the container:

    $ docker run -p 8080:80 mywebsite

The container will start, and you can then access the website at `http://localhost:8080`.

## Build and deploy in OpenShift

We can't use the regular `Dockerfile`, because it uses the `httpd` image, which runs as root.

So there's a separate `Dockerfile.openshift` for OpenShift. This uses the Apache image from the Red Hat registry instead, which runs as a non-root user.

### Using the template provided

To build and deploy the app in an OpenShift cluster:

    oc apply -f .openshift/template.yml | oc apply -f -

### Using an oc new-app one-liner

You can create this setup without a template, using the `oc new-app` command, and and some `jq` patch magic, to set the path to the Dockerfile:

    oc new-app httpd:2.4~https://github.com/monodot/container-up \
        --name mywebsite \
        --context-dir=httpd-hello-world --strategy=docker \
        --dry-run -o json \
        | jq '(.items[] | select(.kind == "BuildConfig") | .spec.strategy.dockerStrategy.dockerfilePath) = "Dockerfile.openshift"' \
        | oc apply -f -

The `oc new-app` command won't expose the app to the outside world. So, to access the app from outside the cluster, we expose the Service object, which creates a Route:

    oc expose svc/mywebsite

You can now get the URL to the app, using:

    oc get route mywebsite --template '{{.spec.host}}'

