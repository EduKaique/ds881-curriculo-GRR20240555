# Usa a imagem LTS do Node com Alpine para manter a imagem leve
FROM node:22-alpine

RUN apk add --no-cache libc6-compat

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 4321
