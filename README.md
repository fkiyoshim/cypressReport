# cypressReport
Projeto Cypress Cucumber Mochawesome Reporter

# Cypress Cucumber Report

Projeto de automação de testes E2E usando Cypress com Cucumber (BDD) e geração de relatórios com Mochawesome.

## Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber (Gherkin)](https://cucumber.io/)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---

## Estrutura de pastas

cypress/
├── e2e/
│ └── features/
│ └── googleSearch.feature
├── support/
│ └── step_definitions/
│ └── googleSteps.js
│ └── e2e.js
cypress.config.js


## Clone o repositório:

```bash
git clone https://github.com/fkiyoshim/cypressReport.git
cd cypressReport

## Instale as dependências: ## foi necessaário utilizar o comando "--force" pois estou usando a ultima versão do cypress que não é compativel com o cucumber

npm install --force 

## Execução com interface gráfica

npx cypress open

## Execução em modo headlesss (sem interface gráfica)

npx cypress run

## Visualização do report dos teste

Copiar o path do html ("C:\usurio\teste\cypressReport\cypress\reports\index.html) e colar em um navegador 

