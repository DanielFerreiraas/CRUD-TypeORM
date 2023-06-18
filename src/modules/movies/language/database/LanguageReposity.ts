import { LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO } from "../dtos/LanguageDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface LanguageRepository extends BaseRepository<LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO> {}