import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/services/notification';

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
    private notificationService: NotificationService
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
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null, Validators.required],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
    });
  }

  resetForm(): void {
    this.formulario.reset();
  }

  postForm(): void {
    //Simulando um POST, usando web service (https://resttesttest.com/)
    this.http.post('https://httpbin.org/post', this.formulario.value).subscribe(
      (data) => {
        console.log(data);
        this.formulario.reset();
        this.notificationService.success('Dados enviados');
      },
      () => {
        this.notificationService.error('Erro, tente novamente');
      }
    );
  }
}
