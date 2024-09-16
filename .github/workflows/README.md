# Explanation of the Workflow:

Trigger on Push: This workflow will trigger every time you push code to the main branch.
Checkout Code: It checks out your repository code.

Set up SSH: The SSH key is used to connect to your EC2 instance. The ssh-private-key is stored in GitHub Secrets (EC2_SSH_KEY).

Deploy to EC2: It tries to connect to your EC2 instance and run git pull to update the website. The continue-on-error: true ensures that even if this step fails, the workflow moves to the next step.

Rollback if Deployment Fails: If the deployment step fails, the failure() condition is triggered, and the rollback logic kicks in. It rolls back to the most recent tagged version using git checkout $(git describe --tags --abbrev=0).