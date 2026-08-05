import Link from 'next/link';
import React from 'react';

const ThemeChangingPage = () => {
    return (
        <div>
            This is them changing page. <br />
            I will practice context api here

        <h3>Go to toggle theme <button className='btn btn-info'><Link href={`/theme/change-theme`}>Change theme</Link></button></h3>

        </div>
    );
};

export default ThemeChangingPage;