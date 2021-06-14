import { useState } from 'react';
import Data from '../../../utils/front-end.json';

function usePlaces() {

  const [places, setPlaces] = useState(Data)
  const onSetPlaces = (value) => setPlaces(value)

  const onCountPlaces = () => places.length

  return {
    states: {
      places
    },
    actions: {
      onSetPlaces,
      onCountPlaces
    }
  }
}

export default usePlaces;

