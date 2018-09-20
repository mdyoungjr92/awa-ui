import { StateSeasonContainer } from 'domain/state-season-container';
import { AvailableLandContainer } from 'domain/available-land-container';

export const SEASONS : StateSeasonContainer[] = [
  { state: 'MO', seasons: [
    { id: 1, name: 'Quail Hunting', state: 'MO' },
    { id: 2, name: 'Pheasant Hunting', state: 'MO' }
    ]
  },
  { state: 'KS', seasons: [
    { id: 3, name: 'Pheasant Hunting', state: 'KS' },
    { id: 4, name: 'Goose Hunting', state: 'KS' },
    { id: 5, name: 'Whitetail Deer Hunting', state: 'KS' },
    { id: 6, name: 'Antelope Hunting', state: 'KS' }
    ]
  }
];

export const AVAILABLE_LAND : AvailableLandContainer[] = [
  { availableDate: '09-19-2018',
    openSeasons: ['Quail Hunting', 'Pheasant Hunting'],
    availableFarms: [
      {
          state: 'MO',
          farms: [
            {id: 1,
              number: '0080',
              units: [
                {id: 1, name: 'A', acreage: 50},
                {id: 2, name: 'B', acreage: 500},
                {id: 3, name: 'C', acreage: 5000}]
              },
              {id: 2,
                number: '0081',
                units: [
                  {id: 1, name: 'A', acreage: 50},
                  {id: 2, name: 'B', acreage: 500},
                  {id: 3, name: 'C', acreage: 5000}]
                },
                {id: 3,
                  number: '0082',
                  units: [
                    {id: 1, name: 'A', acreage: 50},
                    {id: 2, name: 'B', acreage: 500},
                    {id: 3, name: 'C', acreage: 5000}]
                  }
          ]
      },
      {
          state: 'KS',
          farms: [
            {id: 4,
              number: '0090',
              units: [
                {id: 1, name: 'A', acreage: 50},
                {id: 2, name: 'B', acreage: 500},
                {id: 3, name: 'C', acreage: 5000}]
              },
              {id: 5,
                number: '0091',
                units: [
                  {id: 1, name: 'A', acreage: 50},
                  {id: 2, name: 'B', acreage: 500},
                  {id: 3, name: 'C', acreage: 5000}]
                },
                {id: 6,
                  number: '0092',
                  units: [
                    {id: 1, name: 'A', acreage: 50},
                    {id: 2, name: 'B', acreage: 500},
                    {id: 3, name: 'C', acreage: 5000}]
                  }
          ]
      }
    ]
  }
  ,
  { availableDate: '2018-09-20',
    openSeasons: ['Quail Hunting', 'Pheasant Hunting'],
    availableFarms: [
      {
          state: 'MO',
          farms: [
            {id: 1,
              number: '0080',
              units: [
                {id: 1, name: 'A', acreage: 50},
                {id: 2, name: 'B', acreage: 500},
                {id: 3, name: 'C', acreage: 5000}]
              },
              {id: 2,
                number: '0081',
                units: [
                  {id: 1, name: 'A', acreage: 50},
                  {id: 2, name: 'B', acreage: 500},
                  {id: 3, name: 'C', acreage: 5000}]
                },
                {id: 3,
                  number: '0082',
                  units: [
                    {id: 1, name: 'A', acreage: 50},
                    {id: 2, name: 'B', acreage: 500},
                    {id: 3, name: 'C', acreage: 5000}]
                  }
          ]
      },
      {
          state: 'KS',
          farms: [
            {id: 4,
              number: '0090',
              units: [
                {id: 1, name: 'A', acreage: 50},
                {id: 2, name: 'B', acreage: 500},
                {id: 3, name: 'C', acreage: 5000}]
              },
              {id: 5,
                number: '0091',
                units: [
                  {id: 1, name: 'A', acreage: 50},
                  {id: 2, name: 'B', acreage: 500},
                  {id: 3, name: 'C', acreage: 5000}]
                },
                {id: 6,
                  number: '0092',
                  units: [
                    {id: 1, name: 'A', acreage: 50},
                    {id: 2, name: 'B', acreage: 500},
                    {id: 3, name: 'C', acreage: 5000}]
                  }
          ]
      }
    ]
  }
];
