import PropTypes from 'prop-types';
import defaultThumb from '../../assets/news-placeholder-thumbnail.svg';
import formatDate from '../../utils/formateDate';

const RightFancyPost = ({ news }) => {
    return (
        <div className='col-span-12 mb-6 md:col-span-8'>
            <img
                className='w-full'
                src={news.urlToImage ?? defaultThumb}
                alt={news.title}
            />

            <div className='col-span-12 mt-6 md:col-span-4'>
                <a href='#'>
                    <h3 className='mb-2.5 text-xl font-bold lg:text-[20px]'>
                        {news.title}
                    </h3>
                </a>
                <p className='text-base text-[#292219]'>{news.description}</p>
                <p className='mt-5 text-base text-[#94908C]'>
                    {formatDate(news.publishedAt)}
                </p>
            </div>
        </div>
    );
};

RightFancyPost.propTypes = {
    news: PropTypes.object.isRequired,
};

export default RightFancyPost;
