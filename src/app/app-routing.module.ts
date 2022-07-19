import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditOwnerComponent } from "./shared/edit-owner/edit-owner.component";
import { OwnerFormComponent } from "./shared/owner-form/owner-form.component";
import { ViewOwnerComponent } from "./shared/view-owner/view-owner.component";
import { TablePaginationComponent } from "./table-pegination/table-pagination.component";

const routes: Routes = [
    {path: '', component: TablePaginationComponent},
    {path: 'owner-form', component: OwnerFormComponent},
    {path: 'owner-form/:id', component: OwnerFormComponent},
    {path: 'owner-form/:id/edit-owner', component: EditOwnerComponent},
    {path: 'owner-form/:id/view-owner', component: ViewOwnerComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}