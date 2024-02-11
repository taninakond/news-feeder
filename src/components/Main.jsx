import useNewsQuery from '../hooks/useNewsQuery';
import LeftContainer from './main/LeftContainer';
import RightContainer from './main/RightContainer';

const Main = () => {
    const newses = useNewsQuery();
    const leftNewsNumber = (newses.length * 3) / 4;
    const leftNews = newses.slice(0, leftNewsNumber);
    const rightNews = newses.slice(leftNewsNumber);

    console.log(leftNews, rightNews);

    return (
        <main className='my-10 lg:my-14'>
            <div className='container mx-auto grid grid-cols-12 gap-8'>
                <LeftContainer newses={leftNews} />
                <RightContainer newses={rightNews} />
            </div>
        </main>
    );
};

export default Main;
