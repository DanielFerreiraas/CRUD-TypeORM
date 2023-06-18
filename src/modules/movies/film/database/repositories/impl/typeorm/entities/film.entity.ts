import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    filmID: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    releaseYear: number;

    @Column()
    languageId: number;

    @Column()
    rentalDuration: number;

    @Column()
    rentalRate: number;

    @Column()
    length: number;

    @Column()
    replacementCost: number;

    @Column()
    rating: string;

    @Column()
    lastUpdate: Date;

    @Column()
    specialFeatures: string;

    @Column()
    fulltext: string;
}