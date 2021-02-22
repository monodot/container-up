# json-server

A simple mock REST API, served using [typicode/json-server][json-server]!

- **db.json** - a sample JSON file to serve with _json-server_
- **Dockerfile** - a sample Dockerfile which builds a container image for this application
- **package.json** - declares _json-server_ as a dependency
- **server.js** - the main code that runs _json-server_

## To build and run a container locally

Make sure you have Docker or Podman installed, then:

    docker build -t node-json-server .
    docker run --net=host node-json-server

Now you can access the service at <http://localhost:8080>, e.g.:

    $ curl localhost:8080/posts
    [
    {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
    }
    ]

## Deploy to OpenShift

You can build using the **Source-to-Image (S2I)** strategy, using the **Add** screen in the OpenShift web console, choosing **From Git** and then pointing to this Git repo.

Or, use the `oc` command line tool:

    oc new-app https://github.com/monodot/container-up \
        --name=node-json-server \
        --context-dir=node-json-server \
        --strategy=source

    oc create route edge node-json-server --service=node-json-server

Or, if you prefer to do a Docker build, using the [Dockerfile](./Dockerfile):

    oc new-app https://github.com/monodot/container-up \
            --name=node-json-server-docker \
            --context-dir=node-json-server \
            --strategy=docker

    oc create route edge node-json-server-docker --service=node-json-server-docker


[json-server]: https://github.com/typicode/json-server

