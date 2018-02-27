export class FormatterUtils {

    constructor() {        
    }

    /**
     * Method to format de hour from this pattern: d.hh:mm-n and return hh:mm
     * @param value example 2.08:20-2 and return 08:20
     */
    public static formatHour(value: string) {
        let hour = value.substring(2, 6);

        return hour.slice(0, 2) + ":" + hour.slice(2);
    }

}