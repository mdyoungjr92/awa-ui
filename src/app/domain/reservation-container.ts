import { Season } from './season';
import { Unit } from './unit';
import { AvailableLandContainer } from './available-land-container';

export class ReservationContainer {

    selectedSeasons: Season[] = [];
    landSearchCriteria: string = '';
    availableLand: AvailableLandContainer[];

    selectedUnits: Unit[];
        
}