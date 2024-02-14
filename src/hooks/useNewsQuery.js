import { useEffect } from 'react';

const useNewsQuery = (dispatch) => {
    useEffect(() => {
        console.count('useEffect');
        (async () => {
            const url = 'http://localhost:8000/v2/top-headlines';
            const response = await fetch(url);
            const jsonResponse = await response.json();
            if (jsonResponse.status === 'ok') {
                dispatch({ type: 'SET_NEWS', newses: jsonResponse.articles });
            }
        })();
    }, [dispatch]);

    const handleQuery = (type, value) => {
        (async () => {
            let url = null;

            if (type === 'category' || (type === 'search' && value === '')) {
                url = `http://localhost:8000/v2/top-headlines?category=${value}`;
            } else if (type === 'search') {
                url = `http://localhost:8000/v2/search?q=${value}`;
            }

            if (!url) {
                return;
            }

            const response = await fetch(url);
            const jsonResponse = await response.json();
            if (
                (jsonResponse.status === 'ok' && type === 'category') ||
                (type === 'search' && value === '')
            ) {
                dispatch({
                    type: 'SET_NEWS',
                    newses: jsonResponse.articles,
                });
            } else if (jsonResponse.result && type === 'search') {
                console.log('search..');
                dispatch({
                    type: 'SET_NEWS',
                    newses: jsonResponse.result,
                });
            }
        })();
    };

    return handleQuery;
};

export default useNewsQuery;
