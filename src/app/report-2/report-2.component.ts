import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-report-2',
  templateUrl: './report-2.component.html',
  styleUrls: ['./report-2.component.css']
})

export class Report2Component {

  constructor(private ds: DataService) {  }
isShown: boolean = false ;
  newArray = []
  selected_deptartment:string;
  // getData() function is in services.ts
  database =  this.ds.getData()

  //In your form the onChange function is triggered when you make a drop-down selected.  The parameter "selectedOption" captures the value of the drop-down option you select.
  onChange = (selectedOption) => {
       this.isShown = true

      this.selected_deptartment = selectedOption.value;
      this.newArray = []
      // Loop over database and see when selected drop-down dept EQUAL dept in database
      // WHen thay are eaul push that record into the newArray
      for(let i=0; i< this.database.length ; i++){
          if( this.database[i].dept == this.selected_deptartment ){
              this.newArray.push( this.database[i] ) 
          } // end if  
        } //end for
  } //end onChange function

  
} // end class