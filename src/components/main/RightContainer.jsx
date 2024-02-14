import { Fragment, useContext } from 'react';
import { NewsContext } from '../../contexts/newsContext';
import RightFancyPost from './RightFancyPost';
import RightPost from './RightPost';

const RightContainer = () => {
    const newses = useContext(NewsContext);
    return (
        <div className='col-span-12 self-start xl:col-span-4'>
            <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
                {newses?.rightNews?.map((news, index) => (
                    <Fragment key={index}>
                        {index === 0 && <RightFancyPost news={news} />}
                        {index >= 1 && <RightPost news={news} />}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default RightContainer;
