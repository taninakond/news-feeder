import Date from './navbar/Date';
import Logo from './navbar/Logo';
import Search from './navbar/Search';

const Navbar = () => {
    return (
        <nav className='border-b border-black py-6 md:py-8'>
            <div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
                <Date />
                <Logo />
                <Search />
            </div>

            <div className='container mx-auto mt-6'>
                <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
                    <li>
                        <a href='#'>General</a>
                    </li>
                    <li>
                        <a href='#'>Business</a>
                    </li>
                    <li>
                        <a href='#'>Entertainment</a>
                    </li>
                    <li>
                        <a href='#'>Health</a>
                    </li>
                    <li>
                        <a href='#'>Science</a>
                    </li>
                    <li>
                        <a href='#'>Sports</a>
                    </li>
                    <li>
                        <a href='#'>Technology</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
