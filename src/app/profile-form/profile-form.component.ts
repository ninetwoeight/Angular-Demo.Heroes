import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  // use formGroup create form
  // profileForm= new FormGroup({
  //   firstName:new FormControl(''),
  //   lastName:new FormControl(''),
  //   address:new FormGroup({
  //     street:new FormControl(''),
  //     city:new FormControl(''),
  //     state: new FormControl(''),
  //     zip:new FormControl('')
  //   })
  // });

  // use formBuilder
  profileForm= this.fd.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    address:this.fd.group({
      street:[''],
      city:[''],
      state: [''],
      zip:['']
    }),
    aliases:this.fd.array([
      this.fd.control('')
    ])
  });

  constructor(private fd:FormBuilder) { }

  ngOnInit() {
  }

  // last name 属性验证
  get lastName() {
    return this.profileForm.controls.lastName;
  }
  onSubmit(){
    console.log(this.profileForm.value);
  }

  get aliases(){
    return this.profileForm.value.aliases as FormArray;
  }
  addAlias(){
    this.aliases.push(this.fd.control(''));
  }

  updateProfile(){
    // patch value
    // this.profileForm.patchValue({
    //   firstName:'Bansic',
    //   address:{
    //     street:'123 drew street'
    //   }
    // });

    // set value
    this.profileForm.setValue({
      firstName:'Bansic',
      lastName:'lastname',
      address:{
        street:'123 drew street from set value',
        state:'12',
        city:'WuHan'
      }
    });
  }
}
