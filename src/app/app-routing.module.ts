import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: 'rent',
    loadChildren: () => import('./rent/rent.module').then(m => m.RentModule)
  },
  {
    path: 'brix-calculator',
    loadChildren: () => import('./brix-calculator/brix-calculator.module').then(m => m.RentModule)
  },
  {
    path: 'virtual-realty-assistant',
    loadChildren: () => import('./propertys-tool/propertys-tool.module').then(m => m.PropertysToolModule)
  },
  { 
    path: '**', 
    pathMatch: 'full',  
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
      relativeLinkResolution: 'legacy',
      // scrollPositionRestoration: 'enabled' 
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}