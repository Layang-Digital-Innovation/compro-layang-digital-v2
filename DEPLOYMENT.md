# Deployment Guide with Docker & Portainer

This document outlines the steps required to deploy the **Super Saturn** (Astro + Strapi) monorepo using Docker and Portainer.

---

## 1. Environment Preparation

Before deploying, you must set up your environment variables. 
I have created a `.env.example` file in the root of the project.

1. Create a copy of `.env.example` and name it `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in the dummy values with actual secure strings (you can generate random hashes for the Strapi secrets). Ensure `DATABASE_PASSWORD` matches the postgres configuration.

---

## 2. Deploying via Portainer (Stacks)

Portainer provides an easy way to deploy `docker-compose.yml` configurations using its **Stacks** feature.

### Step 1: Push Code to your Repository
Ensure your latest changes, including the `docker-compose.yml`, `.dockerignore`, and the `Dockerfiles`, are pushed to your GitHub/GitLab repository.

### Step 2: Create a New Stack in Portainer
1. Log in to your Portainer dashboard.
2. Select your environment (usually `local` or the specific node).
3. Click on **Stacks** in the left sidebar.
4. Click the **+ Add stack** button.
5. Give your stack a name (e.g., `compro-layangdigital`).

### Step 3: Choose Build Method

**Option A: Repository (Recommended)**
If your repository is accessible by Portainer (public or via authentication):
1. Select **Repository** as the Build method.
2. Enter your Repository URL (e.g., `https://github.com/Layang-Digital-Innovation/compro-layang-digital-v2.git`).
3. Set the Repository reference (e.g., `refs/heads/main`).
4. Set the Compose path to `docker-compose.yml` (default).

**Option B: Web editor**
If you are deploying locally or don't want to connect the repo:
1. Copy the entire contents of your `docker-compose.yml` file.
2. Paste it into the Web editor block in Portainer.

### Step 4: Configure Environment Variables
1. Scroll down to the **Environment variables** section.
2. Click **Advanced mode**.
3. Copy the contents of your `.env` file (with your actual secrets) and paste them into the text box.

### Step 5: Deploy the Stack
1. Click the **Deploy the stack** button.
2. Portainer will now download the images (Postgres), and build the Astro (`apps/web/Dockerfile`) and Strapi (`apps/cms/Dockerfile`) images.
   > **Note:** Building the images might take several minutes depending on your server's resources.
3. Once completed, you will see your stack running successfully.

---

## 3. Post-Deployment Verification

1. **Check the Web App:** Navigate to `http://<your-server-ip>:3000` to see your Astro frontend.
2. **Check the CMS:** Navigate to `http://<your-server-ip>:1337/admin` to log into Strapi.
3. **Logs:** If either service is failing, click on the specific container within your stack in Portainer and click the **Logs** icon to troubleshoot.
