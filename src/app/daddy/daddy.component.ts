import { Component, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
import { AnakComponent } from "./anak/anak.component";

@Component({
  selector: "app-daddy",
  templateUrl: "./daddy.component.html",
  styleUrls: ["./daddy.component.css"]
})
export class DaddyComponent implements OnInit {
  //used in Custom Property Binding --- From parent to child
  messageFromDadToAnak = "Hello Anak, from Dad Component";

  //used in Custom Event Binding  -- From child to parent
  @Output() onYell = new EventEmitter();
  fireYellEvent(e){
    this.onYell.emit(e)
  }

  constructor() {}

  ngOnInit() {}
}
