FROM node:9-alpine

ENV DEBUG=off \
  NODE_ENV=production \
  APP_PORT=80 \
  APP_JWT_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCNdgZPtvnjWnyCxWfIzCrNqFR7\nlOXKl6xag5AB+6j9RRR3ZQXMEKvl/1wjZcMuxb5rs+u5HuJaf4LXmYszhpqUuALj\nGAbSPZZ+awoTvAdyd93iMoK0mh+B+7xkxkQ8bApqQ0q7UYBMb4vyQ/tWX0ubg9wb\nYXzLj7IbGhnyVDLNcQIDAQAB\n-----END PUBLIC KEY-----"

RUN mkdir app
WORKDIR /app
COPY . /app/

# Start
CMD npm run server