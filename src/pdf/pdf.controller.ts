import { Controller, Post, Param } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post(':id')
  createPdf(@Param('id') id: number) {
    this.pdfService.createPdf(id);

    return {
      message: 'PDF criado!',
    };
  }
}
