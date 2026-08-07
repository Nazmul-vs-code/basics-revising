import React, { memo } from 'react';

const HomeNav = ({ adjective, getAdjective }) => {
    console.log(" Home Nav randered : ")
    return (
        <div>
            Home nav is here : {adjective}

            <button className='btn btn-error' onClick={()=> getAdjective()}>{getAdjective()}</button>
        </div>
    );
};

export default memo(HomeNav);