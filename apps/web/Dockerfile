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

# Allow pnpm to run lifecycle scripts for esbuild/sharp
RUN pnpm config set ignore-scripts false

# Install dependencies (only what's needed for web workspace)
RUN pnpm install --no-frozen-lockfile --filter @compro-layangdigital/web...

# Build the Astro site
RUN pnpm --filter @compro-layangdigital/web build

# Stage 2: Serve the static files
FROM nginx:alpine AS runner

# Copy the built output from Astro to Nginx's html folder
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
