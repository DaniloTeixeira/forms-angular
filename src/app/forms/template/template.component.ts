import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ViaCepResponse } from 'src/app/core/models/ViaCepResponse';
import { HttpClient } from '@angular/common/http';

import { CepService } from 'src/app/core/services/cep';
import { map } from 'rxjs/operators';
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

  constructor(private cepService: CepService, private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.ngForm.form.value);

    //Simulação para requisição POST, através do submit
    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.ngForm.value))
      .pipe(map((response) => response))
      .subscribe((data) => console.log(data));
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
      complemento: response.complemento,
      bairro: response.bairro,
      cidade: response.localidade,
      estado: response.uf,
    });
  }
}
