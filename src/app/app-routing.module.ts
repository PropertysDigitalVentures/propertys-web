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
    path: 'community',
    loadChildren: () => import('./b2c/b2c.module').then(m => m.B2CModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./b2b/b2b.module').then(m => m.B2BModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
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