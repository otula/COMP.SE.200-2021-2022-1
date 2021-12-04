FROM node:16-alpine as testenv
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM testenv
WORKDIR /app
COPY jest.config.mjs .
COPY .babelrc .
COPY src/ ./src
CMD ["npm", "run", "test:local"]