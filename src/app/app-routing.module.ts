import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./shared/user/user.component";
import { TablePaginationComponent } from "./table-pegination/table-pagination.component";

const routes: Routes = [
    {path: '', component: TablePaginationComponent},
    {path: 'user', component: UserComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}