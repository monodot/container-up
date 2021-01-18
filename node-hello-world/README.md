# node-hello-world

This is an example Express server, which serves an API.

Express is the "fast, unopinionated, minimalist web framework for Node.js".

To run:

    npm install
    npm start

The app will now start on <http://localhost:3000>

If you hit <http://localhost:3000/greeting> you'll get a greeting:

    $ curl localhost:3000
    {"greeting":"Hello, world!"}

## Put it in a container

Build a Docker image:

    docker build -t node-hello-world .

Now start a container from the image:

    docker run --network=host node-hello-world

You'll be able to access the API at <http://localhost:3000/greeting>.

## Acknowledgements

This app was created using the [Express application generator][expressgen].

[express]: https://expressjs.com/
[expressgen]: https://expressjs.com/en/starter/generator.html

