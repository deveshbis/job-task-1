
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [card, setCard] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allProducts?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`);
            setCard(data);
        }
        getData();
    }, [currentPage, filter, itemsPerPage, sort, search]);

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/productCount?filter=${filter}&search=${search}`);
            setCount(data.count);
        }
        getCount();
    }, [filter, search]);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);

    const handlePaginationButton = value => {
        setCurrentPage(value);
    }

    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText);
        setSearchText('');
    }

    return (
        <div>
            <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                <div>
                        <select
                            onChange={e => {
                                const selectedBrand = e.target.value;
                                setFilter(`BrandName${selectedBrand}`);
                            }}
                            value={filter.startsWith('BrandName') ? filter.replace('BrandName', '') : ''}
                            name='brandName'
                            id='brandName'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter by Brand Name</option>
                            <option value='Adidas'>Adidas</option>
                            <option value='Puma'>Puma</option>
                            <option value='Nike'>Nike</option>
                            <option value='Converse'>Converse</option>
                            <option value='Reebok'>Reebok</option>
                            <option value='New Balance'>New Balance</option>
                            <option value='Vans'>Vans</option>
                            <option value='Timberland'>Timberland</option>
                            <option value='Skechers'>Skechers</option>
                            <option value='Dr. Martens'>Dr. Martens</option>
                        </select>
                    </div>
                    <div>
                        <select
                            onChange={e => {
                                const selectedCategory = e.target.value;
                                setFilter(selectedCategory);
                            }}
                            value={filter.startsWith('BrandName') ? '' : filter}
                            name='category'
                            id='category'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter by Category Name</option>
                            <option value='Running'>Running</option>
                            <option value='High Tops'>High Tops</option>
                            <option value='Casual'>Casual</option>
                            <option value='Skate'>Skate</option>
                            <option value='Lifestyle'>Lifestyle</option>
                            <option value='High Fashion'>High Fashion</option>
                            <option value='Collaborations'>Collaborations</option>
                        </select>
                    </div>
                    <div>
                        <select
                            onChange={e => {
                                const selectedPriceRange = e.target.value;
                                setFilter(`PriceRange${selectedPriceRange}`);
                            }}
                            value={filter.startsWith('PriceRange') ? filter : ''}
                            name='priceRange'
                            id='priceRange'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter by Price Range</option>
                            <option value='1'>0 - 100</option>
                            <option value='2'>101 - 500</option>
                            <option value='3'>501 - 1500</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-5'>
                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Product Name'
                                aria-label='Enter Product Name'
                            />
                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-5'>
                    <div>
                        <select
                            onChange={e => {
                                setSort(e.target.value);
                                setCurrentPage(1);
                            }}
                            value={sort}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort By Price Range</option>
                            <option value='dsc'>Price: High to Low</option>
                            <option value='asc'>Price: Low to High</option>
                        </select>
                    </div>
                    <div>
                        <select
                            onChange={e => {
                                setSort(e.target.value);
                                setCurrentPage(1);
                            }}
                            value={sort}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort By Date</option>
                            <option value='dsc'>Newest first</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
                    {card.map(aCard => (
                        <div key={aCard.ProductId}
                            className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
                            <div className="bg-gray-100 w-20 h-20 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                                {aCard.BrandName}
                            </div>
                            <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                <img src={aCard.ProductImage} alt="Product 1"
                                    className="h-full w-full object-contain" />
                            </div>
                            <div className="p-6 bg-white">
                                <h3 className="text-lg font-bold text-gray-800">{aCard.ProductName}</h3>
                                <h4 className="text-lg text-gray-800 font-bold mt-2">${aCard.Price}</h4>
                                <h3 className="text-lg text-gray-800 font-bold ">Category: {aCard.Category}</h3>
                                <p className="text-gray-600 text-sm mt-2">{aCard.Description}</p>
                                <p className="text-gray-600 text-sm mt-2">{aCard.CreationDateTime}</p>
                                <div className="flex space-x-2 mt-4">
                                    Ratings
                                    {/* Your rating stars SVG */}
                                    {/* ... */}
                                    {aCard.Ratings}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-12 mb-3'>
                {/* Previous Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-orange-600 hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>
                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* Numbers */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-orange-600 text-white' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-orange-600 hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* Next Button */}
                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-orange-600 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Cards;







