import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Mock } from 'src/app/models/mock';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.createMock().subscribe((mock: Mock) => console.log(mock));
  }

}
