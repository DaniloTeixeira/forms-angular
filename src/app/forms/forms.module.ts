import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TemplateComponent } from './template';
import { ReactiveComponent } from './reactive';

@NgModule({
  declarations: [FormsComponent, TemplateComponent, ReactiveComponent],
  imports: [CommonModule, FormsRoutingModule],
  exports: [TemplateComponent, ReactiveComponent],
})
export class FormsModule {}
