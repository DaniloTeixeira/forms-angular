export interface IViaCepResponse {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export class ViaCepResponse {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;

  constructor(data: IViaCepResponse) {
    this.logradouro = data.logradouro;
    this.complemento = data.complemento;
    this.bairro = data.bairro;
    this.localidade = data.localidade;
    this.uf = data.uf;
  }
}
