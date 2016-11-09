import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

//Declare and initialise a string
clickMessage: string = ""

  constructor() { }
// This method handles the button ClickMeComponent
  ngClickMe(myMessage: string) {
    this.clickMessage = myMessage;
// Set the message
  }

  ngOnInit() {
  }

}