import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from "@angular/forms";
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router'

// Interface for the Checkboxes form field data
export interface I_licClasses {
  name: string;
  description: string;
  selected: boolean;
}

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})




export class AddComponent implements OnInit {
  LicenceForm: FormGroup;

  Departments: Array<any> = [
    { name: "Finance" },
    { name: "Transport" },
    { name: "Marketing" }
  ];

  constructor(private fb: FormBuilder, private ds: DataService,  private route: Router, private actroute: ActivatedRoute) {  }
  //Get the Licence Classess list
  LicClasses =  this.ds.getLicenceClasses()
  

   // ----- BUILDORDERS FUNCTION ---------------------//
  // this function will build FormControls for each of the products in the 
  // products array above
  buildLicClassCheckboxes() {
    const arr = this.LicClasses.map(I_licClasses => {
      return this.fb.control(I_licClasses.selected);
    });
    return this.fb.array(arr);
  }
 // ----------end buildorders--------------------------//
// addCheckboxes() {
// this.LicClasses.forEach((o, i) => {
// const control = new FormControl(i === 0); // if first item set to true, else false
// (this.LicenceForm.controls.LicClasses as FormArray).push(control);
// });
// }

  ngOnInit() {
    this.LicenceForm = this.fb.group({
      fname: [null],
      lname: [null],
      dob: [null],
      licNo: [null],
      expiryDate: [null],
      dept: [null],
    "LicClasses": this.buildLicClassCheckboxes()
    });
  } // end ngOnInit
//FUNCTION
update_Checkboxes(){
  // Get all the current 'Form Values' as an Object and 
    // assigns it to a variable object called 'form' 
     let form = this.LicenceForm.value
 // -------  CHECKBOX - PRODUCTS ---------------------//
    //STEP 1:
    // This code gets all the current Lic Classess in your form. 
    // It then loops over each form control lic classes and if 
    // they have been ticked, it pushes this contol into 
    // an array called'LicenceClass_SelectedArray'
   let LicenceClass_SelectedArray = [];
    for (let i = 0; i < form.LicClasses.length; i++) {
      if (form.LicClasses[i] == true) {
       //  LicenceClass_SelectedArray.push(this.LicClasses[i].name.trim());
          LicenceClass_SelectedArray.push(this.LicClasses[i]);
      }
    }
   //STEP 2:
    // Now, we over-right the original form Licence Checkboxes  with the the array of "ticked" Licence Classes 
    form.LicClasses = LicenceClass_SelectedArray
  // ---  end checkbox orders--------------------//
}



// ON SUBMIT
    submit(): void {
      this.update_Checkboxes()
      this.ds.add(this.LicenceForm.value)
      this.LicenceForm.reset();
      this.route.navigate(['employees'])
  } // end submit


























} // end class
