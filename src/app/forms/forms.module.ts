import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateComponent } from './template';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug';

@NgModule({
  declarations: [FormsComponent, TemplateComponent, FormDebugComponent],
  imports: [CommonModule, FormsRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [TemplateComponent, FormDebugComponent],
})
export class FormulariosModule {}
