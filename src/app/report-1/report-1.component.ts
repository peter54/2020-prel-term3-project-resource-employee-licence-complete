import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-report-1",
  templateUrl: "./report-1.component.html",
  styleUrls: ["./report-1.component.css"]
})
export class Report1Component {
  newArray = [];
  days = 60;
  date = new Date();
  //milliseconds in a day (1000*60*60*24)
  period = new Date(this.date.getTime() + this.days * 24 * 60 * 60 * 1000);

  constructor(private ds: DataService) {
    // get database data and loop over it
    let result = this.ds.getData();
    for (let i = 0; i < result.length; i++) {
      // pass the record expiry date to compare function parameter
      //The result from Function "compare() should be greater 0 and less then 60 days
      if (
        this.compare(result[i].expiryDate) > 0 &&
        this.compare(result[i].expiryDate) <= this.days
      ) {
        // push an array of the record AND days till expiry
        this.newArray.push([result[i], this.compare(result[i].expiryDate)]);
        console.log(this.newArray);
      } // end if
    } //end for
  } // end constructor

  // FUNCTION "compare()""
  // This function accepts one parameter:  the records 'expiry date'
  // date1 - passed parameter ( formated as a date)
  // date2 - todays date as a time in seconds PLUS 60 days in seconds   ( result is formated as a date)
  // date1 and date2 are converted to seconds and subtracted fron each other
  // The result is calculated back into days and rounded up
  compare(expireDate) {
    let date1 = new Date(expireDate);
    let date2 = new Date(this.date.getTime() + this.days * 24 * 60 * 60 * 1000);

    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    let difference = Difference_In_Days;

    return difference;
  } //end compare
} // end class
