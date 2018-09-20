import { Season } from 'domain/season';

export class LandSearch {

  constructor (public searchData: string,
               public selectedSeasons: Season[]) { }

}
