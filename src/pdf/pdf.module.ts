import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { TransactionRepository } from 'src/transaction/transaction.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/transaction/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
  controllers: [PdfController],
  providers: [PdfService, TransactionService, TransactionRepository],
})
export class PdfModule {}
