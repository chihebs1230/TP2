import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AuthGuard } from './gurad/auth.guard';


const routes: Routes = [

{path : '',redirectTo : 'signin', pathMatch : 'full'},

{path : 'signin',component : SigninComponent},

{path : 'signup',component : SignupComponent},

{path : 'user-profile',canActivate : [AuthGuard],LoadChildren () => import('./components/user-profile/user-profile.module')
.then(mod => mod.UserProfileModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
