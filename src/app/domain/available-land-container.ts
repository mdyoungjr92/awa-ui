import { Farm } from 'domain/farm';

export class AvailableLandContainer {
  availableDate: string;
  openSeasons: string[];
  availableFarms: StateFarmContainer[];
}

class StateFarmContainer {
  state: string;
  farms: Farm[];
}
