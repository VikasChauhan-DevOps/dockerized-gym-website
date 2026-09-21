# 🏋️ Dockerized Gym Website

Modern responsive gym website built with **Docker + Nginx**.

## 📸 Homepage Preview

![Homepage Preview](screenshots/homepage.png)
A modern responsive gym landing page created as a DevOps practice project and served with Nginx inside a Docker container.


## Features

- Responsive modern UI
- Mobile navigation
- Animated statistics
- Scroll reveal animations
- Membership cards
- Interactive contact form
- Nginx static hosting
- Docker containerization

## Tech Stack

HTML5 • CSS3 • JavaScript • Docker • Nginx

## Run with Docker

```bash
docker build -t dockerized-gym-website .
docker run -d --name gym-website -p 8080:80 dockerized-gym-website
```

Open:

```text
http://localhost:8080
```

## Stop and remove

```bash
docker stop gym-website
docker rm gym-website
```

## Project Structure

```text
dockerized-gym-website/
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── nginx.conf
├── README.md
└── .gitignore
```

## DevOps Practice

This project demonstrates:

1. Building a Docker image.
2. Running a container.
3. Serving a static application with Nginx.
4. Mapping a host port to a container port.
5. Documenting the project in GitHub.
