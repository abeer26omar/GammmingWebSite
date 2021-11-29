import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameDetailsComponent } from './all-games/game-details/game-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayersComponent } from './players/players.component';
import { ProfileComponent } from './players/profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'home', component:HomeComponent, data:{ breadcrumb: 'home'}},
  { path:'games', component:AllGamesComponent, data:{ breadcrumb: 'All games'}},
  { path:'gamedetails/:id', component:GameDetailsComponent, data:{ breadcrumb: 'game Details'}},
  { path:'signup', component:SignUpComponent},
  { path:'signin', component:SigninComponent},
  { path:'players', component:PlayersComponent, data:{ breadcrumb:'Players'}},
  { path:'profile', component:ProfileComponent, data:{ breadcrumb:'profile'}},
  { path:'**', component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
