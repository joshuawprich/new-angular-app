import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  name: string = "";

  constructor() {
   }

   // Called whenever this component is initialised.
  ngOnInit(): void {
  }

  onSubmit() {
    //..
  }

}
