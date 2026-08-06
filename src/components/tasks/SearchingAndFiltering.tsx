'use client'
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchingAndFiltering = ({ params, fetchedData }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Filters :
  const category = params?.category
  const difficulty = params?.difficulty
  const completed = params?.completed
  const search = searchParams.get('search') || ''

  // New filters
  // Implementing useEffect
  const [newCategory, setNewCategory] = useState(category)
  const [newDifficulty, setNewDifficulty] = useState(difficulty)
  const [newCompleted, setNewCompleted] = useState(completed)

  const [newSearch, setNewSearch] = useState(search)

  // useEffect(() => {
  //   setNewCategory(category)
  //   setNewDifficulty(difficulty)
  //   setNewCompleted(completed)
  //   setNewSearch(search)
  // }, [category, difficulty, completed, search])

  // Fnction for handleing the filterings for all filtering dynamically : \
  const handleFiltering = (key : string, value:string) => {
    const currentParams = new URLSearchParams(searchParams)

    if (value) {
      currentParams.set(key, value)
    } else {
      currentParams.delete(key)
    }

    router.push(`?${currentParams.toString()}`)
  }

  // Selecting category
  const handleCategory = (e) => {
    // console.log(e.target.value , ' e ')
    const selectedValue = e.target.value
    setNewCategory(selectedValue)

    handleFiltering('category', selectedValue)

  }

  // selecting difficulty
  const handleDifficulty = (e) => {
    const selectedValue = e.target.value
    setNewDifficulty(selectedValue)

    handleFiltering('difficulty', selectedValue)

  }


  // Selecting Completed
  const handleCompleted = (e) => {
    const selectedValue = e.target.value
    setNewCompleted(selectedValue)

    handleFiltering('completed', selectedValue)
  }


  // Searching by search bar
  const handleSearch = (e) => {
    const selectedValue = e.target.value;
    setNewSearch(selectedValue)
    handleFiltering('search', selectedValue)
  }


  // filtering 
  const filteredData =
    fetchedData.filter((task) => {
      // Filtering for category :
      let filteredCategory  = newCategory ? task?.category.toLowerCase() == newCategory?.toLowerCase() : true;

      // Filtering for difficulty :
      let filterDifficulty = newDifficulty ? task?.difficulty.toLowerCase() == newDifficulty?.toLowerCase() : true;

      // Filtering for Completed 
      const taskCompletedStr = String(task?.completed); // Turns true/false into "true"/"false"
      let filterCompleted = newCompleted ? taskCompletedStr === newCompleted : true;
      let filterSearch = newSearch ? task?.title?.toLowerCase().includes(newSearch.toLowerCase()) : true;


      return filteredCategory && filterDifficulty && filterCompleted && filterSearch
    })




  // console.log(filteredData, ' filtered Data inside useEffect')

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
              value={newSearch}
              onChange={handleSearch}
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
            value={newCategory}
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
            <select
            value={newDifficulty}
              onChange={handleDifficulty}
              className="select select-bordered w-full focus:outline-none focus:border-orange-500 text-sm sm:text-base">
              <option value="">All Difficulties</option>
              <option value="Easy">🟢 Easy</option>
              <option value="Medium">🟡 Medium</option>
              <option value="Hard">🔴 Hard</option>
            </select>
          </div>

          {/* completed Dropdown */}
          <div className="form-control w-full">
            <label className="label text-xs font-semibold text-gray-500 uppercase pb-1">
              Completed
            </label>
            <select
            value={newCompleted}
              onChange={handleCompleted}
              className="select select-bordered w-full focus:outline-none focus:border-orange-500 text-sm sm:text-base">
              <option value="">All Tasks</option>
              <option value="true">true</option>
              <option value="false">false</option>
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