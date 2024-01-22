import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './db/db.config';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [PdfModule, TransactionModule, TypeOrmModule.forRoot(dbConfig)],
})
export class AppModule {}
