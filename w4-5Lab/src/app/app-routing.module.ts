import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/Smartphones', component: ProductListComponent},
  { path: 'categories/Smartwatches', component: ProductListComponent},
  { path: 'categories/Tablets', component: ProductListComponent},
  { path: 'categories/Laptops', component: ProductListComponent},

  { path: 'categories/Smartphones/:productId', component: ProductDetailsComponent },
  { path: 'categories/Smartwatches/:productId', component: ProductDetailsComponent },
  { path: 'categories/Tablets/:productId', component: ProductDetailsComponent },
  { path: 'categories/Laptops/:productId', component: ProductDetailsComponent },

  { path: 'categories/cart', component: CartComponent },
  { path: 'categories/shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
