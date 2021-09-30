import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(form);
  }
}
