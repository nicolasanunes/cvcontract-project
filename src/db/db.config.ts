import { TransactionEntity } from 'src/transaction/transaction.entity';
import { DataSourceOptions } from 'typeorm';

export const dbConfig: DataSourceOptions = {
  type: 'sqlite',
  database: 'db/sql',
  synchronize: true, // Obs: use synchronize: true somente em desenvolvimento
  entities: [TransactionEntity],
};
