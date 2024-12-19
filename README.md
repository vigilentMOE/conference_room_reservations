# Resource Reservation Web App

## Overview

This application allows users to reserve resources (such as conference rooms or equipment) through a web-based interface. It features:

- **Frontend:** [Preact](https://preactjs.com/) Single-Page Application (SPA) for a fast and lightweight UI.
- **Backend:** [Express.js](https://expressjs.com/) server for handling API requests, authentication, and business logic.
- **Database:** PostgreSQL for storing resources, reservations, and user data.
- **Authentication:** User identity is determined via PKI (Public Key Infrastructure), initially stubbed for local development, with plans for secure mutual TLS authentication in production.

## Tech Stack

- **Frontend:**  
  - Preact SPA, managed by a Vite-based build tool.  
  - Global state management using Preact context.  
  - Potential optimizations: Code splitting, minification, and caching for better performance.

- **Backend:**  
  - Node.js and Express.js for routing and API endpoints.  
  - Secure configuration with environment variables, `.env` files, and best-practices error handling.  
  - Logging and monitoring solutions (e.g., winston, morgan) planned for production.

- **Database:**  
  - PostgreSQL as the relational database for storing resource data and reservations.  
  - Database migrations and schema management to maintain version-controlled database structure.

- **Future Hosting and Deployment (AWS):**  
  - AWS EC2 or Elastic Beanstalk for backend hosting.  
  - AWS RDS for a managed PostgreSQL instance.  
  - S3 + CloudFront for serving static frontend files (optional optimization).  
  - Infrastructure as Code (e.g., Terraform or AWS CDK) to manage deployment.  
  - Route 53 for DNS, ACM for SSL certificates, and AWS Load Balancer for secure, scalable traffic management.

## Getting Started Locally

### Prerequisites

- **Node.js (>=14)**: [Download](https://nodejs.org/)  
- **npm or Yarn**: Comes with Node.js, or [Yarn](https://yarnpkg.com/) can be installed separately.  
- **PostgreSQL**: Installed locally, or run it via Docker.

### Steps

#TODO

## License

This project is licensed under the [MIT License](./LICENSE).

## Contact

For questions or suggestions, feel free to open an issue or create a pull request.
