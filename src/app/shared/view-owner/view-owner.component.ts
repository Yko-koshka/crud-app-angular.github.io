import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CrudAppService } from 'src/app/crud-app.service';
import { CarEntity, OwnerEntity } from '../owner-form/owner-form.component';

@Component({
  selector: 'app-view-owner',
  templateUrl: './view-owner.component.html',
  styleUrls: ['./view-owner.component.css']
})
export class ViewOwnerComponent implements OnInit {

  owner$?: Observable<OwnerEntity>
  car$?: Observable<CarEntity>

  constructor(private router: Router, private route: ActivatedRoute, public crudAppService:CrudAppService ) { }

  ngOnInit(): void {
    this.owner$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.crudAppService.getById(params['id'])
      }))
  }

}
