<p align="center">
  <a href="#">
    <img src="https://github.com/yuriBaza23/devfy/blob/main/public/icons/black.svg?raw=true" height="150" width="175" alt="Devfy" />
  </a>
</p>

<p align="center">Um clone simples da plataforma Spotify.</p>

<div align="center">

[![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)<space><space>
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)<space><space>
[![ChakraUI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)<space><space>
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)<space><space>
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

## Overview

- **[Sobre](#sobre)**
- **[Fazendo clone](#git-clone)**
- **[Instalação](#instalacao)**
- **[Variáveis de desenvolvimento](#env-var)**
  - **[Github](#github-env)**
  - **[FaunaDB (Opcional)](#faunadb-env)**
- **[Contribuição](#contribuicao)**
  - **[Guidelines](#contribuicao-guidelines)**
- **[Licensa](#license)**

<h4 align="center"> 
	🚧  Devfy 🚀 Em construção...  🚧
</h4>

<a id='#sobre'><a>

### Sobre
A aplicação Devfy foi feita com o objetivo de treinar minhas habilidades com técnicas voltadas para o desenvolvimento front-end e revisar conceitos do NextJS, JAMStack, responsividade e design. Além disso, a aplicação aborda componentes de áudio e autenticação utilizando o Nextauth.

<a id='git-clone'></a>

### Fazendo clone
Para iniciar, primeiro deve-se abrir no seu terminal a pasta que deseja clonar a aplicação e colar o seguinte código

```bash
# Clone este repositório
$ git clone <https://github.com/yuriBaza23/Devfy.git>
```

Após isso poderá seguir para o próximo passo.

<a id='instalacao'></a>

### Instalação
Entre na pasta em que clonou o projeto e utilize o código abaixo para baixar as dependências da aplicação

```bash
# Baixe as dependências utilizando yarn (ou npm)
$ yarn
```

<a id='env-var'></a>

### Variáveis de desenvolvimento
Para rodar a aplicação é necessário que crie um arquivo chamado **.env.local** pegando como exemplo o arquivo **.env.example** presente na raíz desse projeto e colocar as keys correspondentes.
<a id='github-env'></a>

#### GitHub
Entre no seu perfil do GitHub e acesse as *configurações*. Logo após acesse as *Configurações de desenvolvimento* e *OAuth Apps*.
É importante crie um aplicativo com o *Authorization callback URL* com o valor **http://localhost:3000/api/auth/callback**. O nome e a homepage podem ser a que desejar e a descrição pode ser opcional.
Após a criação cole o Client ID e Client Secrets no arquivo .env criado.

<a id='faunadb-env'></a>

#### FaunaDB (Opcional)
No momento esse recurso não foi utilizado. Caso queira, pode criar uma conta no site https://fauna.com/, criar um banco de dados, acessar a aba de segurança e colar a sua key no arquivo .env.

<a id='contribuicao'></a>

### Contribuição
Obrigado por se interessar em melhorar este aplicativo. Incentivo todos a ajudar a melhorar este projeto com novos recursos, correções de bugs ou melhorias de desempenho. Por favor, dedique um pouco do seu tempo para ler o nosso guia para tornar este processo mais rápido e fácil

<a id='contribuicao-guidelines'></a>

#### Guidelines
Estou montando a [Guideline de contribuição](/.github/CONTRIBUTING.md).

<a id='license'></a>

### Licensa
[MIT](/.github/LICENSE.md).