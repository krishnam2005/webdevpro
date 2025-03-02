import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);
    const [showFilters, setShowFilters] = useState(false); // state to manage filter visibility

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                const titleMatch = job.title.toLowerCase().includes(searchedQuery.toLowerCase());
                const descriptionMatch = job.description.toLowerCase().includes(searchedQuery.toLowerCase());
                const locationMatch = job.location.toLowerCase().includes(searchedQuery.toLowerCase());

                let salaryMatch = false;
                if (searchedQuery === "0-100k") {
                    salaryMatch = job.salary >= 0 && job.salary <= 1; // 0 to 1 lakh
                } else if (searchedQuery === "1lakh to 5lakh") {
                    salaryMatch = job.salary >= 1 && job.salary <= 5; // 1 to 5 lakhs
                } else if (searchedQuery === "5lakh to 15lakh") {
                    salaryMatch = job.salary >= 5 && job.salary <= 15; // 5 to 15 lakhs
                } else if (searchedQuery === "15+") {
                    salaryMatch = job.salary >= 15; // 15+ lakhs
                }

                return titleMatch || descriptionMatch || locationMatch || salaryMatch;
            });

            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    // Toggle filter visibility on small screens
    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5 px-4'>
                <div className='flex flex-col md:flex-row gap-5'>
                    {/* Filter Sidebar */}
                    <div className={`fixed inset-0 z-40 md:relative md:w-1/4 transform ${showFilters ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
                        <div className="absolute inset-0 bg-black opacity-30 md:hidden" onClick={toggleFilters}></div>
                        <div className="relative w-64 md:w-full bg-white h-full p-5 shadow-lg">
                            <button className="absolute top-4 right-4 md:hidden" onClick={toggleFilters}>
                                <X className="h-6 w-6 text-gray-600" />
                            </button>
                            <FilterCard />
                        </div>
                    </div>

                    {/* Jobs Listing */}
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                filterJobs.length <= 0 ? <span>Job not found</span> :
                                filterJobs.map((job) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        key={job?._id}>
                                        <Job job={job} />
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Filter Button for Small Screens */}
            <button
                className="fixed top-20 right-4 md:hidden bg-purple-600 text-white p-3 rounded-full shadow-lg"
                onClick={toggleFilters}
            >
                Filters
            </button>
        </div>
    );
};

export default Jobs;
