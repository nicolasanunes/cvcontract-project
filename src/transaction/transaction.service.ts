import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { Repository } from 'typeorm';
import { ListTransactionDto } from './dto/list-transaction.dto';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
    private readonly customRepository: TransactionRepository<TransactionEntity>,
  ) {}

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const transactionEntity = new TransactionEntity();

    Object.assign(transactionEntity, createTransactionDto as TransactionEntity);

    return this.transactionRepository.save(transactionEntity);
  }

  async listAllTransactions() {
    const savedTransactions = await this.transactionRepository.find();

    const listAllTransactions = savedTransactions.map(
      (transaction) =>
        new ListTransactionDto(
          transaction.id,
          transaction.acquirer,
          transaction.acquirerAdress,
          transaction.acquirerCep,
          transaction.acquirerNeighborhood,
          transaction.acquirerCity,
          transaction.acquirerState,
          transaction.acquirerCpf,
          transaction.acquirerCnpj,
          transaction.natureTransmission,
          transaction.transmitter,
          transaction.transmitterAdress,
          transaction.transmitterCep,
          transaction.transmitterNeighborhood,
          transaction.transmitterCity,
          transaction.transmitterState,
          transaction.transmitterCpf,
          transaction.transmitterCnpj,
          transaction.description,
          transaction.sender,
          transaction.value,
          transaction.observation,
          transaction.local,
          transaction.date,
        ),
    );

    return listAllTransactions;
  }

  async findTransactionById(id: number) {
    const checkId = await this.transactionRepository.findOne({
      where: { id },
    });

    if (checkId === null)
      throw new NotFoundException('O id não foi encontrado!');

    return checkId;
  }

  async updateTransaction(
    id: number,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const updatedTransaction = await this.transactionRepository.findOneBy({
      id,
    });

    if (updatedTransaction === null)
      throw new NotFoundException('A transação não foi encontrada!');

    Object.assign(
      updatedTransaction,
      updateTransactionDto as TransactionEntity,
    );

    return this.transactionRepository.save(updatedTransaction);
  }

  async removeTransaction(id: number) {
    const removedTransaction = await this.transactionRepository.delete(id);

    if (!removedTransaction.affected) {
      throw new NotFoundException('A transação não foi encontrada!');
    }
  }
}
