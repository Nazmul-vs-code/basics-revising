'use client' // Don't forget this because we are using a hook!
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PageNotFound = () => {
    const router = useRouter();

    return (
        <div>
            <h1>404 not found</h1>
            <button className='btn btn-error'>
                <Link href={'/'}>Back to home</Link>
            </button>
            
            {/* Added onClick with router.back() 👇 */}
            <button 
                className='btn btn-error' 
                onClick={() => router.back()}
            >
                Back to previous page
            </button>
        </div>
    );
};

export default PageNotFound;