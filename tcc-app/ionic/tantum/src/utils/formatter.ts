export class FormatterUtils {

    constructor() {        
    }

    /**
     * Method to format de hour from this pattern: d.hhmm-n and return hh:mm
     * @param value example 2.0820-2 and return 08:20
     */
    public static formatHour(value: string) {
        let hour = value.substring(2, 6);

        return hour.slice(0, 2) + ":" + hour.slice(2);
    }

    public static formatLocal(value: string) {
        return value.split("-")[1];
    }

    public static replaceSpecialChars(value: string) {
        let newValue: string;

        newValue = value.toLowerCase()
            .replace(/ç/g, "c")
            .replace(/ã/g, "a")
            .replace(/á/g, "a")
            .replace(/à/g, "a")
            .replace(/â/g, "a")
            .replace(/é/g, "e")
            .replace(/è/g, "e")
            .replace(/ê/g, "e")
            .replace(/ẽ/g, "e")
            .replace(/í/g, "i")
            .replace(/ó/g, "o")
            .replace(/ò/g, "o")
            .replace(/õ/g, "o")
            .replace(/ô/g, "o")
            .replace(/ú/g, "u")

        return newValue;
    }

}