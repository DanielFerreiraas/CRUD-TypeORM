import { Language } from "../entities/language.entity";

import { LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO } from "@/modules/movies/language/dtos/LanguageDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class LanguageRepositoryImpl extends BaseRepositoryImpl<LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO> {

    constructor(){
        super('languageId', Language);
    }
}