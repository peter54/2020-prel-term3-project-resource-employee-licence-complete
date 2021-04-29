import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Sort } from "@angular/material/sort";

@Component({
  selector: 'app-display',
  templateUrl: './display-sort.component.html',
  styleUrls: ['./display-sort.component.css']
})
export class DisplaySortComponent implements OnInit {

   results = [];
  constructor(private ds: DataService, private link: ActivatedRoute) {
    this.results = this.ds.getData();
  } // end constructor

  // SORTING
  isActive = false;

 // toggle's parameter "value" will be either 'dept' OR 'lname' 
 // depending on which column you click in the table
  toggle(value) {
    let field = value;
    if (this.isActive == false) {
      this.sortTableAZ(field);
      this.isActive = true;
    } else {
      this.sortTableZA(field);
      this.isActive = false;
    }
  }

// SORT A to Z
  sortTableAZ(field) {
    let fa, fb;
    if (field == "dept") {
      this.results.sort((a, b) => {
        (fa = a.dept.toLowerCase()), (fb = b.dept.toLowerCase());
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } //end if

    if (field == "lname") {
      this.results.sort((a, b) => {
        (fa = a.lname.toLowerCase()), (fb = b.lname.toLowerCase());
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } //end if

    if (field == "expiryDate") {
      this.results.sort((a, b) => {
        (fa = a.expiryDate.toLowerCase()), (fb = b.expiryDate.toLowerCase());
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } //end if

  } // end AZ

 // SORT Z to A
  sortTableZA(field) {
    let fa, fb;
    if (field == "dept") {
      this.results.sort((a, b) => {(fa = a.dept.toLowerCase()), (fb = b.dept.toLowerCase());
        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
    } //end if

    if (field == "lname") {
      this.results.sort((a, b) => {
        (fa = a.lname.toLowerCase()), (fb = b.lname.toLowerCase());

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
    } //end if

    if (field == "expiryDate") {
      this.results.sort((a, b) => {
        (fa = a.expiryDate.toLowerCase()), (fb = b.expiryDate.toLowerCase());
        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
    } //end if
    
  } // end ZA



}