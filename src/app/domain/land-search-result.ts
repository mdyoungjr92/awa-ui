import { Farm } from 'domain/farm';

export class LandSearchResult {
  availableDate: Date;
  openSeasons: string[];
  availableFarms: availableFarm[];
}

class availableFarm {
  state: string;
  farms: Farm[];
}
