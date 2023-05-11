import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormlistComponent } from './formlist/formlist.component';
import { LoginComponent } from './login/login.component';
import { MainformComponent } from './mainform/mainform.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'mainform',component:MainformComponent},
  {path:'list',component:FormlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
