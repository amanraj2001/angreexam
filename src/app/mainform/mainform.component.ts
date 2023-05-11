import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { city, data, stat } from '../model/data';

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css'],
})
export class MainformComponent {
  form!: FormGroup;
  stat: Array<stat> = [];
  cit: Array<city> = [];
  constructor(private demo: DataService, private fb: FormBuilder) {
    console.log(this.demo.state.filter((x) => x.StateID));

    console.log(this.demo.delid);

    this.pusheddata.splice(this.demo.delid, 1);

    this.stat = this.demo.state;
    this.form = this.fb.group({
      FullName: this.fb.group({
        FirstName: [''],
        MiddleName: [''],
        LastName: [''],
      }),
      EmailID: [''],
      Address: this.fb.group({
        Building: [''],
        Area: [''],
        State: [''],
        City: [''],

        // Skills:this.fb.array([
        //   this.fb.control(''),
        // ])
      }),
      Gender: this.fb.group({
        Gen: [''],
      }),
      EducationDetails: this.fb.group({
        tenth: this.fb.group({
          marks: [''],
          Grade: [''],
          Yearofpass: [''],
        }),
        twelve: this.fb.group({
          marks: [''],
          Grade: [''],
          Yearofpass: [''],
        }),
        Degree: this.fb.group({
          marks: [''],
          Grade: [''],
          Yearofpass: [''],
        }),
      }),
    });
  }
  get st() {
    return this.form.get('State') as FormArray;
  }
  cng(element: any) {
    console.log(element.target.value);
    this.demo.findCityByID(element.target.value);
    this.cit = this.demo.city;
    console.log(this.cit);
  }

  pusheddata: Array<any> = [];
  add() {
    this.pusheddata.push({
      FullName: {
        FirstName: this.form.value.FullName.FirstName,
        MiddleName: this.form.value.FullName.MiddleName,
        LastName: this.form.value.FullName.LastName,
      },
      EmailID: this.form.value.EmailID,
      Address: {
        Building: this.form.value.Address.Building,
        Area: this.form.value.Address.Area,
        State: this.form.value.Address.State,
        City: this.form.value.Address.City,
      },
      Gender: { Gen: this.form.value.Gender.Gen },
      EducationDetails: {
        tenth: { marks: this.form.value.EducationDetails.tenth.marks },
      },
    });
    console.log(this.pusheddata);
    this.demo.pudata(this.pusheddata);
  }
}
