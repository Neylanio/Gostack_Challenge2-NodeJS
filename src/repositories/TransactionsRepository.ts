import Transaction from '../models/Transaction';

interface TransactionDTO {
  id?: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = this.transactions.reduce(
      (accumulator: Balance, transaction: Transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += transaction.value;
            break;

          case 'outcome':
            accumulator.outcome += transaction.value;
            break;

          default:
            break;
        }
        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    balance.total = balance.income - balance.outcome;

    return balance;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }

  public update({ id, title, value, type }: TransactionDTO): Transaction {
    const transactionId = this.transactions.findIndex(
      transaction => transaction.id === id,
    );

    const idd = String(id);

    this.transactions[transactionId] = {
      id: idd,
      title,
      value,
      type,
    };

    return this.transactions[transactionId];
  }
}

export default TransactionsRepository;
