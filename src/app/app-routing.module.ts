import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public-layout/public-layout.module').then(m => m.PublicLayoutModule)
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