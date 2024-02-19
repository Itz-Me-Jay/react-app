# Stage 1 : Angular Application

FROM node:14 As build

WORKDIR /angular-app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2 : nginx 

FROM nginx:1.19.0-alpine As serve

COPY --from=build /angular-app/dist/my-app /usr/share/nginx/html 

EXPOSE 80
