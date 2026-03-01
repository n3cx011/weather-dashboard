# Use a lightweight Alpine-based Node.js image for security and size
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first to optimize Docker layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of your application source code
COPY . .

# Security: Run the application as a non-root user
USER node

# Expose the port your Server.js listens on
EXPOSE 3000

# Start the application
CMD ["node", "Server.js"]