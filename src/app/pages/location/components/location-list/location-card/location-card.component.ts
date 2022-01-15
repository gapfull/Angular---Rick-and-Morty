import { Ilocation } from '../../../models/ilocation';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {
  @Input() public location!: Ilocation;

  constructor() { }

  ngOnInit(): void {
  }

}
