import { inject, injectable } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerimpl";

import { LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO } from "../../../dtos/LanguageDTO";

import { LanguageService } from "../../../business/service/LanguageService";

@injectable()
export class LanguageControllerImpl extends BaseControllerImpl<LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO> {

    constructor(
        @inject('LanguageService')
        languageService: LanguageService
    ){
        super(languageService)
    }
}