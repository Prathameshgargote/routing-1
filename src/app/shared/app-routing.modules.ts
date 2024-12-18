import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { ProductsComponent } from "./components/products/products.component";
import { FairsComponent } from "./components/fairs/fairs.component";
import { UserComponent } from "./components/users/user/user.component";
import { UserFormComponent } from "./components/users/user-form/user-form.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductComponent } from "./components/products/product/product.component";
import { ProdFormComponent } from "./components/products/prod-form/prod-form.component";
import { FairDetailComponent } from "./components/fairs/fair-detail/fair-detail.component";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGourd } from "./services/auth.gourd";



const AppRouts:Routes=[
    {
        path:'',
        component:AuthComponent
        // redirectTo:'home',
        // pathMatch:'full'

    },{
        path:'home',//
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersComponent,
        children:[
        {
            path:'add',
            component:UserFormComponent
        },
        {
            path:':UserId',
            component:UserComponent
        },
        {
            path:':UserId/edit',
            component:UserFormComponent
        },]
    },
    
    {
        path:'products',
        component:ProductsComponent,
        children:[
            {
                path:'add',
                component:ProdFormComponent
            },
            {
                path:':id',
                component:ProductComponent
            },
            {
                path:':id/edit',
                component:ProdFormComponent
            },
        ]
    },
    {
        path:'fairs',
        component:FairsComponent,
        canActivate:[AuthGourd],
        children:[{
            path:':fairId',
            component:FairDetailComponent
        }]
    },
    {
        path:'admins',
        component:PageNotFoundComponent,
    },
    {
        path:'**',
        redirectTo:'admins'//wild-CARD routod path
    }
]


@NgModule({
 imports:[RouterModule.forRoot(AppRouts)],
 exports:[[RouterModule]]
})


export class approtuingModule{


}