import { useEffect, useState } from 'react';

const useNewsQuery = (type = '', value = '') => {
    const [news, setNews] = useState([]);

    let url = 'http://localhost:8000/v2/top-headlines';
    if (type === 'category') {
        url = `http://localhost:8000/v2/top-headlines?category=${value}`;
    } else if (type === 'search') {
        url = `http://localhost:8000/v2/top-headlines?q=${value}`;
    }

    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            if (jsonResponse.status === 'ok') {
                setNews(jsonResponse.articles);
            }
        })();
    }, [url]);

    return news;
};

export default useNewsQuery;
