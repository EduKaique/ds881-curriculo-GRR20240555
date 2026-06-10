FROM node:22-alpine AS deps

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:22-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

FROM node:22-alpine AS dev

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 4321

CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4321"]