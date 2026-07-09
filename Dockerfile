FROM node:22-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM deps AS dev
WORKDIR /app

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM deps AS builder
WORKDIR /app

COPY . .

RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=40430
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 40430

CMD ["node", "server.js"]
