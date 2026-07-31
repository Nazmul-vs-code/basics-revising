import React from 'react';
import TaskCard from './TaskCard';
import fetchData from '@/lib/api/fetch-data';

const SearchingAndFiltering = async ({searchParams}) => {

  const params = await searchParams;
  const category = params?.category
  // console.log(params , ' param ')


  const fetchedData = await fetchData('/data/tasks.json');


  // filtering 
    const filteredData = category ? 
        fetchedData.filter((task)=> {
            let filtered = task?.category.toLowerCase() == category.toLowerCase()
            return filtered
        })
    : fetchedData

    // console.log(filteredData ,  ' filtered data ')


  return (
    <div className="w-full bg-base-100 p-4 sm:p-6 rounded-xl shadow-sm border border-base-200">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {/* Search Bar */}
        <div className="form-control w-full">
          <label className="label text-xs font-semibold text-gray-500 uppercase pb-1">
            Search
          </label>
          <input
            type="text"
            placeholder="Search by title..."
            className="input input-bordered w-full focus:outline-none focus:border-orange-500 text-sm sm:text-base"
          />
        </div>

        {/* Category Dropdown */}
        <div className="form-control w-full">
          <label className="label text-xs font-semibold text-gray-500 uppercase pb-1">
            Category
          </label>
          <select className="select select-bordered w-full focus:outline-none focus:border-orange-500 text-sm sm:text-base">
            <option value="">All Categories</option>
            <option onClick={console.log('React is selected')} value="React">React</option>
            <option onClick={console.log('Next is selected')} value="Next.js">Next.js</option>
            <option value="TypeScript">TypeScript</option>
          </select>
        </div>

        {/* Difficulty Selector */}
        <div className="form-control w-full">
          <label className="label text-xs font-semibold text-gray-500 uppercase pb-1">
            Difficulty
          </label>
          <select className="select select-bordered w-full focus:outline-none focus:border-orange-500 text-sm sm:text-base">
            <option value="">All Difficulties</option>
            <option value="Easy">🟢 Easy</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Hard">🔴 Hard</option>
          </select>
        </div>

        {/* Status Dropdown */}
        <div className="form-control w-full">
          <label className="label text-xs font-semibold text-gray-500 uppercase pb-1">
            Status
          </label>
          <select className="select select-bordered w-full focus:outline-none focus:border-orange-500 text-sm sm:text-base">
            <option value="">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

        {

          filteredData.map(data => {
            return <div key={data.id}>

              <TaskCard task={data} />
            </div>
          }
          )
        }
      </div>
    </div>
  );
};

export default SearchingAndFiltering;