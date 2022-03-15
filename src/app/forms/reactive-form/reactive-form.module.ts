import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosModule } from '..';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    FormulariosModule,
  ],
})
export class ReactiveFormModule {}
