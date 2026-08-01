'use client'
import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchingAndFiltering = ({ params, fetchedData }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // console.log(router, ' router')

  const category = params?.category
  const [newCategory, setNewCategory] = useState(category)
  // console.log(params , ' param ')


  // Selecting category
  const handleCategory = (e) => {
    // console.log(e.target.value , ' e ')
    const selectedValue = e.target.value
    setNewCategory(selectedValue)

    const currentParams = new URLSearchParams(searchParams);
    // console.log(currentParams, ' current params ')

    if (selectedValue) {
      currentParams.set('category' , selectedValue)
    } else {
      currentParams.delete('category')
    }

    router.push(`?${currentParams.toString()}`)

  }

  // filtering 
  const filteredData = newCategory ?
    fetchedData.filter((task) => {
      let filtered = task?.category.toLowerCase() == newCategory.toLowerCase()
      return filtered
    })
    : fetchedData

  // console.log(filteredData ,  ' filtered data ')


  return (
    <div>
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
            <select
              onChange={handleCategory}
              className="select select-bordered w-full focus:outline-none focus:border-orange-500 text-sm sm:text-base">
              <option value="">All Categories</option>
              <option value="React">React</option>
              <option value="Next.js">Next.js</option>
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
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-5'>

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