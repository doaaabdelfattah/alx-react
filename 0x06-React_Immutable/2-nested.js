import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert the plain object to an Immutable.js Map
  const immutableObject = fromJS(object);

  return (immutableObject.getIn(array));
}
