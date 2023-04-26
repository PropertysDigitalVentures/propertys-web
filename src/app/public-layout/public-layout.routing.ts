import {Routes, RouterModule} from '@angular/router';
import {PublicLayoutComponent} from './public-layout.component';

const publicLayoutRoutes: Routes = [{
    path: '',
    component: PublicLayoutComponent,
    children: [
        {
            path: '',
            loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
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
            path: 'marketplace',
            loadChildren: () => import('./marketplace-listings/marketplace-listings.module').then(m => m.MarketplaceListingsModule)
          },
          {
            path: 'marketplace/:productId',
            pathMatch: 'full',
            loadChildren: () => import('./marketplace-product/marketplace-product.module').then(m => m.MarketplaceProductModule)
          },
          {
            path: 'productsmgmt',
            pathMatch: 'full',
            loadChildren: () => import('./products-mgmt/products-mgmt.module').then(m => m.ProductsMgtmModule)
          },
          {
            path: 'marketplaceadmin',
            pathMatch: 'full',
            loadChildren: () => import('./marketplace-admin/marketplace-admin.module').then(m => m.MarketplaceAdminModule)
          },
    ]
}];

export const publicLayoutRouting = RouterModule.forChild(publicLayoutRoutes);
