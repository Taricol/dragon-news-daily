import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-১০' pauseOnHover={true} speed={60}>
                <p className='font-bold'>।।।আসিফ খেলো ছেকা  ।</p>
                <p className='font-bold'>।।।এবার টেনশন এ পড়ে গেল তাহমিদ বিন আজিজ ওরফে পাশা   ।</p>
                <p className='font-bold'>
            ।।। বিশ্বের সেরা বাটপার হওয়ার স্বপ্ন ইয়ুশা ফয়সালের ।।।
        
                </p>
                </Marquee>
            
        </div>
    );
};

export default LatestNews;