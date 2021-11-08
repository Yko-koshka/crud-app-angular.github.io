import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudAppService } from '../crud-app.service';
import { OwnerEntity } from '../shared/create/create.component';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit, OnDestroy {
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

  select(id: string) {
  }

  

  // remove(id: string) {
  //   this.crudAppService.remove(id).subscribe(() => {
  //     this.owners = this.owners.filter(owner => owner.id !== id)
  //   })
  // }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }
}
