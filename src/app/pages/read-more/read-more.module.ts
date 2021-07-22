import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from './read-more.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ReadMoreComponent }]),
  ],
  declarations: [ReadMoreComponent]
})
export class ReadMoreModule { }
