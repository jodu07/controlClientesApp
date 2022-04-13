import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../interface/client.interface';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit {

  @Input() listClients: Client[]=[];


  constructor() { }

  ngOnInit(): void {
  }

}
