import { Fragment } from 'react';
import RightFancyPost from './RightFancyPost';
import RightPost from './RightPost';

import PropTypes from 'prop-types';

const RightContainer = ({ newses }) => {
    return (
        <div className='col-span-12 self-start xl:col-span-4'>
            <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
                {newses?.map((news, index) => (
                    <Fragment key={index}>
                        {index === 0 && <RightFancyPost news={news} />}
                        {index >= 1 && <RightPost news={news} />}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

RightContainer.propTypes = {
    newses: PropTypes.array.isRequired,
};

export default RightContainer;
