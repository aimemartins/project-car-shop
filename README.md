# Projeto Car Shop

Esse projeto foi elaborado durante o Módulo de __Back-end__ do curso da Trybe para desenvolver habilidades com os conteúdos de criação de API com Banco de Dados Não Relacional usando POO, com os assuntos de: <br>
<br>
🔹 Configurações Docker <br>
🔹 Banco de dados não-relacional (MongoDB) <br>
🔹 Sequelize <br>
🔹 Criação de endpoints <br>
🔹 TDD: Test Driven Development <br>
🔹 JWT - (JSON Web Token) <br>
🔹 Typescript <br>
🔹 Arquitetura em Camadas (MSC) <br>
🔹 POO <br>

 ###### :warning: Importante <br> <br>  ▪  Apenas os arquivos indicados nos requisitos foram desenvolvidos pelo(s) aluno(s), os demais são de autoria da Trybe. <br> <br>▪  Os projetos e assuntos são cumulativos, a medida que se é aprendido e aplicado os assuntos, provavelmente eles serão utilizados nos projetos subsequenquentes dos módulos.

## Índice
- [Elaboração](#elaboração)
- [Sobre](#sobre)
- [Orientações](#orientações)
- [Instalação](#instalação)
- [Status](#status)
- [Requisitos](#requisitos)
  - [Requisitos Obrigatórios](#requisitos-obrigatórios)
  - [Requisitos Bônus](#requisitos-bônus)
  - [Requisitos Não Avaliativos](#requisitos-não-avaliativos)
  


## Elaboração
<a href="https://github.com/aimemartins">
  <img src="https://avatars.githubusercontent.com/u/108954069?v=4" width="80px" alt="Aimê Martins"/> <p>Aimê Martins</p>


## Sobre

 Para este projeto, você deverá aplicar os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` para gerenciar uma concessionária de veículos. Isso será feito utilizando o banco de dados `MongoDB` através do framework do `Mongoose`.


## Instalação

1. Clone o repositório com o comando: `git clone git@github.com:aimemartins/project-car-shop.git`
2. Entre na pasta do repositório que você acabou de clonar: `cd project-car-shop`
3. Execute o comando `npm install` para instalar as dependências.

#### :warning: ATENÇÃO: Não rode o comando `npm audit fix`! _Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador._


## Orientações
<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

  ## 👉 Com Docker

  **⚠ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > :information_source: Renomeie o arquivo `src/server.example.ts`, retirando o `.example`, e descomente o conteúdo do mesmo. Rode os serviços `app-car-shop` e `mongodb` com o comando `docker-compose up -d`.

  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > :information_source: Use o comando `docker exec -it car_shop bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  
  - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
  - **⚠ Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.
  - **⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="public/remote-container.png" width="800px" >

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  **⚠ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br>
</details>
<details>
  <summary><strong>🎛 Linter</strong></summary>

  Para fazer a análise estática do seu código neste projeto, vamos utilizar o linter [ESLint](https://eslint.org/). Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

  - Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`
  - Para poder rodar o `ESLint` basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. 
  - Se a análise do `ESLint` encontrar problemas no seu código, eles serão mostrados no seu terminal. 
  - Se não houver problema no seu código, nada será impresso no seu terminal.
  - Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

  ⚠️ **Importante**: Pull Requests com issues de erro de Linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento.

  <br>
</details>

<details>
  <summary><strong>⚠️ Informações importantes sobre o projeto </strong></summary>

  ### ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

  #### 👀 Observações importantes:

  Em cada requisito você encontrará informações demonstrando como sua API deverá se comportar, dada a requisição específica. O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

  O projeto possui uma pasta `src`, e é **fortemente recomendável que você construa sua aplicação dentro dessa pasta**.

  ##### Estrutura das pastas dentro de `src`

  **⚠️ Atenção:** é muito importante que a estrutura abaixo seja mantida para que os testes funcionem da maneira desejada. _(lembre-se de manter os nomes dos diretórios com a primeira letra maiúscula e no plural, conforme mostrado no exemplo abaixo, ex: `Controllers`, `Models`, `Services`, `Interfaces`, `Domains`)_

  ```tree
  .
  ├── src/
  │   ├── Controllers/
  │   ├── Domains/
  │   ├── Interfaces/
  │   ├── middlewares/
  │   ├── Models/
  │   ├── Routes/
  │   ├── Services/
  │   └── ...
  ├── tests/
  │   ├── unit/
  |   │      ├── Services/
  |   │      ├── ...
  |   └── ... 
  └── ...
  ```

  ##### Arquivos importantes

  Dentro da pasta `src` foram deixados alguns arquivos de exemplo sendo eles:
  - `src/serve.example.ts`
  - `src/app.ts`

  Lembre-se de renomear o arquivo de `server`, removendo o `.example` e use o arquivo de `app.ts` para concentrar os middlewares de sua aplicação.

  Dentro da pasta raiz também existe um arquivo `.env.example`, este é o único arquivo que pode ser alterado neste nível. Não altere ou instale novas dependências no arquivo `packages.json`, pois o mesmo está travado para essa avaliação.

  ---

  A conexão do banco local contida no arquivo `src/Models/Connection.ts` deverá conter a seguinte variável, ou no `.env`:
  ```typescript
  const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';
  ```

  Para o avaliador funcionar, mantenha a `Connection` como esta! Com a variável `process.env.MONGO_URI` em `src/Models/Connection.ts` :
  ```typescript
  const connectToDatabase = (
    mongoDatabaseURI = process.env.MONGO_URI // Não altere
      || MONGO_DB_URL,
  ) => mongoose.connect(mongoDatabaseURI);
  ```

  ##### Lembretes

  - Lembre-se de não entregar o projeto com nenhum teste ignorado. Testes ignorados serão tratados como testes falhando!
  - Não apague, em hipótese alguma, qualquer teste ou arquivo deste repositório.
  - `src/Models`, `src/Services`, `src/Controllers`, `src/Interfaces`, `src/Domains` e seus respectivos arquivos criados durante a execução do projeto, devem seguir à risca os nomes informados no README e conforme foi ensinado na seção.
  - Os testes do projeto DEVEM ser de unidade, testando camadas.
  - Quando não especificado o retorno de um código de `status`, utilize os aprendidos até o momento de forma correta.

  **⚠️ Atenção:** é normal o linter acusar `warnings`, deixamos a conexão com o banco de dados com alguns `console.log()` e isso é para auxiliar no desenvolvimento. Se o `Mongoose` não subir uma instância do banco de dados com o servidor, o banco de dados não funciona! E por isso deixamos os _consoles_... Se quiser remover, fique a vontade 😉

  <br>
</details>

<details>
  <summary><strong>👀 Dicas</strong></summary>

  - O arquivo `src/Models/Connection.ts` possui o código necessário para realizar a conexão com o banco de dados:
  
  ```typescript
  import mongoose from 'mongoose';
  import 'dotenv/config';

  const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';

  const connectToDatabase = (
    mongoDatabaseURI = process.env.MONGO_URI
      || MONGO_DB_URL,
  ) => mongoose.connect(mongoDatabaseURI);

  export default connectToDatabase;
  ```

  - O arquivo `src/app.ts` contém o código necessário para começar a gerenciar os `middlewares`:

  ```typescript
  import express from 'express';

  const app = express();

  export default app;
  ```

  **⚠️ Atenção:** é muito importante que o arquivo `src/app.ts` exporte uma instância do `app express` para que os testes funcionem.

  <br>
</details>


## Testes
<details>
  <summary><strong>🛠 Execução de testes localmente</strong></summary>

  Para executar os testes localmente, digite no terminal o comando `npm test`.

  Para executar apenas um teste por vez, basta executar o comando `npm test caminho-do-test`, ex:.
    - `npm test __tests__/01`;
    - ou, `npm test __tests__/01\ -\ createCar.test.ts`;
    - ou, `npm test 01`;

  Você também pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `describe`. Como o nome indica, a função a seguir "pula" um teste:

  ```typescript
  describe.skip('...', () => {})
  ```
  <br>
</details>

   
## Status
O projeto está com 100% dos requisitos totais finalizados

## Requisitos 

## Requisitos Obrigatórios

### 01 - Crie a rota /cars onde seja possível cadastrar um carro

- O endpoint deve ser acessível através do caminho (`/cars`);

- Os carros cadastrados devem ser salvos na collection `cars` do banco de dados;

- Os nomes dos arquivos/classes/interfaces devem ser definidos em inglês e seguir a organização/padronização de diretórios e nomenclatura ensinadas na seção;

- Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: `Pet.ts` ---> `export default class Pet { }`);

- Os atributos necessários para criar um carro estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que existe uma *interface* de nome `ICar` que representa o contrato usado para cadastrar um carro;
  - Será validado que a *interface* contém os atributos especificados na tabela;
  - Será validado que existe uma *classe* de domínio com o nome `Car` que representa o objeto carro;
  - Será validado que a *classe* de domínio carro contém os atributos: `doorsQty` e `seatsQty` acessíveis apenas a própria classe;
  - Será validado que a *classe* de domínio carro contém os atributos restantes acessíveis a própria classe e suas subclasses;
  - Será validado que a instância da *classe* de domínio carro recebe como parâmetro um objeto do tipo `ICar`;
  - Será validado que é possível cadastrar um carro com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves:
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.990,
        "doorsQty": 4,
        "seatsQty": 5
      }
    ```

  <br>
</details>

**⚠️ Atenção**, para o requisito ser avaliado corretamente:
 - A instância de um objeto de domínio deve receber um objeto como parâmetro;
 - As exportações devem ser feitas no formato `export default`;

---

### 02 - Crie o endpoint para listar carros

- O endpoint deve ser acessível através do caminho (`/cars`) e (`/cars/:id`);

- Os carros listados devem vir da collection `cars` do banco de dados;

- Através do caminho `/cars/:id`, apenas o carro com o `id` presente na URL deve ser retornado;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que é possível listar todos os carros;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Marea",
            "year": 2002,
            "color": "Black",
            "status": true,
            "buyValue": 15.99,
            "doorsQty": 4,
            "seatsQty": 5
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Tempra",
            "year": 1995,
            "color": "Black",
            "buyValue": 39,
            "doorsQty": 2,
            "seatsQty": 5
          }
        ]
      ```
  - Será validado que não é possível listar um carro que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Será validado que não é possível listar um carro quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível listar um carro específico com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        {
          "id": "634852326b35b59438fbea2f",
          "model": "Marea",
          "year": 2002,
          "color": "Black",
          "status": true,
          "buyValue": 15.99,
          "doorsQty": 4,
          "seatsQty": 5
        }
      ```
  <br>
</details>

---

### 03 - Escreva testes para cobrir 30% da camada de Service

- Obrigatoriamente seus arquivos de teste devem ficar no diretório `tests/unit`;

- Obrigatoriamente seus testes devem fazer stub do banco de dados;

- Opcionalmente você pode parar o serviço do `MongoDB` em sua máquina e executar seus teste com o comando `npm run test:mocha`;

- Só será contabilizada a cobertura, se seus testes não conterem erros.

<details open>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 3 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 30%;

  <br>
</details>

---

### 04 - Crie a rota /cars/:id onde seja possível atualizar um carro por ID

- O endpoint deve ser acessível através do caminho (`/cars/:id`);

- Apenas o carro com o `id` presente na URL deve ser atualizado;

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que não é possível alterar um carro que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Será validado que não é possível alterar um carro quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível alterar um carro com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
    ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 1992,
        "color": "Red",
        "status": true,
        "buyValue": 12.000,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ```

  <br>
</details>

---

### 05 - Crie a rota /motorcycles onde seja possível cadastrar uma moto

- O endpoint deve ser acessível através do caminho (`/motorcycles`);

- As motos cadastradas devem ser salvas na collection `motorcycles` do banco de dados;

- Os nomes dos arquivos/classes/interfaces devem ser definidos em inglês e seguir a organização/padronização de diretórios e nomenclatura ensinadas na seção;

- Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: `Pet.ts` ---> `export default class Pet { }`);

- *Interface* e *classe de domínio* referentes a carro, obrigatoriamente devem ser refatorados;

- Os atributos necessários para criar uma moto estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `category` | _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_ |
| `engineCapacity` | _Number_ contendo capacidade do motor |

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que existe uma *interface* de nome `IMotorcycle` que representa o contrato usado para cadastrar uma moto;
  - Será validado que a *interface* contém os atributos especificados na tabela;
  - Será validado que existe uma *interface* de nome `IVehicle` e esta contém os atributos repetidos de carro e moto;
    - _Deve-se refatorar as `Interfaces` se necessário;_
  - Será validado que existe uma *classe* de domínio com o nome `Motorcycle` que representa o objeto moto;
  - Será validado que a *classe* de domínio moto contém os atributos: `category` e `engineCapacity` acessíveis apenas a própria classe;
  - Será validado que a *classe* de domínio moto contém os atributos restantes acessíveis a própria classe e suas subclasses;
  - Será validado que a instância da *classe* de domínio moto recebe como parâmetro um objeto do tipo `IMotorcycle`;
  - Será validado que existe uma *classe* de domínio com o nome `Vehicle` e esta contém os atributos repetidos de carro e moto;
    - _Deve-se refatorar as `Domains` se necessário;_
  - Será validado que a *classe* de domínio veiculo contém os atributos acessíveis a própria classe e suas subclasses;
  - Será validado que existe uma *classe* de nome `AbstractODM` que representa o modelo de comunicação com o banco e ela serve como abstração para as demais;
    - _Deve-se refatorar as `Models` se necessário;_
  - Será validado que é possível cadastrar uma moto com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves:
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      }
    ```

  <br>
</details>

**⚠️ Atenção**, para o requisito ser avaliado corretamente:
 - A instância de um objeto de domínio deve receber um objeto como parâmetro;
 - As exportações devem ser feitas no formato `export default`;
 - Arquivos/códigos feitos para *cars* ~devem~ podem sofrer refatorações;

---

### 06 - Escreva testes para cobrir 60% da camada de Service

- Obrigatoriamente seus arquivos de teste devem ficar no diretório `tests/unit`;

- Obrigatoriamente seus testes devem fazer stub do banco de dados;

- Opcionalmente você pode parar o serviço do `MongoDB` em sua máquina e executar seus teste com o comando `npm run test:mocha`;

- Só será contabilizada a cobertura, se seus testes não conterem erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 5 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 60%;

  <br>
</details>

---

### 07 - Crie a rota /motorcycles onde seja possível listar motos

- O endpoint deve ser acessível através do caminho (`/motorcycles`) e (`/motorcycles/:id`);

- As motos listadas devem vir da collection `motorcycles` do banco de dados;

- Através do caminho `/motorcycles/:id`, apenas a moto com o `id` presente na URL deve ser retornada;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que é possível listar todas as motos;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Honda Cb 600f Hornet",
            "year": 2005,
            "color": "Yellow",
            "status": true,
            "buyValue": 30.000,
            "category": "Street",
            "engineCapacity": 600
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Honda Cbr 1000rr",
            "year": 2011,
            "color": "Orange",
            "status": true,
            "buyValue": 59.900,
            "category": "Street",
            "engineCapacity": 1000
          }
        ]
      ```
  - Será validado que não é possível listar uma moto que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Será validado que não é possível listar uma moto quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível listar uma moto específica com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        {
          "id": "634852326b35b59438fbea31",
          "model": "Honda Cbr 1000rr",
          "year": 2011,
          "color": "Orange",
          "status": true,
          "buyValue": 59.900,
          "category": "Street",
          "engineCapacity": 1000
        }
      ```
  <br>
</details>

---

## Requisitos Bônus

### 08 - Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID

- O endpoint deve ser acessível através do caminho (`/motorcycles/:id`);

- Apenas a moto com o `id` presente na URL deve ser atualizada;

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que não é possível alterar uma moto que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Será validado que não é possível alterar uma moto quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível alterar uma moto com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
    ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2014,
        "color": "Red",
        "status": true,
        "buyValue": 45.000,
        "category": "Street",
        "engineCapacity": 600
      }
    ```

  <br>
</details>

---

### 09 - Escreva testes para cobrir 80% da camada de Service

- Obrigatoriamente seus arquivos de teste devem ficar no diretório `tests/unit`;

- Obrigatoriamente seus testes devem fazer stub do banco de dados;

- Opcionalmente você pode parar o serviço do `MongoDB` em sua máquina e executar seus teste com o comando `npm run test:mocha`;

- Só será contabilizada a cobertura, se seus testes não conterem erros.

<details open>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 8 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 80%;

  <br>
</details>

---

## Requisitos não avaliativos

### 10 - Crie a rota /cars/:id onde seja possível excluir um carro por ID

- O endpoint pode ser acessível através do caminho (`/cars/:id`);

- Através do caminho `/cars/:id`, apenas o carro com o `id` presente na URL deve ser excluído;

<details close>

  - Não é possível excluir um carro que não existe;
    - Retorne `status 404` e um JSON com a mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Não é possível excluir um carro quando o formato do `id` esta inválido;
    - Retorne `status 422` e um JSON com a mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Ao excluir com sucesso, retorne `status 204` sem body;

  <br>
</details>

---

### 11 - Crie a rota /motorcycles/:id onde seja possível excluir uma moto por ID

- O endpoint pode ser acessível através do caminho (`/motorcycles/:id`);

- Através do caminho `/motorcycles/:id`, apenas a moto com o `id` presente na URL deve ser excluída;

<details close>

  - Não é possível excluir uma moto que não existe;
    - Retorne `status 404` e um JSON com a mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Não é possível excluir uma moto quando o formato do `id` esta inválido;
    - Retorne `status 422` e um JSON com a mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Ao excluir com sucesso, retorne `status 204` sem body;
  <br>
</details>

---

### 12 - Escreva testes de unidade para cobrir 100% da sua aplicação

- Escreva testes para as camadas de `Models`, `Services` e `Controllers` de forma a cobrir 100% das camadas de sua aplicação;

- Se quiser se desafiar, escreva testes de integração também;

- **✨ Dica:** Utilize o comando `npm run test:coverage` para verificar a cobertura de seus testes;

- **✨ Dica:** Não se esqueça que seus arquivos de testes devem ficar no diretório `tests/unit`, ou `tests/integration`;

- **✨ Dica:** Não se esqueça que seus testes devem fazer stub do banco de dados, quando escritos a nível de unidade.
