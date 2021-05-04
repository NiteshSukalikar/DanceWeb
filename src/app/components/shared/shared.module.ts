import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scrollToTop/scrollToTop.component';
import { LoadingSpinnerComponent } from './spinner/spinner';

@NgModule({
  imports: [CommonModule],
  declarations: [ FooterComponent,ScrollToTopComponent,LoadingSpinnerComponent],
  exports: [ FooterComponent,ScrollToTopComponent,LoadingSpinnerComponent],
})
export class SharedModule {}
