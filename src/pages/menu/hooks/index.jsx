import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../../utils/front-end.json';

function usePlaceMenu() {

    const params = useParams()
    const [place, setPlace] = useState({
        id: null,
        name: null,
        menuItems: []
    })

    const onSetPlace = (value) => setPlace(value)
    const onInit = () => {
        if (!params.id) {
            return
        }
        const getById = Data.find(place => place.id === params.id)
        onSetPlace(getById)
    }

    useEffect(() => {
        onInit()
    }, [])

    return {
        states: {
            place
        },
        actions: {
            
        }
    }
}

export default usePlaceMenu;