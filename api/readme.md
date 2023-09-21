# README - API E-cycle

## Descrição

API responsável por fazer a comunicação com o Banco do projeto, E-Cycle

## Pré-requisitos

Você precisa ter instalado o Node.js na versão 18 ou superior e o POSTMAN para testar as rotas da API

## Instalação

1. Clone este repositório:

   ```
   git clone https://github.com/gmonteiroc21/projeto-engenharia-de-software.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd seu-repositorio/api
   ```

3. Instale as dependências do Node.js:

   ```
   npm install
   ```

4. Rode o projeto com o comando:

   ```
   node server.js
   ```

## Configuração

Para rodar a API, você precisará das variáveis de ambiente necessárias. Será disponibilizado um arquivo "example.env" para você preenchê-lo com as informações requisitadas

## Uso

Essa API foi testada utilizando o POSTMAN

Exemplo de solicitação usando curl:

```
POST http://localhost:3000/users/login
```

## Rotas da API

As principais rotas da API estão disponíveis nesse link: https://documenter.getpostman.com/view/29686411/2s9YC8wrNK

## Contribuição

Nós ficaríamos felizes em receber contribuições para melhorar este projeto! Se você deseja contribuir, siga os passos abaixo:

- Garanta que você tem uma conta no GitHub: Se você ainda não possui uma conta no GitHub

- Faça um fork do repositório: Clique no botão "Fork" na parte superior desta página para criar uma cópia do repositório no seu perfil.

- Clone o seu fork: No terminal, clone o repositório do seu fork para a sua máquina local. Substitua [seu-usuario] pelo seu nome de usuário do GitHub:

    bash

git clone https://github.com/[seu-usuario]/projeto-engenharia-de-software

Crie uma branch de feature: Antes de começar a trabalhar em uma nova funcionalidade, crie uma branch para ela. Isso ajuda a manter o código organizado e facilita a fusão posteriormente:

bash

git checkout -b minha-nova-funcionalidade

Faça as alterações necessárias: Agora você pode fazer as alterações que desejar no código.

Commit suas alterações: Depois de fazer as alterações, faça um commit explicando o que você fez. Substitua [descrição-das-alterações] por uma descrição breve das suas alterações:

bash

git commit -m "Adiciona [descrição-das-alterações]"

Faça o push das suas alterações: Envie as suas alterações para o seu repositório no GitHub:

bash

git push origin minha-nova-funcionalidade

Crie um Pull Request: Volte para o repositório original no GitHub e clique no botão "New Pull Request". Descreva suas alterações e clique em "Create Pull Request". 

## Como funciona o sistema de pastas da API
- Models
Os modelos (ou models) em uma API geralmente representam os objetos de dados que a aplicação manipula. Eles descrevem a estrutura e o comportamento dos dados. Cada modelo geralmente corresponde a uma tabela em um banco de dados ou a um objeto em um sistema de armazenamento de dados. Os modelos podem conter definições de campos, validações e relações com outros modelos. Eles são responsáveis por interagir com a camada de armazenamento de dados (geralmente um banco de dados).

- Controllers
Os controllers são responsáveis por receber solicitações HTTP dos clientes, processá-las, interagir com os modelos e retornar uma resposta adequada. Eles funcionam como o "cérebro" da API, controlando a lógica de negócios e ações específicas que a API pode realizar. Cada rota geralmente é associada a um controller, que lida com essa rota específica.

- Config
A pasta de configuração (config) contém arquivos que definem as configurações globais da aplicação. Isso pode incluir configurações de banco de dados, configurações de autenticação, variáveis de ambiente e qualquer outra configuração global necessária para o funcionamento da API.

- Middlewares
Os middlewares são funções que podem ser executadas antes ou depois de uma solicitação HTTP chegar ao controller. Eles são usados para realizar tarefas comuns, como autenticação, validação de dados, tratamento de erros, entre outros. Os middlewares ajudam a manter o código dos controllers limpo, separando a lógica de negócios das preocupações transversais.

- Routes
As rotas (routes) definem como as solicitações HTTP são mapeadas para os controllers correspondentes. Elas especificam qual controller e método deve ser chamado quando uma determinada URL é acessada. As rotas também podem incluir parâmetros de URL para capturar valores dinâmicos da URL, como IDs de recursos. As configurações de rota geralmente são definidas em arquivos separados, o que ajuda a manter o código organizado e legível.

O arquivo server.js serve como inicializador da API

## Licença

```
Este projeto está licenciado sob a Licença GNU General Public License v3.0 - veja o arquivo na raiz do repositório para detalhes.
```

## Contato
- email: jfbs@cin.ufpe.br
- linkedin: https://www.linkedin.com/in/jo%C3%A3o-felipe-barbosa-da-silva/
---
