import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createWriteStream } from 'fs';
import PDFDocument from 'pdfkit-table';
import { TransactionEntity } from 'src/transaction/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PdfService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  async createPdf(id: number) {
    const transaction = await this.transactionRepository.findOne({
      where: { id },
    });

    if (transaction === null)
      throw new NotFoundException('O id não foi encontrado!');

    const doc = new PDFDocument({ font: 'Times-Roman', size: 'A4' });
    const filename = `./src/public/pdf/${(
      transaction.id +
      '-' +
      Date.now()
    ).toLowerCase()}.pdf`;

    row(doc, 48, 36);
    doc.lineCap('butt').moveTo(295, 48).lineTo(295, 84).stroke();
    textInRow(doc, 'PREFEITURA MUNICIPAL DE', 54, 88);
    textInRow(doc, 'PATROCÍNIO - MG', 69, 118);
    textInRow(doc, 'GUIA DE INFORMAÇÃO - ITBI', 54, 333);
    textInRow(doc, '"INTER VIVOS"', 69, 373);

    row(doc, 94, 36);
    textInRow(doc, `ADQUIRENTE: ${transaction.acquirer}`, 100, 52);

    row(doc, 130, 18);
    doc.lineCap('butt').moveTo(422, 130).lineTo(422, 148).stroke();
    textInRow(doc, `ENDEREÇO: ${transaction.acquirerAdress}`, 136, 52);
    textInRow(doc, `CEP: ${transaction.acquirerCep}`, 136, 426);

    row(doc, 148, 18);
    doc.lineCap('butt').moveTo(255, 148).lineTo(255, 166).stroke();
    doc.lineCap('butt').moveTo(462, 148).lineTo(462, 166).stroke();
    textInRow(doc, `BAIRRO: ${transaction.acquirerNeighborhood}`, 154, 52);
    textInRow(doc, `MUNICÍPIO: ${transaction.acquirerCity}`, 154, 259);
    textInRow(doc, `ESTADO: ${transaction.acquirerState}`, 154, 466);

    row(doc, 166, 18);
    doc.lineCap('butt').moveTo(295, 166).lineTo(295, 184).stroke();
    textInRow(doc, `CPF: ${transaction.acquirerCpf}`, 172, 52);
    textInRow(doc, `CNPJ: ${transaction.acquirerCnpj}`, 172, 299);

    row(doc, 184, 18);
    textInRow(
      doc,
      `NATUREZA DA TRANSMISSÃO: ${transaction.natureTransmission}`,
      190,
      52,
    );

    row(doc, 212, 36);
    textInRow(doc, `TRANSMITENTE: ${transaction.transmitter}`, 218, 52);

    row(doc, 248, 18);
    doc.lineCap('butt').moveTo(422, 248).lineTo(422, 266).stroke();
    textInRow(doc, `ENDEREÇO: ${transaction.transmitterAdress}`, 254, 52);
    textInRow(doc, `CEP: ${transaction.transmitterCep}`, 254, 426);

    row(doc, 266, 18);
    doc.lineCap('butt').moveTo(255, 266).lineTo(255, 284).stroke();
    doc.lineCap('butt').moveTo(462, 266).lineTo(462, 284).stroke();
    textInRow(doc, `BAIRRO: ${transaction.transmitterNeighborhood}`, 272, 52);
    textInRow(doc, `MUNICÍPIO: ${transaction.transmitterCity}`, 272, 259);
    textInRow(doc, `ESTADO: ${transaction.transmitterState}`, 272, 466);

    row(doc, 284, 18);
    doc.lineCap('butt').moveTo(295, 284).lineTo(295, 302).stroke();
    textInRow(doc, `CPF: ${transaction.transmitterCpf}`, 290, 52);
    textInRow(doc, `CNPJ: ${transaction.transmitterCnpj}`, 290, 299);

    row(doc, 312, 300);
    textInRow(doc, `${transaction.description}`, 318, 52);

    row(doc, 594, 18);
    textInRow(doc, `GUIA EMITIDA POR: ${transaction.sender}`, 600, 52);

    row(doc, 622, 18);
    textInRow(
      doc,
      `A ESCRITURA SERÁ LAVRADA PELO VALOR DE: R$${transaction.value}`,
      628,
      52,
    );

    row(doc, 640, 108);
    textInRow(doc, `OBSERVAÇÃO: ${transaction.observation}`, 646, 52);

    row(doc, 748, 18);
    doc.lineCap('butt').moveTo(222, 748).lineTo(222, 766).stroke();
    doc.lineCap('butt').moveTo(320, 748).lineTo(320, 766).stroke();
    textInRow(doc, `LOCAL: ${transaction.local}`, 754, 52);
    textInRow(doc, `DATA: ${transaction.date}`, 754, 224);
    textInRow(doc, 'ASSINATURA: ', 754, 324);

    doc.pipe(createWriteStream(filename));
    doc.end();

    return console.log(`PDF ${filename} criado!`);
  }
}

function textInRow(doc, text, heigth, width) {
  doc.y = heigth;
  doc.x = width;
  doc.fillColor('black');
  doc.text(text, {
    paragraphGap: 5,
    indent: 0,
    align: 'justify',
    columns: 1,
    width: 490,
  });
  return doc;
}

function row(doc, heigth, lineHeight) {
  doc.lineJoin('miter').rect(48, heigth, 498, lineHeight).stroke();
  return doc;
}
