import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Loader from '../../../../components/widgets/Loader';



const Tabs = () => {

    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch('https://course-api.com/react-tabs-project');
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs();
    }, [])

    if (loading) return (<Loader />)

    const { company, dates, duties, title } = jobs[value];

    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                {/* btn-container */}
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}>
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                {/* Job info */}
                <article classname="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {
                        duties.map((duty, index) => {
                            return (
                                <div key={index} className="job-desc">
                                    <FaAngleDoubleRight className="job-icon" />
                                    <p>{duty}</p>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
        </section>
    )
}
export default Tabs;