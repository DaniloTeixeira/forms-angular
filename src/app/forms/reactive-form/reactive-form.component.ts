import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { NotificationService } from 'src/app/core/services/notification';
import { CepService } from 'src/app/core/services/cep';
import { ViaCepResponse } from 'src/app/core/models/ViaCepResponse';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private notificationService: NotificationService,
    private cepService: CepService
  ) {}

  ngOnInit(): void {
    this.loadDataForm();
  }

  onSubmit(): void {
    this.postForm();
  }

  loadDataForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      cep: [null, Validators.required],
      numero: [null],
      complemento: [null],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
    });
  }

  resetForm(): void {
    if (this.formulario.valid) {
      this.formulario.reset();
    }
  }

  notificationSuccess(): void {
    this.notificationService.success('Dados enviados com sucesso!');
  }

  notificationError(): void {
    this.notificationService.error('Erro, tente novamente!');
  }

  postForm(): void {
    //Simulando um POST, usando web service (https://resttesttest.com/)
    this.http.post('https://httpbin.org/post', this.formulario.value).subscribe(
      (data) => {
        console.log(data);
        this.resetForm();
        this.notificationSuccess();
      },
      () => {
        this.notificationError();
      }
    );
  }

  isInputInvalid(input: any): any {
    const inputValue = this.formulario.get(input);

    return !inputValue?.valid && inputValue?.touched;
  }

  queryCep(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    const cep = target.value;

    this.cepService.getCep(cep).subscribe((response: ViaCepResponse) => {
      this.populateForm(response);
    });
  }

  private populateForm(response: ViaCepResponse): void {
    this.formulario.patchValue({
      rua: response.logradouro,
      complemento: response.complemento,
      bairro: response.bairro,
      cidade: response.localidade,
      estado: response.uf,
    });
  }
}
