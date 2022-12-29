import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AllEvents from '../../../hooks/AllEvents';
import { Link } from 'react-router-dom';
import ManageSingleEvent from './ManageSingleEvent';

const ManageEvent = () => {
    // const [events] = AllEvents();
    const [events, setEvents] = useState([])

    const [pageCount, setPageCount] = useState(0);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);


    useEffect(() => {
        fetch(`http://localhost:5000/events?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [page, size]);



    useEffect(() => {
        fetch('http://localhost:5000/campaignCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 2);
                setPageCount(pages);
            })
    }, [])

    return (
        <section className="content-main ">
            <div className="content-header">
                <h2 className="content-title">Manage Events</h2>
                <div>
                    <Link to="/dashboard/addevent" className="btn btn-primary">
                        Add Event
                    </Link>
                </div>
            </div>

            <div className="card mb-4 shadow-sm ">


                <div className="card-body">
                    <div className="row ">

                        {
                            events?.map(event => <ManageSingleEvent
                                key={event._id}
                                event={event}
                            ></ManageSingleEvent>)
                        }

                    </div>

                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={page === number ? 'selected' : ''}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }

                        <select onChange={e => setSize(e.target.value)}>
                            <option value="5" selected>5</option>
                            <option value="10"  >10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ManageEvent;