import React, { useState } from 'react'; // Import useState from React
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movies = ({ item }) => {
    const [like, setLike] = useState(false);

    return (
        
            <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[200px] inline-block cursor-pointer relative p-2'>
                <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 text-white flex items-center justify-center opacity-0 transition-opacity duration-300'>
                    <p className='white-space-normal text-xs md:text-5m font-bold flex items-center h-full text-center'>{item?.title}</p>
                    <p>
                        {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                    </p>
                </div>
            </div>
    
    );
};

export default Movies;
