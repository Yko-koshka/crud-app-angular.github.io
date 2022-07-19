import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrudAppService } from 'src/app/crud-app.service';
import { OwnerEntity, OwnerFormComponent } from '../owner-form/owner-form.component';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent implements OnInit {
  
  form!: FormGroup;
  owner!: OwnerEntity;
  submitted = false;

  constructor(private route: ActivatedRoute, private fb:FormBuilder, public crudAppService:CrudAppService) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.crudAppService.getById(params['id'])
    })).subscribe((data: OwnerEntity) => {
      this.form = this.fb.group({
        patronymic: [data.patronymic, Validators.required],
        name: [data.name, Validators.required],
        lastName: [data.lastName, Validators.required],
        cars: this.fb.array([
          this.fb.group({
            number: [, Validators.required],
            make: [, Validators.required],
            model: [, Validators.required],
            year: [, Validators.required],
          })
        ])
      })
    })
  }

  get cars(): FormArray {
    return this.form.get("cars") as FormArray;
  }

  addCar(){
    const carForm = this.fb.group({
      number: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
    });
    this.cars.push(carForm);
  }

  deleteCar(carIndex: number) {
    this.cars.removeAt(carIndex);
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    this.crudAppService.update({
      ...this.owner,
      id: this.form.value.id,
      patronymic: this.form.value.patronymic,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      cars: this.form.value.cars
    }).subscribe(() => {
      this.submitted = false
    })
    
  }

}
