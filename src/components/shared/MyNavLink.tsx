'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    href: string;
    text: string;
    NavIcon: React.ElementType;
}

const MyNavLink = ({href , text , NavIcon}: Props) => {

    const path = usePathname()
    // console.log(path , ' path ')
    return (
        <div>
            <Link className={`btn ${path === href && 'btn-primary'}`} href={href} ><NavIcon />{text}</Link>
        </div>
    );
};

export default MyNavLink;