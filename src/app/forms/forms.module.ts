import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateComponent } from './template';
import { ReactiveComponent } from './reactive';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug';

@NgModule({
  declarations: [
    FormsComponent,
    TemplateComponent,
    ReactiveComponent,
    FormDebugComponent,
  ],
  imports: [CommonModule, FormsRoutingModule, FormsModule],
  exports: [TemplateComponent, ReactiveComponent],
})
export class FormulariosModule {}
