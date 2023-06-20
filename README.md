# SmokingTracker

Este projeto tem como objetivo implementar progressivamente e de forma didática uma aplicação web para realizar um acompanhamento de controle de tagabismo com intuito de conscientizar o usuário sobre os danos e sobre os gastos que envolvem o tabagismo.

O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Endereço de Deploy - GitHub Pages
https://rafaelxzanim.github.io/smoking-tracker/

## Endereço do Repositório do GitHub
https://github.com/rafaelxzanim/smoking-tracker

## Endereço Vídeo Youtube Explicando o Projeto
https://www.youtube.com/watch?v=e1T0RSP8N54

## Protótipo

https://www.figma.com/file/Z4q0naSrcoEv0aDex9nQ6l/Smoking-Tracker?type=design&node-id=1-36&t=AcpLr8OFEWQbsZJ8-0

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [X] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [X] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [X] Construir páginas web com o conceito de componentes.
- [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [X] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [X] Mapear componentes à rotas no módulo de rotas.
- [X] Criar navegação entre páginas por meio de rotas.
- [X] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [X] Validar campos do formulário com REGEX e apresentar os erros.
- [X] Desabilitar o botão de submit enquanto o formulário está inválido.
- [X] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [X] Cadastrar uma entidade no JSON Server.
- [X] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [X] Usar a diretiva ngIf
- [X] Formatar a apresentação de dados com Pipes.
- [X] Build e deploy da aplicação.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) via o seguinte comando: 
  - Comando: `npm run json-server --watch db.json --routes routes.json`
  - O comando deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s`
