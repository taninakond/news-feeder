import MenuItem from './MenuItem';

const NavMenu = () => {
    const menuItems = [
        'General',
        'Business',
        'Entertainment',
        'Health',
        'Science',
        'Sports',
        'Technology',
    ];
    return (
        <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
            {menuItems.map((item) => (
                <MenuItem key={item} item={item} />
            ))}
        </ul>
    );
};

export default NavMenu;
