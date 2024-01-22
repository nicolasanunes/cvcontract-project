import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionRepository<TransactionEntity> {
  private transactions: TransactionEntity[] = [];
}
