import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { approtuingModule } from './shared/app-routing.modules';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProdFormComponent } from './shared/components/products/prod-form/prod-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FairCardComponent } from './shared/components/fairs/fair-card/fair-card.component';
import { FairDetailComponent } from './shared/components/fairs/fair-detail/fair-detail.component';
import {MatCardModule} from '@angular/material/card';
import { AuthComponent } from './shared/components/auth/auth.component';


// import {snackbarmodule} form '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    NavbarComponent,
    UserComponent,
    UserFormComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProdFormComponent,
    FairCardComponent,
    FairDetailComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    approtuingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
