import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegisterListComponent } from './register-list/register-list.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';

const routes: Routes = [
  {path: "", component: RegisterListComponent},
  {path: "registro/listagem", component: RegisterListComponent},
  {path: "registro", component: RegisterComponent},
  {path: 'registro/detalhes/:id', component: RegisterDetailsComponent },
  {path: "estatistica", component: StatisticsComponent},
  {path: "sobre", component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
