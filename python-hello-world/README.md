# python-hello-world

A nice and simple Python Flask application, which serves a greeting over HTTP.

To build a Docker image:

    docker build -t python-hello-world .

Then, to run:

    docker run --network=host python-hello-world

The app will respond on <http://localhost:8000> :

    $ curl localhost:8000
    Hello World!

If you want to deploy it to a registry (e.g. this is how I publish it to my quay.io account):

    docker login quay.io

    docker tag python-hello-world quay.io/tdonohue/python-hello-world:latest

    docker push quay.io/tdonohue/python-hello-world:latest

## Acknowledgements

This example uses the nice [Python image from Bitnami][image].

The _Dockerfile_ is based on [this one from Bitnami][dockerfile].


[dockerfile]: https://github.com/bitnami/bitnami-docker-python/blob/master/example/Dockerfile
[image]: https://bitnami.com/stack/python/containers
