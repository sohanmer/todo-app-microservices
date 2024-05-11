
## Simple TODO microservice app deployed on kubernetes.

This is a simple todo app built to replicate a microservice design on a kubernetes cluster. This app is primarily built to learn microservice deployment on **Kubernetes**.

### Prerequisites of creating this setup are:-
1. Basic understanding of programming (flask and react)
2. Basic understanding of GKE
3. Basic understanding of Docker and Kubernetes
4. GCP CLI 
5. Kubernetes CLI


### Component of the projects.

1. **todo-backend** is the directory where the backend code written on Flask is placed.
Run the command inside the todo-backend directory to create an image of your webapp from the Dockerfile (make sure you have the Docker installed and running to make the below command work).
    
        docker build -t <username>/todo-backend .

    OR if you are working in MacOS with silicon chip (M series) run the below command to change the platform during the docker build:-
        
        docker build -t <username>/todo-backend . --platform linux/amd64

    After the above command successfully completed you should see your image(native-app) listed under the output of:-

        docker images

    After creating and tagging the image, login/signup to [docker hub](https://hub.docker.com/, "docker hub URL") and create a public directory name todo-backend and once the repository run the below command to push the image to the docker hub repository
        
        docker push <username>/todo-backend

2. **todo-frontend** is the directory where the frontend code written on React is placed. This app will render a form to add the todo task.
Run the command inside the todo-frontend directory to create an image of your webapp from the Dockerfile (make sure you have the Docker installed and running to make the below command work).
    
        docker build -t <username>/todo-frontend .

    OR if you are working in MacOS with silicon chip (M series) run the below command to change the platform during the docker build:-
        
        docker build -t <username>/todo-frontend . --platform linux/amd64

    After the above command successfully completed you should see your image(native-app) listed under the output of:-

        docker images

    After creating and tagging the image, login/signup to [docker hub](https://hub.docker.com/, "docker hub URL") and create a public directory name todo-frontend and once the repository run the below command to push the image to the docker hub repository
        
        docker push <username>/todo-frontend

2. **todo-display** is the directory where the display code written on React is placed. This app will be used to list the todo task.
Run the command inside the todo-display directory to create an image of your webapp from the Dockerfile (make sure you have the Docker installed and running to make the below command work).
    
        docker build -t <username>/todo-display .

    OR if you are working in MacOS with silicon chip (M series) run the below command to change the platform during the docker build:-
        
        docker build -t <username>/todo-display . --platform linux/amd64

    After the above command successfully completed you should see your image(native-app) listed under the output of:-

        docker images

    After creating and tagging the image, login/signup to [docker hub](https://hub.docker.com/, "docker hub URL") and create a public directory name todo-display and once the repository run the below command to push the image to the docker hub repository
        
        docker push <username>/todo-display

**Note:-** Before proceeding to the next step please create a standard GKE cluster on Google Cloud and connect to the cluster via Google CLI.

3. **kubernetes/manifest** this directory contains all the kubernetes manifest file and using this we will deploy our app and create a public load balancer to access our app from the internet.

Run the below command inside **kubernetes/manifest** to deploy the backend of the app:-

        kubectl apply -f backend-deployment.yml

Wait for sometime and check the deployment and service created using the below command:-

        kubectl get deploy, svc 

Check if your deployment are in running state and your backend service have a public ip address. If the public address is not yet assign please wait for sometime.

Once the public ip is assigned replace <BACKEND_IP> in frontend-deployment.yml and display-deployment.yml with the public IP of the service.

Once both the frontend-deployment.yml and display-deployment.yml file are modified run the below command:

        kubectl apply -f frontend-deployment.yml && kubectl apply -f display-deployment.yml

After both the deployment are done and PUBLIC IP are assigned to the respective services you can access the frontend and display webapp by their service PUBLIC IP on any browser.

