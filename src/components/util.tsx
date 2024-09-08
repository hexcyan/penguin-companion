export function fix(text: string) {
    return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\^\{(.*?)\}/g, "<sup>$1</sup>");
}

export interface Word {
    en: string;
    caps?: string;
    phon?: string;
    audio: string;
    stress?: string;
    note?: string;
}

export type mapType = {
    [key: string]: Word;
};