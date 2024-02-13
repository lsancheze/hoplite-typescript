# Hoplite - TypeScript

Boilerplate to start working in APIs just right ahead, using TypeScript and Express.js Framework.

![API diagram.](/img/api-diagram.png)

This approach takes care of critical points in the lifecycle of an API request, where the Router and Business Layers are the focus.

## Route Middleware

It offers a streamlined way to perform operations across all the endpoints (or some of them, it's your choice!) using the Route Middleware. You can add the Route Middleware on-demand, to each endpoint that you would like.

## Validation Middleware

Validating requests is sometimes a pain, but with the Validation Middleware, you can validate all kinds of data using regular expressions. You just have to create your schemas inside the entities folder and then add them in the Router layer. It's not necessary to use regular expressions. Since this solution is using Celebrate as middleware and Joi as validator, you may also use the [Joi validator](https://www.npmjs.com/package/joi). If you will use regular expressions, it's good to know that some people may want to move the regex folder to be placed in each entity, I would encourage that as well, it's your call!

## Error Middleware

It's not always easy to handle errors, but with Error Middleware, you can have peace of mind. The Error Middleware will catch any error triggered by the request execution, and using the custom error class ServiceError, it will quickly know about the nature of the error. The ServiceError class is made to include several data points, like code, message, traceId, and flightRecorder. You don't have to use them all, but I highly encourage you to use at least the code and message data points to identify errors.

![Hoplite Framework.](/img/hoplite.png)

## Use

### Prerequisites

* Node.js: please visit the official documentation to know more about how to [download and install](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) Node.js.
* NPM: Please check that NPM is [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 

### Running Hoplite

* Install dependencies:

```
npm install
```

* Run the server:

```
npm run dev:watch
```

Now, you can start playing with Postman, Insomnia, or any other tool to send requests using `localhost:8088`

## Let's improve!

Feel free to adapt this code to your necessities, you can also use another Go framework if you want.

Let's keep in touch, don't hesitate to contact me about questions, improvements, or ideas.