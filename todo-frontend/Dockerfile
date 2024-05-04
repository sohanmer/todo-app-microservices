FROM node:latest
WORKDIR /todo-frontend/
COPY public/ /todo-frontend/public
COPY src/ /todo-frontend/src
COPY package.json /todo-frontend/
RUN npm install
EXPOSE 3000
ENV REACT_APP_BACKEND_URL="http://127.0.0.1:2000/create-task"
CMD ["npm", "start"]