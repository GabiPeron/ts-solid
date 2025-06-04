# 🧱 SOLID com TypeScript

Este repositório foi criado com o objetivo de estudar e aplicar os princípios **SOLID** utilizando **TypeScript**, com foco em boas práticas de **programação orientada a objetos** e **design de software**.

> 📚 Projeto desenvolvido durante o curso [Design Patterns com TypeScript](https://www.udemy.com/course/curso-design-patterns-typescript) na Udemy.

---

## 🎯 Objetivo

A proposta é implementar, de forma prática e didática, cada um dos 5 princípios do SOLID, com exemplos que demonstrem como escrevê-los de forma clara, reutilizável e sustentável.

---

## 📐 Princípios SOLID

- **S – Single Responsibility Principle**  
  Uma classe deve ter **um único motivo para mudar**.

- **O – Open/Closed Principle**  
  Entidades de software devem estar **abertas para extensão**, mas **fechadas para modificação**.

- **L – Liskov Substitution Principle**  
  Subtipos devem ser substituíveis por seus tipos base **sem quebrar o comportamento esperado**.

- **I – Interface Segregation Principle**  
  Uma classe **não deve ser forçada a depender** de interfaces que não utiliza.

- **D – Dependency Inversion Principle**  
  Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de **abstrações**.

---

## 🚀 Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- Node.js
- Paradigma Orientado a Objetos
- Docker

---

## 📂 Organização

Cada princípio está implementado em seu respectivo diretório dentro da pasta `src/`, com exemplos isolados e comentados para facilitar o entendimento.

```bash
src/
├── SRP/
├── OCP/
├── LSP/
├── ISP/
└── DIP/
```

---

## ▶️ Como Executar

### 🔧 Executando localmente (Node.js)

1. Clone o repositório:

```bash
git clone https://github.com/GabiPeron/ts-solid.git
cd ts-solid
```

2. Instale as dependências:

```bash
npm install
```

3. Execute os exemplos:

```bash
npm run dev
```

---

### 🐳 Executando com Docker

Este projeto também pode ser executado com Docker. Basta garantir que você tenha o Docker instalado e rodar o seguinte comando:

```bash
docker compose up
```

Isso irá:

- Construir a imagem (caso necessário)
- Instalar as dependências
- Executar o projeto

---

## 🧠 Autor

**Gabriel Peron**  
🔗 [gabrielperon.dev](https://gabrielperon.dev)  

---
