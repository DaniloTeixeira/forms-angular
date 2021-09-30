import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateComponent } from './template';
import { ReactiveComponent } from './reactive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsComponent, TemplateComponent, ReactiveComponent],
  imports: [CommonModule, FormsRoutingModule, FormsModule],
  exports: [TemplateComponent, ReactiveComponent],
})
export class FormulariosModule {}
