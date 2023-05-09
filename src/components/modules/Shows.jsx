import { useEffect, useState } from 'react';
import someImage from '../../assets/show-1.jpeg';
import PageWrapper from '../layout/PageWrapper';

const Shows = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    
    useEffect(() => {
        const fetchPopularMovies = async () => {
            const response = await fetch('http://localhost:3000/shows');
            const data = await response.json();
            setPopularMovies(data);
        }
        fetchPopularMovies();
    }, [])
    return ( 
        <div className="py-20">
            <PageWrapper>
                <h2 className="text-center text-gray-500 text-2xl font-bold uppercase tracking-wide mb-10">Upcoming shows</h2>
                <div className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-2 lg:grid-cols-3">
                    { 
                        popularMovies.map(popularMovie => (
                            <div key={popularMovie.id} className="border border-slate-200 bg-white p-[6px] rounded-[3px]">
                        <a href="" className="h-[160px] md:h-[130px] block">
                            <img src={someImage} alt="" className="object-cover h-full w-full rounded-[3px]" />
                        </a>
                        <div className="py-2 rounded-[3px] p-2 px-[6px] flex flex-col gap-y-2">
                            <h1 className="text-gray-700 text-lg font-semibold">{popularMovie.title}</h1>
                            <p className="text-gray-600 text-sm">{popularMovie.description}</p>
                            <div className="flex justify-end">
                                <button className="my-1 active:scale-95 bg-opacity-95 hover:bg-opacity-100 text-white px-3 py-[6px]  leading-4 font-medium  text-[12px] bg-[#5F6AF6] rounded-[2px] ">Buy</button>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </PageWrapper>
        </div>
    );
}
 
export default Shows;