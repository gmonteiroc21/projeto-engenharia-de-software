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
   cd seu-repositorio/api_mapa
   ```

3. Instale as dependências do Node.js:

   ```
   npm install
   ```

4. Rode o projeto com o comando e navegue até https://localhost:5000:

   ```
   node server.js
   ```

## Configuração

Para rodar a API, você precisará das variáveis de ambiente necessárias. Será disponibilizado um arquivo "example.env" para você preenchê-lo com as informações requisitadas. Uma atenção especial ao arquivo public/map.html, onde você precisará inserir a chave do Google Maps manualmente

## Uso

Essa API funciona como um renderizador de páginas, então você pode navegar pelo projeto de acordo com os arquivos html
```

## Rotas da API

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

app.get('/map.html', (req, res) => {
  res.sendFile(__dirname + '/public/map.html');
});

app.get('/form.js', (req, res) => {
  res.sendFile(__dirname + '/public/form.js');
});

app.get('/map.js', (req, res) => {
  res.sendFile(__dirname + '/public/map.js');
});

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
## Licença

```
Este projeto está licenciado sob a Licença GNU General Public License v3.0 - veja o arquivo na raiz do repositório para detalhes.
```

## Contato
- email: jfbs@cin.ufpe.br
- linkedin: https://www.linkedin.com/in/jo%C3%A3o-felipe-barbosa-da-silva/
---
