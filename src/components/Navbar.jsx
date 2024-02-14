import Date from './navbar/Date';
import Logo from './navbar/Logo';
import NavMenu from './navbar/NavMenu';
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
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navbar;
