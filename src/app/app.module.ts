import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { PageProductComponent } from './products/presentation/pages/page-product/page-product.component';
import { ProductsModule } from './products/products.module';
import { PageUserComponent } from './users/presentation/pages/page-user/page-user.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {path: '', component: PageLoginComponent},
  // {path: 'products', component: PageProductComponent},
  {path: 'products',
    loadChildren: () => import('./products/products.module').then((m) =>m.ProductsModule)
  },
  // {path:'**', redirectTo:''},
  // {path: 'users', component: PageUserComponent},
  {path: 'users',
    loadChildren: () => import('./users/users.module').then((m) =>m.UsersModule)
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, ProductsModule, UsersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
