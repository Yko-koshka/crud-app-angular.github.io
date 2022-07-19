import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudAppService } from '../crud-app.service';
import { OwnerEntity } from '../shared/owner-form/owner-form.component';

export interface PeriodicElement {
  id: string,
  patronymic: string,
  name: string,
  lastName: string,
  quantity: number,
}

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit, OnDestroy {

  displayedColumns = ['№', 'Фамилия', 'Имя', 'Отчество', 'Количество автомобилей']
  clickedRows = new Set<PeriodicElement>();
  selected!: PeriodicElement | null;

  owners: OwnerEntity[] = [];
  pSub: Subscription = new Subscription;

  constructor(public crudAppService: CrudAppService) {
    
  }
  ngOnInit() {
    this.crudAppService.getAll().subscribe(owners => {
      this.owners = owners;
      console.log(this.owners);
    })
  }

  select(data: PeriodicElement) {
    if(this.selected?.id === data.id) {
      this.selected = null;
      return;
    }
    this.selected = data;
    console.log(data);
  }

  remove(id: string | undefined) {
    if(id === undefined) return;
    this.crudAppService.remove(id).subscribe(() => {
      this.owners = this.owners.filter(owner => owner.id !== id)
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }
}
