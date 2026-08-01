import SearchingAndFiltering from '@/components/tasks/SearchingAndFiltering';
import fetchData from '@/lib/api/fetch-data';

const TaskPage = async ({ searchParams }) => {
    const params = await searchParams;

  const fetchedData = await fetchData('/data/tasks.json');



    return (
        <div className='flex flex-col gap-2'>
            Tasks page

            <SearchingAndFiltering params={params} fetchedData={fetchedData} />


        </div>
    );
};

export default TaskPage;