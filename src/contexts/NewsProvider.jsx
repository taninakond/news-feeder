import PropTypes from 'prop-types';
import { useReducer } from 'react';
import useNewsQuery from '../hooks/useNewsQuery';
import { NewsContext, NewsDispatchContext } from './newsContext';
import { initialNews, newsReducer } from './newsReducer';

const NewsProvider = ({ children }) => {
    const [newses, dispatch] = useReducer(newsReducer, initialNews);

    const setQuery = useNewsQuery(dispatch);

    return (
        <NewsContext.Provider value={newses}>
            <NewsDispatchContext.Provider value={setQuery}>
                {children}
            </NewsDispatchContext.Provider>
        </NewsContext.Provider>
    );
};

NewsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NewsProvider;
