import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NewsDispatchContext } from '../../contexts/newsContext';

const MenuItem = ({ item }) => {
    const setQuery = useContext(NewsDispatchContext);

    const handleClick = (event, item) => {
        event.preventDefault();
        setQuery('category', item);
    };
    return (
        <li>
            <a
                onClick={(event) => handleClick(event, item.toLowerCase())}
                href='#'
            >
                {item}
            </a>
        </li>
    );
};

MenuItem.propTypes = {
    item: PropTypes.string.isRequired,
};

export default MenuItem;
