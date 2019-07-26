import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  public isLogged = false;
  constructor() { }

  ngOnInit() {
  }

}
