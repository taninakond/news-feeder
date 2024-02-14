import { useContext } from 'react';
import { NewsContext } from '../contexts/newsContext';
import LeftContainer from './main/LeftContainer';
import RightContainer from './main/RightContainer';

const Main = () => {
    const newses = useContext(NewsContext);
    const { leftNews, rightNews } = newses;
    return (
        <main className='my-10 lg:my-14'>
            {leftNews.length > 0 ? (
                <div className='container mx-auto grid grid-cols-12 gap-8'>
                    <LeftContainer />
                    {rightNews.length > 0 && <RightContainer />}
                </div>
            ) : (
                <h2 className='text-2xl text-center'>News not found</h2>
            )}
        </main>
    );
};

export default Main;
