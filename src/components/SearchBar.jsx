import React, { useState } from 'react';
import Swal from "sweetalert2";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query) {
            return; // Do nothing if the input field is empty
        }
        const result = await onSearch(query);
        if (result) {
            Swal.fire({
                title: 'Error!',
                text: 'Location not found. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            setQuery('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex justify-center items-center mb-12">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter location..."
                className="px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
            />
            <button type="submit" className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ">Search</button>
        </form>
    );
};

export default SearchBar;
