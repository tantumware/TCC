import { NgModule } from '@angular/core';
import { SchedulePipe } from './schedule/schedule';
import { LocationPipe } from './location/location';
@NgModule({
	declarations: [SchedulePipe,
    LocationPipe],
	imports: [],
	exports: [SchedulePipe,
    LocationPipe]
})
export class PipesModule {}
