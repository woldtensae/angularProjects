import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GetDataService } from './get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup;
  private data;
  constructor(private fb: FormBuilder, private dataFetcher: GetDataService) {
    this.myForm = fb.group({
      'fullname': ['fullname',Validators.required],
      'email': ['aman@gmail.com',Validators.required],
      'post': ['post testing',Validators.minLength(10)]
    });
  }

  onSubmit():void{
    console.log(this.myForm);
  }

  onFetchData(){
    this.dataFetcher.getUserData().subscribe(response=> {
        console.log(response.json());
        this.myForm.get('fullname').setValue(response.json()['name']);
        this.myForm.get('email').setValue(response.json()['email']);
    });        
  }

}
