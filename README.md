# Projeto Módulos

Este projeto é um servidor Node.js que contém várias funcionalidades organizadas em módulos, incluindo uma calculadora, cálculo de impostos e um objeto representando uma pessoa.

## Estrutura do Projeto

```plaintext
/modulos
│
├── commons          # Pasta de commons
│        │
│       ├── calculadora.js        # Módulo de calculadora
│       ├── calculoImposto.js     # Módulo de cálculo de imposto
│       └── pessoas.js            # Módulo de objeto pessoa
└── app.js           # Arquivo principal que utiliza os módulos
```
## Funcionalidades

- **Calculadora**: Realiza operações matemáticas básicas (soma, subtração, multiplicação, divisão).
- **Cálculo de Imposto**: Calcula o valor do imposto e adiciona a taxa a um valor.
- **Objeto Pessoa**: Representa uma pessoa com nome, idade, profissão e estado.

## Execução

Para executar o projeto, use o seguinte comando:

```bash
node app.js
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Você pode abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença ISC.

