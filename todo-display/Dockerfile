FROM node:latest
WORKDIR /todo-display/
COPY public/ /todo-display/public
COPY src/ /todo-display/src
COPY package.json /todo-display/
RUN npm install
EXPOSE 3200
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL
CMD ["npm", "start"]