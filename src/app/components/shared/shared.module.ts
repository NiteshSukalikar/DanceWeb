import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scrollToTop/scrollToTop.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ FooterComponent,ScrollToTopComponent],
  exports: [ FooterComponent,ScrollToTopComponent],
})
export class SharedModule {}
