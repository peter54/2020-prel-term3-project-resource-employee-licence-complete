import { Component, OnInit } from '@angular/core';
 import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.css']
})
export class DisplayRecordComponent implements OnInit {
 id
 record
  constructor(private ds: DataService, private routeID:ActivatedRoute){
   
  }

  ngOnInit() {
      this.id=this.routeID.snapshot.paramMap.get("id");
  
     this.record =  this.ds.getRecord(this.id)
  }




}