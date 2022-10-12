import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {

  constructor() { 
    
  }

  @Input() title: String;
  @Input() route: String;

  ngOnInit(): void {
  }

}
