# Projeto Playwright com Docker

Este projeto utiliza o Playwright para automação de testes e está configurado para ser executado dentro de um ambiente Docker. Este guia detalha como configurar e executar o ambiente, além de rodar os testes.

## 🚀 Configurando e Subindo o Ambiente com Docker

### Pré-requisitos

 Certifique-se de ter o Docker e Docker Compose instalados no seu sistema.

### Passos para Configuração:

1- Entre no diretório .devcontainer:

``` bash
cd .devcontainer
```

2 - Construa e inicie os containers Docker:

``` bash
docker-compose -f docker-compose.yml up -d --build
```

3  - Acesse o container: Substitua <nome-do-container> pelo nome do container configurado no docker-compose.yml (por exemplo, playwright-container).


``` bash
docker exec -it <nome-do-container> /bin/bash

```

## 🧪 Rodando os Testes

Após acessar o terminal dentro do container:

1- Instale as dependências (caso necessário): Certifique-se de que todas as dependências estão instaladas dentro do container.


``` bash
npm install

npx playwright install --with-deps
```

2 - Execute os testes: Use o comando do Playwright para rodar os testes:

``` bash
npx playwright test
```

3 - Gerar e visualizar relatórios (opcional): Após rodar os testes, você pode gerar e abrir os relatórios:

``` bash
npx playwright show-report
```


## 🛠 Estrutura do Projeto
- .devcontainer/: Contém a configuração do ambiente Docker.

-  docker-compose.yml: Arquivo de configuração do Docker Compose.

### Outros arquivos de configuração.

- Features/: Pasta com os testes Playwright organizados.

- - tests/: Pasta onde encontraremos os arquivos “specs” do nosso projeto.
- - pages/: Pasta onde encontraremos os arquivos com as classes que mapeiam as ações de cada “Page” 
- - elements/: Pasta onde encontraremos os arquivos com as objetos que pertencem a classe page


- playwright.config.js: Configuração do Playwright.


## 💡 Dicas

- Reiniciar o container: Se precisar reiniciar o ambiente, use:

``` bash
docker-compose -f docker-compose.yml restart
```

- Parar os containers:
``` bash
docker-compose -f docker-compose.yml down
```

- Customizar o container: Atualize o docker-compose.yml conforme necessário para ajustar ao seu ambiente.


Com isso, seu ambiente Docker com Playwright está configurado e pronto para rodar testes de forma isolada e eficiente. 🎉