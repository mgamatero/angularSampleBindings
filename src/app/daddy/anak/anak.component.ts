import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anak',
  templateUrl: './anak.component.html',
  styleUrls: ['./anak.component.css']
})
export class AnakComponent implements OnInit {
@Input() anakFromDad = '';
  constructor() { }

  ngOnInit() {
  }

}
