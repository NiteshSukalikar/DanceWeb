import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderComponent } from './founder.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: FounderComponent }]),
  ],
  declarations: [FounderComponent]
})
export class FounderModule { }
