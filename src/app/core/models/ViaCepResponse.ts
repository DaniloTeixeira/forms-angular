export interface IViaCepResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export class ViaCepResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;

  constructor(data: IViaCepResponse) {
    this.logradouro = data.logradouro;
    this.bairro = data.bairro;
    this.localidade = data.localidade;
    this.uf = data.uf;
  }
}
