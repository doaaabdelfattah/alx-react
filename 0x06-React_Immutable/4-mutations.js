import { Map } from 'immutable';

// Create an initial Map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create an object with the updates

const updates = {
  3: 'Benjamin',
  5: 'Oliver'

};
// Create new obj with modified data
export const map2 = map.merge(updates);
