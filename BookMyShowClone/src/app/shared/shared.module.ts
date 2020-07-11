import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockCopyPasteDirective } from './directive/block-copy-paste.directive'
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, BlockCopyPasteDirective],
  imports: [
    CommonModule,
    // NgbModule,
    RouterModule

  ],
  exports: [HeaderComponent, FooterComponent, BlockCopyPasteDirective, CommonModule]
})
export class SharedModule { }
