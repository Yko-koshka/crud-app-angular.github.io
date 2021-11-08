import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudAppService } from 'src/app/crud-app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(private router: Router, private fb:FormBuilder, public crudAppService:CrudAppService) {
   }

  ngOnInit() {
    this.form = this.fb.group({
      patronymic: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cars: this.fb.array([
        this.fb.group({
          number: ['', Validators.required],
          make: ['', Validators.required],
          model: ['', Validators.required],
          year: ['', Validators.required],
        })
      ])
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

    const owner: OwnerEntity = {
      patronymic: this.form.value.patronymic,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      cars: this.form.value.cars
    }

    this.crudAppService.create(owner).subscribe(() => {
      this.form.reset()
      this.router.navigate([''])
    })
    
  }

}

export interface OwnerEntity {
  patronymic: string,
  name: string,
  lastName: string,
  cars: CarEntity[]
}

export interface CarEntity {
  number: number | string,
  make: string,
  model: string,
  year: number
}


function owner(owner: any) {
  throw new Error('Function not implemented.');
}

