# Airport Backend

Este é um projeto backend para gerenciamento de aeroportos e voos, desenvolvido usando NestJS e TypeORM. O projeto fornece APIs para criar, atualizar, listar e excluir aeroportos e voos.

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicativos Node.js eficientes e escaláveis.
- **TypeORM**: Biblioteca de ORM para TypeScript e JavaScript.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenamento de dados.
- **Docker**: Utilizado para configurar o ambiente de desenvolvimento e o banco de dados.

## Configuração do Ambiente

### Requisitos

- Node.js
- Docker (para configuração do banco de dados)
- Yarn ou npm (para gerenciamento de pacotes)

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/rmenga/airport_back_end.git
    cd airport_back_end
    ```

2. Instale as dependências:

    ```bash
    yarn install
    # ou
    npm install
    ```

3. Configure o Docker:

    Certifique-se de ter o Docker instalado e em execução. Então, inicie o banco de dados com o Docker Compose:

    ```bash
    docker-compose up -d
    ```

    O arquivo `docker-compose.yml` configura um serviço de banco de dados PostgreSQL com as seguintes credenciais:
    - **Usuário**: `postgres`
    - **Senha**: `postgres`
    - **Banco de Dados**: `locations_db`
    - **Porta**: `5432`

4. Configure o banco de dados na aplicação:

    O projeto está configurado para se conectar ao banco de dados PostgreSQL usando as credenciais definidas no `docker-compose.yml`. A configuração está no arquivo `src/app.module.ts`.

5. Inicie o servidor:

    ```bash
    yarn start
    # ou
    npm start
    ```

## Endpoints

### Aeroportos

- **GET /locations**: Lista todos os aeroportos.
- **GET /locations/:id**: Obtém um aeroporto pelo ID.
- **POST /locations**: Cria um novo aeroporto.
- **PUT /locations/:id**: Atualiza um aeroporto existente.
- **DELETE /locations/:id**: Remove um aeroporto pelo ID.

### Voos

- **GET /flights**: Lista todos os voos.
- **GET /flights/:id**: Obtém um voo pelo ID.
- **POST /flights**: Cria um novo voo.
- **PUT /flights/:id**: Atualiza um voo existente.
- **DELETE /flights/:id**: Remove um voo pelo ID.
