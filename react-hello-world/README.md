# react-hello-world

A simple React front-end application, ready to be built in a container.

To run tests:

    yarn test

To run:

    yarn start

The app will now start on <http://localhost:3000>

If you hit <http://localhost:3000>, you'll see the homepage.

## Put it in a container

Build a Docker image:

    docker build -t react-hello-world .

This will run a multi-stage Docker build. The first stage builds the production code using `yarn`. This is injected into the second container, which is based on the Bitnami Nginx image.

Now start a container from the image:

    docker run --network=host react-hello-world

You'll be able to access the website at <http://localhost:8080/>.

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

No Kylie records were harmed in the making of this project.


