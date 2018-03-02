import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Dia } from '../models/dia';

@Injectable()
export class CalendarUtils {

    constructor(private storage: Storage, public translateService: TranslateService) {
    }

    public getAllDias(): Dia[] {        
        return [
            new Dia(this.translateService.instant("MONDAY"), this.translateService.instant("MONDAY_SHORT").toUpperCase(), true),
            new Dia(this.translateService.instant("TUESDAY"), this.translateService.instant("TUESDAY_SHORT").toUpperCase(), true),
            new Dia(this.translateService.instant("WEDNESDAY"), this.translateService.instant("WEDNESDAY_SHORT").toUpperCase(), true),
            new Dia(this.translateService.instant("THURSDAY"), this.translateService.instant("THURSDAY_SHORT").toUpperCase(), true),
            new Dia(this.translateService.instant("FRIDAY"), this.translateService.instant("FRIDAY_SHORT").toUpperCase(), true),
            new Dia(this.translateService.instant("SATURDAY"), this.translateService.instant("SATURDAY_SHORT").toUpperCase(), false)
        ]
    }

}