import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import {CountdownModule} from '../countdown/countdown.module';

@NgModule({
  imports: [
    CommonModule,
    CountdownModule,
  ],
  declarations: [TimeComponent],
  exports: [TimeComponent]
})
export class TimeModule { }
