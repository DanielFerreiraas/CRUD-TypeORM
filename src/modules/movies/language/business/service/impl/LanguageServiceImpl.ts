import { inject, injectable } from 'tsyringe';

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO } from '../../../dtos/LanguageDTO';

import { LanguageRepository } from '../../../database/LanguageReposity';

@injectable()
export class LanguageServiceImpl extends BaseServiceImpl<LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO> {

    constructor(
        @inject('LanguageRepository')
        languageRepository: LanguageRepository
    ){ 
        super(languageRepository);
    }
}