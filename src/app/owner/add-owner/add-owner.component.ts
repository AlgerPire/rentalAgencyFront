import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OwnerService} from "../owner-service.service";

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router, private ownerService:OwnerService) { }
  addForm:FormGroup;

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],

    });
  }
  onSubmit(){
    this.ownerService.addOwner(this.addForm.value).subscribe(data=>{
      this.router.navigate([''])
    });
  }

}
