import { Repository, EntityTarget, FindOptionsWhere, DeepPartial } from "typeorm";
import { QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";

import { BaseRepository } from "./BaseRepository";

import dataSource from "@/config/database/typeorm/data-source";

export class BaseRepositoryImpl<T, U , V> implements BaseRepository<T, U, V> {
    private primaryKey: keyof T;
    private typeormRepository: Repository<T>;

    constructor(primaryKey: keyof T, entityType: EntityTarget<T>) {
        this.primaryKey = primaryKey;
        this.typeormRepository = dataSource.getRepository(entityType);
    }

    async getItems(): Promise<T[]> {
        return await this.typeormRepository.find()
    }

    async getItemById(id: number): Promise<T> {
        return await this.typeormRepository.findOne({
            where:{ [this.primaryKey]: id } as FindOptionsWhere<T>
        });
    }

    async createItem(item: U): Promise<T> {
        const newItem = this.typeormRepository.create(item as DeepPartial<T>);

        return await this.typeormRepository.save(newItem);
    }

    async updateItem(id: number, item: V): Promise<T> {
        await this.typeormRepository.update(id, item as QueryDeepPartialEntity<T>);

        return await this.getItemById(id);
    }

    async deleteItem(id: number): Promise<void> {
        const item = await this.getItemById(id);
        await this.typeormRepository.delete(id);
    }
}