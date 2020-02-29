import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public message = "Hello"
  public no = 1;

  ngOnInit(): void {
    setInterval(() => {
      this.no = ++this.no;
    }, 1000);
  }

}
