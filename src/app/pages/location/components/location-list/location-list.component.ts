import { Ilocation } from './../../models/ilocation';
import { LocationListService } from './../../services/location-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  public locations: Ilocation[] = [];

  constructor(private locationListService: LocationListService) { }

  ngOnInit(): void {
    this.recoverLocations();
  }

  public recoverLocations() {
    this.locationListService.getLocations().subscribe((data:any) => {
      const results: Ilocation[] = data.results;
      const formatedRessults = results.map(( { name, type, dimension }) => ({
        name,
        type,
        dimension,
      }))
      this.locations = formatedRessults;
    })
  }
}
