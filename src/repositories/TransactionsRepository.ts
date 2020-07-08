import Transaction from '../models/Transaction';

interface CreateTransection {
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
    const incomes: number[] | 0 = [];
    const outcomes: number[] | 0 = [];

    incomes.push(0);
    outcomes.push(0);

    this.transactions.map(item => {
      if (item.type === 'income') {
        incomes.push(item.value);
      } else if (item.type === 'outcome') {
        outcomes.push(item.value);
      }
      return item;
    });

    const incomesTotal = incomes.reduce((total, next) => total + next);
    const outcomesTotal = outcomes.reduce((total, next) => total + next);

    const total = incomesTotal - outcomesTotal;

    const balance = {
      income: incomesTotal,
      outcome: outcomesTotal,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransection): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
