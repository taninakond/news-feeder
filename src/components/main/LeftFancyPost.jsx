import PropTypes from 'prop-types';

const LeftFancyPost = ({ news }) => {
    return (
        <div className='col-span-12 grid grid-cols-12 gap-4 lg:col-span-8'>
            <div className='col-span-12 md:col-span-6'>
                <a href=''>
                    <h3 className='mb-2.5 text-xl font-bold lg:text-2xl'>
                        {news.title}
                    </h3>
                </a>
                <p className='text-base text-[#292219]'>{news.description}</p>
                <p className='mt-5 text-base text-[#5C5955]'>
                    {news.publishedAt}
                </p>
            </div>

            <div className='col-span-12 md:col-span-6'>
                <img className='w-full' src={news.urlToImage} alt='thumb' />
            </div>
        </div>
    );
};

LeftFancyPost.propTypes = {
    news: PropTypes.object.isRequired,
};

export default LeftFancyPost;
