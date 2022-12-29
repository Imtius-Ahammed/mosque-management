import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllCampaigns from '../../../hooks/AllCampaigns';
import SingleHelp from '../../Home/Help/SingleHelp';
import ManageSingleCampaign from './ManageSingleCampaign';
import "./ManageCampaign.css"
const ManageCampaign = ({ refetch }) => {
    // const [causes] = AllCampaigns();
    const [causes, setCauses] = useState([])
    const [pageCount, setPageCount] = useState(0);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    useEffect(() => {
        fetch(`http://localhost:5000/campaigns?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setCauses(data));
    }, [page, size]);


    useEffect(() => {
        fetch('http://localhost:5000/campaignCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 5);
                setPageCount(pages);
            })
    }, [])


    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Campaigns</h2>
                <div>
                    <Link to="/dashboard/addcampaign" className="btn btn-primary">
                        Create Campaign
                    </Link>
                </div>
            </div>

            <div className="card mb-4 shadow-sm shadow-lg p-3 mb-5 bg-white rounded ">
                {/* <header className="card-header  ">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto ">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="form-control p-2"
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>All category</option>
                                <option>Electronics</option>
                                <option>Clothings</option>
                                <option>Something else</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select">
                                <option>Latest added</option>
                                <option>Cheap first</option>
                                <option>Most viewed</option>
                            </select>
                        </div>
                    </div>
                </header> */}

                <div className="card-body">
                    <div className="row  ">

                        {
                            causes?.map(cause => <ManageSingleCampaign
                                key={cause._id}

                                cause={cause}
                            ></ManageSingleCampaign>)
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

export default ManageCampaign;