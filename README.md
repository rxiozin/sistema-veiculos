# 🚗 Sistema de Gerenciamento de Veículos

Este projeto é um sistema CRUD de veículos desenvolvido com **Spring Boot**, **MySQL** e **HTML + JavaScript**, ideal para controle de estoque de veículos disponíveis e vendidos. Foi desenvolvido como trabalho da faculdade e também para compor meu portfólio.

---

## 🛠 Tecnologias Utilizadas

- ✔️ Java 17  
- ✔️ Spring Boot 3  
- ✔️ MySQL  
- ✔️ HTML5  
- ✔️ Bootstrap 5  
- ✔️ JavaScript (Fetch API)

---

## 🔧 Funcionalidades

- ✅ Cadastro de veículos  
- ✅ Consulta com filtros (marca, modelo, ano, status)  
- ✅ Edição e remoção de veículos  
- ✅ Integração via API REST  
- ✅ Interface simples, responsiva e funcional com Bootstrap  
- ✅ Separação clara entre front-end e back-end

---

## 🚀 Como Executar Localmente

### 🗄️ 1. Banco de Dados

- Crie o banco no MySQL:

```sql
CREATE DATABASE sistema_veiculos;
```
- Configure o arquivo (src/main/resources/application.properties)
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/sistema_veiculos
spring.datasource.username=root
spring.datasource.password=senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
## ⚙️ 2. Backend (API REST - Spring Boot)
Execute o projeto com Maven:
```bash
mvn spring-boot:run
```

## 🌐 3. Front-end
Os arquivos HTML e JS estão localizados em src/main/resources/static

Acesse pelo navegador:<br>
http://localhost:8080/index.html (cadastro)<br>
http://localhost:8080/veiculos.html (consulta)

## Estrutura do Projeto
```text
crudveiculos/
├── src/
│   ├── main/
│   │   ├── java/com/sistemaautomotivo/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   ├── service/
│   │   │   └── CrudveiculosApplication.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── veiculos.html
│   │       │   ├── script.js
│   │       │   └── veiculos.js
│   │       └── application.properties
└── pom.xml
```
