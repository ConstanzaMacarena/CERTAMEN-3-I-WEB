import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasComponent } from './components/noticias/noticias.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
