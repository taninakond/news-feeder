import { useContext, useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';
import xIcon from '../../assets/icons/x.svg';
import { NewsDispatchContext } from '../../contexts/newsContext';
let timeOutId;
const Search = () => {
    const setQuery = useContext(NewsDispatchContext);
    const [search, setSearch] = useState('');
    const [showSearchBox, setShowSearchBox] = useState(false);

    const handleSearch = (value) => {
        if (timeOutId) {
            clearTimeout(timeOutId);
        }

        timeOutId = setTimeout(() => {
            console.log(value);
            setQuery('search', value);
        }, 300);

        setSearch(value);
    };

    const handleShowBox = () => {
        setShowSearchBox((ssb) => {
            if (ssb) {
                handleSearch('');
            }
            return !ssb;
        });
    };

    return (
        <div className='flex items-center space-x-3 lg:space-x-8 relative min-w-[240px]'>
            {showSearchBox && (
                <input
                    placeholder='Search News'
                    name='searchTerm'
                    id='searchTerm'
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    className='pl-3 pr-5 ml-auto py-2 border border-gray-600 rounded-md outline-none z-10'
                    type='text'
                />
            )}

            <img
                onClick={handleShowBox}
                className='absolute right-1 z-20 cursor-pointer'
                src={showSearchBox ? xIcon : searchIcon}
            />
        </div>
    );
};

export default Search;
