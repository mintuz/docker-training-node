Framework Training Template Node.js Microservice
================================================
Overview
--------
This is a very simple micro service that can be built and packaged into a docker image. You should use this micro service as a template for building your own micro services. This microservice uses Node.js implementation.

How to build and run this microservice
--------------------------------------

1. Build the docker image

   ```
   $ docker build -t template-microservice-nodejs .
   ```
2. Run the container

   ```
   $ docker run -dp 8080:8080 template-microservice-nodejs
   ```
3. Test the micro service

   ```
   $ curl http://localhost:8080
   Success! The Framework Training template microservice is up and running using Node.js!
   ```
