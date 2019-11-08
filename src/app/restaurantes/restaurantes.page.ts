import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/Oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  public ofertas : Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    //Then para a resposta, passando o arrowfunction
    //Que é ação que eu vou tomar, quando a resposta estiver pronta
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas
        console.log('COMPONENTE RESTAURANTES',ofertas[0])
      })
  }

}
