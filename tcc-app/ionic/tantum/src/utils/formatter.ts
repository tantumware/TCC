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

}