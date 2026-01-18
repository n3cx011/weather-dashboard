# Weather Dashboard - DevOps Assignment

## Group Information
- *Student 1:* Yasas Premarathne - ITBNM-2313-0061 - Role: DevOps/Release Manager 
- *Student 2:* Anjalee Herath - ITBNM-2313-0089 - Role: Backend Developer 
- *Student 3:* Kaumini Kulasooriya - ITBNM-2313-0088 - Role: Frontend Developer 

## Project Description
This application is a responsive Weather Dashboard designed to provide real-time weather updates and a 5-day forecast for any city worldwide. It integrates with the OpenWeatherMap API to fetch current temperature, conditions, humidity, and wind speed.

## Live Deployment
�*Live URL:* https://weather-dashboard-chi-one.vercel.app/ 

## Technologies Used
- Frontend - HTML5, CSS3, JavaScript
- NodeJs
- GitHub Actions (CI/CD)
- Deployment: Vercel
- API: OpenWeatherMap API

## Features
- Real-time Search: Users can search for current weather data by city name.
- 5-Day Forecast: Displays weather readings specifically filtered for 12:00 PM for the upcoming five days.
- Responsive UI: Fully functional and optimized for mobile, tablet, and desktop views.

## Build Status
![CI Pipeline](https://github.com/n3cx011/weather-dashboard/workflows/CI%20Pipeline/badge.svg)
![Deploy to Production](https://github.com/n3cx011/weather-dashboard/workflows/Deploy%20to%20Production/badge.svg)

## Branch Strategy
We implemented the following branching strategy
- main: Production-ready code (Protected) 
- develop: Integration branch 
- feature/weather-api: Individual feature branches - ITBNM-2313-0089
- feature/frontend-ui: Individual feature branches - ITBNM-2313-0088
- n3cx011-patch-1
- n3cx011-patch-2
- n3cx011-patch-3
- n3cx011-patch-4
- n3cx011-patch-5


## Individual Contributions
### ITBNM-2313-0061 (Yasas)
- Repository Management: Initialized the GitHub repository, configured branch protection rules for the main branch, and added collaborators.

- CI/CD Implementation: Created the .github/workflows/ directory and implemented the ci.yml and deploy.yml configurations.

- Deployment: Successfully configured the automated deployment to Vercel and managed the integration of features from the develop branch to main.

- Conflict Resolution: Documented and resolved an intentional merge conflict to demonstrate team collaboration skills.

### ITBNM-2313-0089 (Anjalee)
- API Integration: Developed the core logic in app.js to fetch real-time data from the OpenWeatherMap API.

- Data Processing: Created functions to handle and display both current weather and the 5-day forecast.

- Feature Branching: Managed the feature/weather-api branch and submitted detailed Pull Requests for code review.

### ITBNM-2313-0088 (Kaumini)
- UI/UX Development: Designed and implemented a responsive dashboard using HTML5 and CSS3.

- Mobile Optimization: Ensured the layout adapts to different screen sizes, meeting the "Responsive Design" requirement.

- Documentation: Created the comprehensive README.md file, including setup instructions, technologies used, and project features.

## Setup Instructions 
### Prerequisites - Node.js (version 18 or higher) - Git 
### Installation 
```bash 
# Clone the repository 
git clone https://github.com/n3cx011/weather-dashboard

# Navigate to project directory 
cd [project-name] 

# Install dependencies 
npm install 

# Run development server 
npm run dev

# Deployment Process 
Our project utilizes GitHub Actions to automate the integration and deployment process through two primary workflows :

1. Continuous Integration (CI)
-The CI Pipeline (ci.yml) is triggered every time a team member pushes code to any branch (main, develop, or feature/*) or creates a Pull Request .

-Checkout: The "robot" downloads the latest code from the repository .

-Environment Setup: It installs Node.js version 18 .

-Installation: It runs npm install to gather all necessary project libraries .

-Validation: It runs a linter and build check to ensure there are no syntax errors or breaking changes before the code is merged .

2. Continuous Deployment (CD)
-The Deployment Pipeline (deploy.yml) is the final step that makes the website live.

-Trigger: This workflow only runs when code is successfully pushed or merged into the main branch .

-Authentication: It uses stored GitHub Secrets (VERCEL_TOKEN, ORG_ID, PROJECT_ID) to securely connect to our Vercel account .

-Automatic Update: Once the checks pass, Vercel automatically builds the new version and updates the live URL (weather-dashboard-chi-one.vercel.app) instantly

# Challenges Faced 

-API Key Activation: We initially encountered "City not found" errors because OpenWeatherMap API keys can take up to 2 hours to activate for external requests after account verification.

-Vercel Root Directory Configuration: Our deployment initially showed a 404: NOT_FOUND error because Vercel was looking for files in the root folder instead of the src/ directory.

-Merge Conflict Resolution: To meet assignment requirements, we intentionally edited the same line in the README.md, which required us to manually resolve the conflict in the code editor before merging to develop .

-GitHub Actions Secrets: Setting up the deploy.yml was challenging as it required the correct mapping of VERCEL_TOKEN, ORG_ID, and PROJECT_ID within GitHub Secrets to allow the automation robot to communicate with Vercel .

-Git Tracking Issues: Some files initially appeared with a green "U" (Untracked) icon in the editor, requiring us to properly use git add and git commit to ensure all source code was pushed to the repository .
