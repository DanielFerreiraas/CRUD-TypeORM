import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()

export class Language {
    @PrimaryGeneratedColumn()
    languageId: number;

    @Column()
    name: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    lastUpdate: Date;
}