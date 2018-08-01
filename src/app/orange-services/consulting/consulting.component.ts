import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {
  title: string = 'Consulting'
  description: string = 'Asking an expert can be an invaluable boost to any business'
  constructor() { }

  ngOnInit() {
  }

}
