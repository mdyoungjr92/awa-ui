import { Season } from './season';
import { StateSeason } from './state-season';

export const STATE_SEASONS : StateSeason[] = [
  { state: 'Missouri' , seasons: [
    { id: 1, name: 'Quail Hunting', state: 'MO' },
    { id: 2, name: 'Pheasant Hunting', state: 'MO' }
  ] },
  { state: 'Kansas', seasons: [
    { id: 2, name: 'Pheasant Hunting', state: 'KS' },
    { id: 3, name: 'Goose Hunting', state: 'KS' },
    { id: 4, name: 'Whitetail Deer Hunting', state: 'KS' },
    { id: 5, name: 'Antelope Hunting', state: 'KS' }
  ] }
];

export const SEASONS : Season[] = [
  { id: 1, name: 'Quail Hunting', state: 'MO' },
  { id: 2, name: 'Pheasant Hunting', state: 'MO' },
  { id: 3, name: 'Pheasant Hunting', state: 'KS' },
  { id: 4, name: 'Goose Hunting', state: 'KS' },
  { id: 5, name: 'Whitetail Deer Hunting', state: 'KS' },
  { id: 6, name: 'Antelope Hunting', state: 'KS' }
];
