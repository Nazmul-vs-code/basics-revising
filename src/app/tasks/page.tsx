import SearchingAndFiltering from '@/components/tasks/SearchingAndFiltering';
// import TaskCard from '@/components/tasks/TaskCard';
// import fetchData from '@/lib/api/fetch-data';

const TaskPage = async ({ searchParams }) => {





    return (
        <div className='flex flex-col gap-2'>
            Tasks page

            <SearchingAndFiltering searchParams={searchParams} />


        </div>
    );
};

export default TaskPage;