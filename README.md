Airport Backend
Este é um projeto backend para gerenciamento de aeroportos e voos, desenvolvido usando NestJS e TypeORM. O projeto fornece APIs para criar, atualizar, listar e excluir aeroportos e voos.

Tecnologias Utilizadas
- NestJS: Framework para construção de aplicativos Node.js eficientes e escaláveis.
- TypeORM: Biblioteca de ORM para TypeScript e JavaScript.
- PostgreSQL: Banco de dados relacional utilizado para armazenamento de dados.
- Docker: Utilizado para configurar o banco de dados.

Requisitos
- Node.js
- Docker

Instalação
1. Clone o repositório:
git clone https://github.com/rmenga/airport_back_end.git
cd airport_back_end
2. Instale as dependências:
npm install
3. Configure o Docker:
Certifique-se de ter o Docker instalado e em execução. Então, inicie o banco de dados com o Docker Compose: docker-compose up -d

Endpoints:

Aeroportos
GET /locations: Lista todos os aeroportos.
GET /locations/
: Obtém um aeroporto pelo ID.
POST /locations: Cria um novo aeroporto.
PUT /locations/
: Atualiza um aeroporto existente.
DELETE /locations/
: Remove um aeroporto pelo ID.
Voos
GET /flights: Lista todos os voos.
GET /flights/
: Obtém um voo pelo ID.
POST /flights: Cria um novo voo.
PUT /flights/
: Atualiza um voo existente.
DELETE /flights/
: Remove um voo pelo ID.
