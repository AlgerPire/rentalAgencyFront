import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddOwnerComponent} from "./owner/add-owner/add-owner.component";

const routes: Routes = [
  {path:'listOwner',redirectTo:'/',pathMatch:'full'},
  {path:'add-owner',component:AddOwnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
