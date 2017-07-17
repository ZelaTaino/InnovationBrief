import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../shared/model/form'

@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  @Input()
  forms: Form[];

  constructor() { }

  ngOnInit() {
  }

}
