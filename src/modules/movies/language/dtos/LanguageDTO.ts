export class LanguageDTO {
    languageId: number;
    name: number;
    lastUpdate: Date;
}

export type CreateLanguageDTO = Omit<LanguageDTO, "languageId" | "lastUpdate">;
export type UpdateLanguageDTO = Partial<LanguageDTO>;