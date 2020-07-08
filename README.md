<h3 align="center">
  Desafio 05: First Node.js project
</h3>

## :rocket: About the challenge

> OBS: In the project folder you need running the command `yarn` to install all dependecies.

### Rotas da aplicação

- **`POST /transactions`**: This route must receive `title`, `value` e `type` in the body of request, being `type` the transaction type, `income` for input (deposits) and `outcome` for exits (withdrawals). When registering a new transaction, it must be stored inside an object with the following format:

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: This route must return a list with all registered transactions so far, along with the sum of the entries, withdrawls and total credito. This route should return an object with the following format:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

### Testing especification

- **`should be able to create a new transaction`**: For this test to be successful, your application should allow a transaction to be created, and return a json with the created transaction.

- **`should be able to list the transactions`**: For this test to be successful, your application should allow to be returned an object containing all transactions next the income balance, outcome balance and total transactions that were created so far.

- **`should not be able to create outcome transaction without a valid balance`**: For this test to be successful, your application should not allow an `outcome` transaction extrapolate the total value that the employee has in box, returning an answer with code HTTP 400 and a wrong message in the following format: `{ error: string }`

---

Done by Neylanio :wave:
