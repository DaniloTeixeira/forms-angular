import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /* 
        Primeira opção abaixo:
        this.formulario = new FormGroup({
        nome: new FormControl('Danilo'), -> inicializa o form com valor no input
        email: new FormControl(null) -> inicializa o form com input vazio
      });
    */

    //Segunda opção (injetar o FormBuilder no construtor)
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
      cep: [null],
      numero: [null],
      complemento: [null],
      rua: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
    });
  }
}
