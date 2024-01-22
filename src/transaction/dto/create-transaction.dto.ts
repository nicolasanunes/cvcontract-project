import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateTransactionDto {
  @IsNotEmpty({ message: 'O adquirente não pode ser vazio!' })
  acquirer: string;

  @IsNotEmpty({ message: 'O endereço do adquirente não pode ser vazio!' })
  acquirerAdress: string;

  @IsNotEmpty({ message: 'O CEP do adquirente não pode ser vazio!' })
  acquirerCep: string;

  @IsNotEmpty({ message: 'O bairro do adquirente não pode ser vazio!' })
  acquirerNeighborhood: string;

  @IsNotEmpty({ message: 'A cidade do adquirente não pode ser vazia!' })
  acquirerCity: string;

  @IsNotEmpty({ message: 'O estado do adquirente não pode ser vazio!' })
  acquirerState: string;

  acquirerCpf: string;

  acquirerCnpj: string;

  @IsNotEmpty({ message: 'A natureza da transmissão não pode ser vazia!' })
  natureTransmission: string;

  @IsNotEmpty({ message: 'O transmitente não pode ser vazio!' })
  transmitter: string;

  @IsNotEmpty({ message: 'O endereço do transmitente não pode ser vazio!' })
  transmitterAdress: string;

  @IsNotEmpty({ message: 'O CEP do transmitente não pode ser vazio!' })
  transmitterCep: string;

  @IsNotEmpty({ message: 'O bairro do transmitente não pode ser vazio!' })
  transmitterNeighborhood: string;

  @IsNotEmpty({ message: 'A cidade do transmitente não pode ser vazia!' })
  transmitterCity: string;

  @IsNotEmpty({ message: 'O estado do transmitente não pode ser vazio!' })
  transmitterState: string;

  transmitterCpf: string;

  transmitterCnpj: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia!' })
  description: string;

  @IsNotEmpty({ message: 'O emissor não pode ser vazio!' })
  sender: string;

  @IsNotEmpty({ message: 'O valor não pode ser vazio!' })
  value: string;

  observation: string;

  @IsNotEmpty({ message: 'O local não pode ser vazio!' })
  local: string;

  @IsNotEmpty({ message: 'A data não pode ser vazia!' })
  date: string;
}
