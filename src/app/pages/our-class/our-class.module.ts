import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurClassComponent } from './our-class.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: OurClassComponent }]),
  ],
  declarations: [OurClassComponent]
})
export class OurClassModule { }
