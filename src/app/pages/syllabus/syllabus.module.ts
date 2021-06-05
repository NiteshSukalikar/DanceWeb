import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyllabusComponent } from './syllabus.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: SyllabusComponent }]),
  ],
  declarations: [SyllabusComponent]
})
export class SyllabusModule { }
