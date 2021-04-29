import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-report-3",
  templateUrl: "./report-3.component.html",
  styleUrls: ["./report-3.component.css"]
})
export class Report3Component {
  constructor(private ds: DataService) {}
 isShown: boolean = false ;
  LicClasses = this.ds.getLicenceClasses();
  newArray = [];
  class: string;
  // getData() function is in services.ts
  database = this.ds.getData();
  //In your form the onChange function is triggered when you make a drop-down selected. 
  // 
  onChange() {
    this.newArray = [];
    // In  the form drop-down list, the value you select becomes the ngModel "class" variable 
    // Set ClassLic as drop-down list selection
    let ClassLic = this.class.trim();  
    // Loop over database
    for (let i = 0; i < this.database.length; i++) {

      // set variable 'data' to the database 'Licence Classess' record NOTE: this is an array
      let data = this.database[i].LicClasses;
      // We use the JS 'find' function to search the data variable and loop each 
      // elment of the Lic Classes record.
      // For each element we ask if its eauql to the drop-down selection, and retiurn it it does
      let found = data.find(function(element) {
        if (element.name.trim() == ClassLic.trim()) {
          return element.name;
          // this.newArray.push( this.database[i] )
        }
      }); // end found
      // Only look at the return element that have a value
      if (found != undefined) {
        // If they are EQUAL then add that database record to the newAray
        if (found.name.trim() == ClassLic.trim()) {
          this.newArray.push(this.database[i]);
        } // end if
      }
    } //end for
  } //end onChange function
} //end class
