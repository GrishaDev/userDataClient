## Local Install
run `npm install`

create `.env` based on `.env.example` file 

set `IS_MOCK` as true to run with just mocks if you wish.

`VITE_API_URL` is not needed if running on mock version.

set `VITE_API_URL` and `IS_MOCK` to false  if you want to run locally the frontend communicating with a backend instance



## run
run `npm run dev`

build static files `npm run build`


## Docker install
configure .env

run `docker-compose up -d`
