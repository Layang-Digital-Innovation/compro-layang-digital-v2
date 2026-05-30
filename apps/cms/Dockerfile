# apps/cms/Dockerfile
FROM node:22 AS builder

# Enable pnpm
RUN corepack enable pnpm

WORKDIR /app

# Copy workspace config and lockfile
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
# Copy the cms app and shared packages
COPY apps/cms ./apps/cms
COPY packages ./packages

# Allow pnpm to run lifecycle scripts (e.g. sharp, pg)
RUN pnpm config set ignore-scripts false

# Install dependencies
RUN pnpm install --filter @compro-layangdigital/cms...

# Set ENV for build optimizations
ENV NODE_ENV=production

# Build the Strapi app
RUN pnpm --filter @compro-layangdigital/cms build

# Stage 2: Production runner
FROM node:22-slim AS runner

RUN corepack enable pnpm

WORKDIR /app
ENV NODE_ENV=production

# Copy necessary files from the builder
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/cms ./apps/cms
COPY --from=builder /app/packages ./packages

EXPOSE 1337

CMD ["pnpm", "--filter", "@compro-layangdigital/cms", "start"]
