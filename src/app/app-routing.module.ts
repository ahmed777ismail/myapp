import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent, title:'home ahmed'},
  {path:'about', component:AboutComponent,title:'about ahmed'},
  {path:'gallary', component:GallaryComponent,title:'gallary ahmed', children:[

    {path:'', redirectTo:'home', pathMatch:'full'},
    { path:'web', component:WebComponent,title:'web'},
    { path:'mobile', component:MobileComponent,title:'mobile'},

]},
  {path:'contact', component:ContactComponent,title:'contact ahmed'},
  {path:'**', component:NotFoundComponent,title:'Not found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
