FROM node:20
WORKDIR /app
COPY . .
RUN npm install && npm run build && npm install -g http-server
EXPOSE 80
CMD ["http-server", "dist", "-p", "80"]