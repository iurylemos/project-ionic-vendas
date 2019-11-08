import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'diversao', loadChildren: './diversao/diversao.module#DiversaoPageModule' },
  { path: 'oferta', loadChildren: './oferta/oferta.module#OfertaPageModule' },
  { path: 'ordem-compra', loadChildren: './ordem-compra/ordem-compra.module#OrdemCompraPageModule' },
  { path: 'ordem-compra-sucesso', loadChildren: './ordem-compra-sucesso/ordem-compra-sucesso.module#OrdemCompraSucessoPageModule' },
  { path: 'restaurantes', loadChildren: './restaurantes/restaurantes.module#RestaurantesPageModule' },
  { path: 'onde-fica', loadChildren: './oferta/onde-fica/onde-fica.module#OndeFicaPageModule' },
  { path: 'como-usar', loadChildren: './oferta/como-usar/como-usar.module#ComoUsarPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
