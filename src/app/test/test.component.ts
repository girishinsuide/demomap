import { Component, OnInit } from '@angular/core';
//import Sortable from 'sortablejs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  //List=[{item:"test1"},{item:"test2"}];
  items=[{item:"test1","index": 1 },{item:"test2","index": 2},{item:"test3","index": 3},{item:"test4","index": 4},{item:"test5","index": 5}];
listOrderChanged(e){
	console.log(e);
}

  ngOnInit() {
  }

}
