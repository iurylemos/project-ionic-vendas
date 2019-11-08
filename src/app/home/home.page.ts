import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { AuthService } from '../auth.service';
import { Oferta } from '../shared/Oferta.model';
import { Cliente } from '../shared/cliente.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [OfertasService, AuthService]
})
export class HomePage implements OnInit {

  //Atributo oferta
  public ofertas: Oferta[]
  currentUser: Cliente;
  returnUrl: string;

  constructor(
    private ofertasService: OfertasService,
    private router: ActivatedRoute,
    private authenticationService: AuthService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      .then(( ofertas: Oferta[] ) => {
        console.log('A função resolve() foi resolvida depois de 3 segundos')
        console.log('COMPONENTE HOME', ofertas)
        //Resolve da promisse
        this.ofertas = ofertas

      })
      .catch((param: any) => {
        //Reject da promisse
        console.log(param)
      })
  }

}
