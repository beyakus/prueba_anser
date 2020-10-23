import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { CardModule } from '@shared/card/card.module';
import { DatepickerModule } from '@shared/datepicker/datepicker.module';
import { DotModule } from '@shared/dot/dot.module';
import { DotTextModule } from '@shared/dot-text/dot-text.module';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    CardModule,
    DatepickerModule,
    DotModule,
    DotTextModule,
  ],
  exports: [GridComponent],
})
export class GridModule {}
