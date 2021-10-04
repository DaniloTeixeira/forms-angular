import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViaCepResponse } from 'src/app/core/models/ViaCepResponse';

import { CepService } from 'src/app/core/services/cep';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  user = {
    nome: null,
    email: null,
  };

  @ViewChild('f') ngForm: NgForm;

  constructor(private cepService: CepService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.ngForm.form.value);
  }

  consultaCep(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    const cep = target.value;
    this.cepService.getCep(cep).subscribe((response) => {
      this.populaForm(response);
    });
  }

  private populaForm(response: ViaCepResponse): void {
    this.ngForm.form.patchValue({
      rua: response.logradouro,
      bairro: response.bairro,
      cidade: response.localidade,
      estado: response.uf,
    });
  }
}
