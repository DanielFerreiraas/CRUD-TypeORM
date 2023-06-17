export interface BaseRepository<T, U, V> {
    getItems(): Promise<T[]>;
    getItemById(id: number): Promise<T>;
    createItem(item: U): Promise<T>;
    updateItem(id: number, item: V): Promise<T>;
    deleteItem(id: number): Promise<void>;
}