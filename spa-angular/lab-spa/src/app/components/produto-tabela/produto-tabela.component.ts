import { ProdutoService } from './../../services/produto.service';
import { AlertService } from './../../services/alert.service';
import { Component } from '@angular/core';
import { ProdutoDTO } from 'src/app/dtos/produto.dto';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss'],
})
export class ProdutoTabelaComponent {
  produtos: ProdutoDTO[] = [];
  constructor(
    private produtoService: ProdutoService,
    private alertService: AlertService
  ) {
    this.produtoService.findAll().subscribe({
      next: (data) => {
        this.produtos = data;
      },
      error: (e) => {
        let tit = 'Erro buscando produto';
        let msg = e.message;
        this.alertService.error(tit, msg);
        console.error(e);
      },
    });
  }
}
