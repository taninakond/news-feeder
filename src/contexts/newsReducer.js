export const initialNews = {
    leftNews: [],
    rightNews: [],
};

export const newsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NEWS': {
            const totalNews = action.newses.length;
            let leftNews, rightNews;
            if (totalNews >= 3) {
                const leftNewsNumber = (totalNews * 2) / 3 - 1;
                leftNews = action.newses.slice(0, leftNewsNumber);
                rightNews = action.newses.slice(leftNewsNumber);
            } else {
                leftNews = action.newses;
                rightNews = [];
            }

            return {
                leftNews,
                rightNews,
            };
        }
        default: {
            return state;
        }
    }
};
