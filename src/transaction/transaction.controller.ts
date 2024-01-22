import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './transaction.repository';
import { ListTransactionDto } from './dto/list-transaction.dto';
import { TransactionEntity } from './transaction.entity';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly transactionRepository: TransactionRepository<TransactionEntity>,
  ) {}

  @Post()
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    const createdTransaction =
      await this.transactionService.createTransaction(createTransactionDto);

    return {
      transaction: new ListTransactionDto(
        createdTransaction.id,
        createdTransaction.acquirer,
        createdTransaction.acquirerAdress,
        createdTransaction.acquirerCep,
        createdTransaction.acquirerNeighborhood,
        createdTransaction.acquirerCity,
        createdTransaction.acquirerState,
        createdTransaction.acquirerCpf,
        createdTransaction.acquirerCnpj,
        createdTransaction.natureTransmission,
        createdTransaction.transmitter,
        createdTransaction.transmitterAdress,
        createdTransaction.transmitterCep,
        createdTransaction.transmitterNeighborhood,
        createdTransaction.transmitterCity,
        createdTransaction.transmitterState,
        createdTransaction.transmitterCpf,
        createdTransaction.transmitterCnpj,
        createdTransaction.description,
        createdTransaction.sender,
        createdTransaction.value,
        createdTransaction.observation,
        createdTransaction.local,
        createdTransaction.date,
      ),
      message: 'Transação criada!',
    };
  }

  @Get()
  async listAllTransactions() {
    const savedTransactions =
      await this.transactionService.listAllTransactions();

    return savedTransactions;
  }

  @Get(':id')
  async findTransactionById(@Param('id') id: number) {
    const savedTransactionById =
      await this.transactionService.findTransactionById(id);

    return savedTransactionById;
  }

  @Put(':id')
  async updateTransaction(
    @Param('id') id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const updatedTransaction = await this.transactionService.updateTransaction(
      id,
      updateTransactionDto,
    );

    return {
      transaction: new ListTransactionDto(
        updatedTransaction.id,
        updatedTransaction.acquirer,
        updatedTransaction.acquirerAdress,
        updatedTransaction.acquirerCep,
        updatedTransaction.acquirerNeighborhood,
        updatedTransaction.acquirerCity,
        updatedTransaction.acquirerState,
        updatedTransaction.acquirerCpf,
        updatedTransaction.acquirerCnpj,
        updatedTransaction.natureTransmission,
        updatedTransaction.transmitter,
        updatedTransaction.transmitterAdress,
        updatedTransaction.transmitterCep,
        updatedTransaction.transmitterNeighborhood,
        updatedTransaction.transmitterCity,
        updatedTransaction.transmitterState,
        updatedTransaction.transmitterCpf,
        updatedTransaction.transmitterCnpj,
        updatedTransaction.description,
        updatedTransaction.sender,
        updatedTransaction.value,
        updatedTransaction.observation,
        updatedTransaction.local,
        updatedTransaction.date,
      ),
      message: 'Transação atualizada!',
    };
  }

  @Delete(':id')
  async removeTransaction(@Param('id') id: number) {
    await this.transactionService.removeTransaction(id);

    return {
      message: 'Transação removida!',
    };
  }
}
