import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from './blog-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: BlogDetailsComponent }]),
  ],
  declarations: [BlogDetailsComponent]
})
export class BlogDetailsModule { }
