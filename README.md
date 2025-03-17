# Playwright Project with Docker

This project uses Playwright for test automation and is configured to run within a Docker environment. This guide details how to set up and run the environment, as well as execute the tests.

## 🚀 Setting Up and Starting the Environment with Docker

### Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

### Configuration Steps:

1- Enter the .devcontainer directory:

``` bash
cd .devcontainer
```

2 - Build and start the Docker containers:

``` bash
docker-compose -f docker-compose.yml up -d --build
```

3 - Access the container: Replace <container-name> with the name of the container configured in docker-compose.yml (e.g., playwright-container).

``` bash
docker exec -it <container-name> /bin/bash
```

## 🧪 Running the Tests

After accessing the terminal inside the container:

1- Install dependencies (if necessary): Make sure all dependencies are installed inside the container.

``` bash
npm install

npx playwright install --with-deps
```

2 - Run the tests: Use the Playwright command to run the tests:

``` bash
npx playwright test
```

3 - Generate and view reports (optional): After running the tests, you can generate and open the reports:

``` bash
npx ortoni-report show-report --dir .temp/otoni-report --file index.html --port 3003
```

## 🛠 Project Structure
- .devcontainer/: Contains the Docker environment configuration.

- docker-compose.yml: Docker Compose configuration file.

### Other configuration files.

- Features/: Folder with organized Playwright tests.

- - tests/: Folder where the project's "specs" files are located.
- - pages/: Folder where the files with the classes that map the actions of each "Page" are located.
- - elements/: Folder where the files with the objects that belong to the page class are located.

- playwright.config.js: Playwright configuration.

## 💡 Tips

- Restart the container: If you need to restart the environment, use:

``` bash
docker-compose -f docker-compose.yml restart
```

- Stop the containers:
``` bash
docker-compose -f docker-compose.yml down
```

- Customize the container: Update docker-compose.yml as needed to adjust to your environment.

With this, your Docker environment with Playwright is configured and ready to run tests in an isolated and efficient manner. 🎉
