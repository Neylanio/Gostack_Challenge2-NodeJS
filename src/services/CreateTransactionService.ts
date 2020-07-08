import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface CheckBalance {
  type: 'income' | 'outcome';
  value: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public checkBalance(value: number): boolean {
    return this.transactionsRepository.getBalance().total - value >= 0;
  }

  public execute({ title, type, value }: Request): Transaction {
    if (type === 'outcome') {
      if (!this.checkBalance(value)) {
        throw Error('Transaction not allowed');
      }
    }
    const transaction = this.transactionsRepository.create({
      title,
      type,
      value,
    });

    return transaction;
  }
}

export default CreateTransactionService;
