import { Map } from 'immutable';

export default function getImmutableObject(object) {
  return Map(object);
}

objData = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}

console.log(getImmutableObject(objData));
