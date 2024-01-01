import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../shared/property.service';
import { Property } from './properties.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  allProperty:any;
  formValue!:FormGroup;
  propertyModelObj:Property = new Property();
  showAdd!:boolean;
  showEdit!:boolean;

  constructor(private fb : FormBuilder, private api : PropertyService){ }

  ngOnInit():void{
    this.formValue = this.fb.group({
      ptitle:[''],
      pprice:[''],
      plocation:[''],
      pdetails:['']
    })
    this.getAllProperty();
  }

  clickAddProperty(){
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }

  //get all
  getAllProperty(){
    this.api.getAllProp().subscribe((res)=>{
      this.allProperty = res;
      console.warn(this.allProperty)
    })
  }

  //add prop
  addProp(){
    this.propertyModelObj.ptitle = this.formValue.value.ptitle
    this.propertyModelObj.pprice = this.formValue.value.pprice
    this.propertyModelObj.plocation = this.formValue.value.plocation
    this.propertyModelObj.pdetails = this.formValue.value.pdetails
    this.api.addListing(this.propertyModelObj).subscribe((res)=>{
      console.log(res)
      alert("Record added successfully!!")
      let ref = document.getElementById('clear')
      ref?.click()
      this.formValue.reset()
      this.getAllProperty()
    }, err=>{
      alert("Something went wrong")
    })
  }


  deleteProp(data:any){
    this.api.deleteProp(data.id).subscribe((res)=>{
      alert('Property Record Deleted Successfull!!')
      this.getAllProperty();
    })
  }

}
