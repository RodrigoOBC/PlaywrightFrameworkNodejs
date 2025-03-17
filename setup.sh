cd .devcontainer
docker-compose -f docker-compose.yml up -d --build
docker exec -it playwrightDevContainerNodeJs bash