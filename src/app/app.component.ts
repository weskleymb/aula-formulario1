import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {

  nome: string;
  email: string;
  profissao: string;

  constructor() {
    this.nome = '';
    this.email = '';
    this.profissao = '';
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente();
  profissoes = ['Engenheiro', 'Dentista', 'Professor'];

  salvar(form: NgForm) {
    this.cliente.nome = form.value.inputNome;
    this.cliente.email = form.value.inputEmail;
    this.cliente.profissao = form.value.selectProfissao;
  }

}
