# 🏋️ Dockerized Gym Website

Modern responsive gym website built with **Docker + Nginx**.

## 📸 Homepage Preview

![Homepage Preview](screenshots/homepage.png)
A modern responsive gym landing page created as a DevOps practice project and served with Nginx inside a Docker container.

## ✨ Features

- 🚀 Fully Dockerized Static Website
- 🌐 Hosted with Nginx
- 📱 Responsive Design
- 🎨 Modern Dark UI
- ⚡ Fast Static Asset Delivery
- 🐳 Docker Container Deployment


## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Nginx | Static Web Server |
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript | Animations & Interactions |
| Linux | Deployment Environment |

## 🏗️ Architecture

```mermaid
flowchart LR
    A[🌐 User Browser] --> B[🐳 Docker Container]
    B --> C[⚙️ Nginx]
    C --> D[index.html]
    C --> E[style.css]
    C --> F[script.js]

    B -. Port 8080:80 .-> A
```

### Request Flow

```text
User Browser
     ↓
localhost:8080
     ↓
Docker Container
     ↓
Nginx :80
     ↓
HTML / CSS / JavaScript
```
## 📂 Project Structure

```text
dockerized-gym-website/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── nginx.conf
├── README.md
├── .gitignore
│
└── screenshots/
    └── homepage.png
```

---

## 🧠 What I Learned

Through this project, I practiced:

- Creating and running Docker containers
- Building Docker images
- Port mapping with Docker
- Serving a static website using Nginx
- Working with Docker on RHEL 9
- Managing files and projects with GitHub
- Writing project documentation in Markdown
- Troubleshooting container and networking issues

---

## 🔧 Troubleshooting

### Container is running but website is not accessible

First, check the running containers:

```bash
docker ps
```

Check container logs:

```bash
docker logs gym-website
```

Check the mapped port:

```bash
docker port gym-website
```

Test the application locally:

```bash
curl http://127.0.0.1:8080
```

---

## 🚀 Deployment Flow

```text
Website Source Code
        ↓
   Dockerfile
        ↓
  Docker Image
        ↓
 Docker Container
        ↓
     Nginx
        ↓
   Port 8080
        ↓
   Web Browser
```

## 🐳 Run Locally with Docker

### Build Docker Image

```bash
docker build -t gym-website .
```

### Run Docker Container

```bash
docker run -d --name gym-website -p 8080:80 gym-website
```

### Stop Container

```bash
docker stop gym-website
```

### Remove Container

```bash
docker rm gym-website
```
