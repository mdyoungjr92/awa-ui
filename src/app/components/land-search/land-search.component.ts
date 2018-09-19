import { Component, OnInit } from '@angular/core';
import { Season } from "domain/season";
import { SeasonService } from "services/season/season.service";
import { LandSearchService } from "services/land-search/land-search.service";

@Component({
  selector: 'land-search',
  templateUrl: './land-search.component.html',
  styleUrls: ['./land-search.component.css']
})
export class LandSearchComponent implements OnInit {

  // land search will need to know the open seasons that are accepting reservations
  // it will then take that, along with the farm search criteria to pull back a list
  // of viable farms for selection

  search: string;

  seasons: Season[];
  selectedSeasons: Season[] = [];

  constructor(private seasonService: SeasonService) { }

  ngOnInit() {
    this.seasonService.getAvailableSeasons().subscribe(seasons => this.seasons = seasons);
  }

  isSelected(season: Season) : boolean {
    return this.selectedSeasons.indexOf(season) != -1;
  }

  onSelect(season: Season) : void {
    let idx = this.selectedSeasons.indexOf(season);

    if (-1 == idx) {
      this.selectedSeasons.push(season);
    } else {
      this.selectedSeasons.splice(idx,1);
    }
  }


}
