import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transaction' })
export class TransactionEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'acquirer', length: 70, nullable: false })
  acquirer: string;

  @Column({ name: 'acquirer_adress', length: 128, nullable: false })
  acquirerAdress: string;

  @Column({ name: 'acquirer_cep', length: 70, nullable: false })
  acquirerCep: string;

  @Column({ name: 'acquirer_neighborhood', length: 70, nullable: false })
  acquirerNeighborhood: string;

  @Column({ name: 'acquirer_city', length: 70, nullable: false })
  acquirerCity: string;

  @Column({ name: 'acquirer_state', length: 70, nullable: false })
  acquirerState: string;

  @Column({ name: 'acquirer_cpf', length: 70, nullable: true })
  acquirerCpf: string;

  @Column({ name: 'acquirer_cnpj', length: 128, nullable: true })
  acquirerCnpj: string;

  @Column({ name: 'nature_transmission', length: 128, nullable: false })
  natureTransmission: string;

  @Column({ name: 'transmitter', length: 70, nullable: false })
  transmitter: string;

  @Column({ name: 'transmitter_adress', length: 128, nullable: false })
  transmitterAdress: string;

  @Column({ name: 'transmitter_cep', length: 70, nullable: false })
  transmitterCep: string;

  @Column({ name: 'transmitter_neighborhood', length: 70, nullable: false })
  transmitterNeighborhood: string;

  @Column({ name: 'transmitter_city', length: 70, nullable: false })
  transmitterCity: string;

  @Column({ name: 'transmitter_state', length: 70, nullable: false })
  transmitterState: string;

  @Column({ name: 'transmitter_cpf', length: 70, nullable: true })
  transmitterCpf: string;

  @Column({ name: 'transmitter_cnpj', length: 128, nullable: true })
  transmitterCnpj: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'sender', length: 128, nullable: false })
  sender: string;

  @Column({ name: 'value', length: 70, nullable: false })
  value: string;

  @Column({ name: 'observation', length: 255, nullable: true })
  observation: string;

  @Column({ name: 'local', length: 70, nullable: false })
  local: string;

  @Column({ name: 'date', length: 70, nullable: false })
  date: string;
}
