import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurStudioComponent } from './our-studio.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: OurStudioComponent }]),
  ],
  declarations: [OurStudioComponent]
})
export class OurStudioModule { }
