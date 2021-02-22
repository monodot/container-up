# json-server

A demo of running a mock REST API, using [typicode/json-server][json-server]!

## Deploy to OpenShift

You can build using the **Source-to-Image (S2I)** strategy, using the **Add** screen in the OpenShift web console, choosing **From Git** and then pointing to this Git repo.

Or, use the `oc` command line tool:

    oc new-app https://github.com/monodot/container-up \
        --name=node-json-server \
        --context-dir=node-json-server \
        --strategy=source

Or, if you prefer to do a Docker build, using the [Dockerfile](./Dockerfile):

    oc new-app https://github.com/monodot/container-up \
            --name=node-json-server-docker \
            --context-dir=node-json-server \
            --strategy=docker

[json-server]: https://github.com/typicode/json-server

