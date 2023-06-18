import { BaseService } from "@/modules/base/BaseService";

import { LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO } from "../../dtos/LanguageDTO";

export interface LanguageService extends BaseService<LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO> {}