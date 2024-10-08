# Liatrio-WebApp
Scope of Work: Create a simple web application which exposes a HTTP API Endpoint. Used CI/CD pipeline to containerize it and deploy to cloud platform.

JSON file source code:

Install Node.js and express to build simple single endpoint web application returning JSON object. 
  "message": "My name is David Lee"
  "timestamp": Dynamic timestamp
  
Docker Containerization: Host Dockerfile in repository.

GitHub Actions
  -Build application docker image
  -Verify application functionality using Liatrio's GitHub apprenctice-action
  -Push image to Docker Hub

Cloud Deployment
  -Deploy on Cloud Plaform of choice.

EC: Add GitHub Workflow, automatically deploy application to cloud platform when changes are made to the main branch of your repository. Add a field to the JSON output of your application and verify the cahnges is deployed.
