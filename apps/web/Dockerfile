# apps/web/Dockerfile
FROM node:22 AS builder

# Enable pnpm
RUN corepack enable pnpm

WORKDIR /app

# Copy workspace config and lockfile
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
# Copy the web app and shared packages
COPY apps/web ./apps/web
COPY packages ./packages

# Install dependencies (only what's needed for web workspace)
RUN pnpm config set ignore-scripts false
RUN pnpm install --no-frozen-lockfile --filter @compro-layangdigital/web... 2>&1 || \
    (echo "=== PNPM INSTALL FAILED ===" && cat /root/.npm/_logs/*.log 2>/dev/null; exit 1)

# Build the Astro site
RUN pnpm --filter @compro-layangdigital/web build

# Stage 2: Production runner
FROM node:22-slim AS runner

RUN corepack enable pnpm

WORKDIR /app
ENV NODE_ENV=production

# Copy necessary files from the builder
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web ./apps/web
COPY --from=builder /app/packages ./packages

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80

CMD ["node", "./apps/web/dist/server/entry.mjs"]
