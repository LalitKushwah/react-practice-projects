import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import Loader from '../../../../components/widgets/Loader'
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles(() => ({
    position: {
        width: '500px',
    }
}))

const Tours = () => {

    const classes = useStyle();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTours = () => {
        setLoading(true);
        fetch('https://course-api.com/react-tours-project')
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            }).catch(error => {
                setLoading(false);
                console.error(error);
            })
    }

    useEffect(() => {
        fetchTours();
    }, [])

    if (loading) return <main><Loader /></main>

    const removeTour = (id) => {
        const filteredTour = data.filter(tour => tour.id !== id);
        setData(filteredTour);
    }

    return (
        <div style={{ width: '500px', display: 'inline-block' }}>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {
                    data && data.length ? data.map((tour) => {
                        return (
                            <Tour key={tour.id} {...tour} removeTourHandler={removeTour} />
                        )
                    }) : <button class='btn' onClick={() => fetchTours()}>Refresh</button>
                }
            </div>
        </div>
    )
}
export default Tours;