import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./shared/create/create.component";
import { TablePaginationComponent } from "./table-pegination/table-pagination.component";

const routes: Routes = [
    {path: '', component: TablePaginationComponent},
    {path: 'create', component: CreateComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}