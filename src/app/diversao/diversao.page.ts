import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/Oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.page.html',
  styleUrls: ['./diversao.page.scss'],
  providers: [ OfertasService ]
})
export class DiversaoPage implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao')
    .then((ofertas: Oferta[] ) => {
      this.ofertas = ofertas
      console.log('COMPONENTE DIVERSÃO', ofertas)
    })
  }

}
