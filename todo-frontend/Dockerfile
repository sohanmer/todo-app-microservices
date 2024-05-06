FROM node:latest
WORKDIR /todo-frontend/
COPY public/ /todo-frontend/public
COPY src/ /todo-frontend/src
COPY package.json /todo-frontend/
RUN npm install
EXPOSE 3100
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL
CMD ["npm", "start"]