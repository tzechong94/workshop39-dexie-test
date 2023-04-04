import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "list", component: ListComponent },
  { path: "character/:id", component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
