# Project Overview: Deploying a Static Website on AWS EC2 with Nginx and SSL

## Objective:
The goal of this project is to demonstrate how to set up and deploy a static website using Nginx on an Ubuntu server hosted on Amazon EC2, secured with SSL certificates from Let’s Encrypt. This project integrates GitHub as the version control platform for managing the website's codebase and includes automated deployment via GitHub Actions.

### Project Components:

#### Version Control and Source Code Management:
The static website's files are stored in a public GitHub repository, which provides version control and collaboration features. The repository contains the HTML, CSS, and other static assets required to render the website. GitHub Actions is used to automate deployments, ensuring that changes to the repository are reflected on the live website.

#### Amazon EC2 Instance (Ubuntu Server):
The website is hosted on an Amazon EC2 instance running Ubuntu. The EC2 instance provides scalable compute power and high availability, ensuring the website remains accessible. An Elastic IP is assigned to the instance to maintain a fixed public IP address, crucial for DNS mapping and SSL configuration.

#### Nginx Web Server:
The EC2 instance runs Nginx, a lightweight, high-performance web server used to serve static content. Nginx is configured to pull website files from the repository and serve them to the web. The configuration handles multiple domains (e.g., www.fbdevopslab.com and fbdevopslab.com) and ensures proper redirects.

#### Domain Name and DNS Configuration:
A custom domain (fbdevopslab.com) is registered via Amazon Route 53, AWS’s scalable DNS web service. The DNS records (A records) are configured to map the domain name to the EC2 instance’s Elastic IP address. This setup allows users to access the website via the domain name, ensuring a professional and user-friendly URL.

#### SSL Certificate with Let’s Encrypt:
To secure the website and enable HTTPS traffic, an SSL certificate was obtained using Let’s Encrypt and installed using Certbot. This ensures that all communication between the server and users is encrypted, providing both security and SEO benefits. Certbot is configured to automatically renew the SSL certificate before it expires.

#### Security Configuration:
The EC2 instance's Security Groups and firewall settings ensure that only necessary traffic is allowed:

Port 80 (HTTP) and Port 443 (HTTPS) are open to the public, allowing both secure and non-secure traffic.
SSH access is restricted to the user’s IP address for added security.

#### GitHub Integration and Automated Deployment:
Changes and updates to the static website are managed through GitHub. The repository is cloned to the EC2 instance, allowing for seamless updates to the live website. GitHub Actions is configured to automate the deployment process, ensuring that the latest code is pushed to the server efficiently and securely.

### Key Features and Achievements:

##### Static Website Hosting:
The static website is hosted efficiently using Nginx on an Ubuntu EC2 instance.

##### Custom Domain:
The website is accessible via a custom domain registered and managed through Route 53.

##### SSL Encryption: 
The website is secured using SSL certificates from Let’s Encrypt, ensuring secure communication over HTTPS.

##### Version Control and Automation: 
GitHub manages all website files and GitHub Actions automates deployments, enhancing version control and deployment efficiency.

##### Scalable and Secure Infrastructure: 
AWS EC2 and Elastic IP ensure scalable and highly available hosting. Security best practices, including restricted SSH access and proper firewall configurations, have been implemented.

## Conclusion:
This project demonstrates the complete lifecycle of setting up a static website with modern best practices, from domain registration and DNS configuration to SSL setup and automated deployments. By leveraging AWS EC2 for hosting, Let’s Encrypt for SSL certification, and GitHub Actions for automation, this project showcases how to build a secure, scalable, and manageable web infrastructure suitable for small businesses, developers, or personal projects.


# New Feature: Multiple Static Websites on One Server
Objective: This part of the project demonstrates how to host multiple static websites (subdomains) on a single server using Nginx Virtual Hosts.

## Project Tasks:

#### Subdomains: 
Created two subdomains (blog.fbdevopslab.com and projects.fbdevopslab.com).

#### Nginx Configuration:
Virtual Host configuration is used to route each subdomain to its corresponding directory (e.g., /var/www/blog and /var/www/projects).
The Nginx configuration ensures each subdomain points to the correct website files.

#### Website Directories:
Separate directories for each subdomain were created.
HTML, CSS, and JavaScript files were added to each directory to provide meaningful and visually appealing content.

#### DNS Setup:
DNS records were updated to point the server’s Elastic IP to the subdomains.

#### Wildcard SSL Certificate:
A wildcard SSL certificate was generated for the root domain (*.fbdevopslab.com) using Let’s Encrypt and configured on Nginx.

#### SSL Validation:
Successfully validated the SSL for each subdomain using OpenSSL to ensure the certificate covers both subdomains.

### Key Achievements:

##### Subdomain Hosting: 
Each subdomain (e.g., blog.fbdevopslab.com and projects.fbdevopslab.com) hosts a distinct static website.

##### Nginx Virtual Hosts: 
Nginx routes traffic to the correct subdomain directories based on Virtual Hosts.

##### Wildcard SSL:
 A single wildcard SSL certificate secures all subdomains, providing encrypted communication for each site.

## Conclusion:
This project showcases a complete setup for deploying multiple static websites on a single EC2 instance using Nginx Virtual Hosts and securing them with wildcard SSL from Let’s Encrypt. It highlights modern best practices for web infrastructure, combining scalable and secure hosting with automation for ease of management.