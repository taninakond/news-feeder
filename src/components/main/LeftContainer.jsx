import PropTypes from 'prop-types';
import { Fragment } from 'react';
import LeftFancyPost from './LeftFancyPost';
import LeftPost from './LeftPost';
import RecentPost from './RecentPost';

const LeftContainer = ({ newses }) => {
    return (
        <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
            {newses?.map((news, index) => (
                <Fragment key={index}>
                    {index === 0 && <RecentPost news={news} />}
                    {index === 1 && <LeftFancyPost news={news} />}
                    {index >= 2 && <LeftPost news={news} />}
                </Fragment>
            ))}
        </div>
    );
};

LeftContainer.propTypes = {
    newses: PropTypes.array.isRequired,
};

export default LeftContainer;
