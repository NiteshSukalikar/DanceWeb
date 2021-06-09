import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scrollToTop/scrollToTop.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [ FooterComponent,ScrollToTopComponent,WhatsappComponent],
  exports: [ FooterComponent,ScrollToTopComponent,FormsModule,ReactiveFormsModule,WhatsappComponent],
})
export class SharedModule {}
