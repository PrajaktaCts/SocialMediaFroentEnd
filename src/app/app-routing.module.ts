import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SearchComponent } from './search/search.component';
import { SeargoogleComponent } from './seargoogle/seargoogle.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'sgoogle',component:SeargoogleComponent},
  {path:'login',component:LoginComponent},
  {path:'recommendation',component:RecommendationComponent},
  {path:'trending',component:TrendingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
