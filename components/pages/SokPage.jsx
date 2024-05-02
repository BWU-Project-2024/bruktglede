"use client";
import { useState } from 'react';
import { SokHeader } from "../Headers/SokHeader"
import { UrlPath } from "../Navbar/UrlPath"
import { SearchResults } from "../Search/SearchResults"
import { searchTags } from '@/lib/supabase/actionsCMSForms';

export const SokPage = () => {
    const [searchResultsStore, setSearchResultsStore] = useState([]);
    const [searchResultsPost, setSearchResultsPost] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async (query) => {
        setSearchQuery(query); // Update search query state
        if (query.trim() !== '') {
            const { storeData, postData } = await searchTags(query);
            setSearchResultsStore(storeData);
            setSearchResultsPost(postData);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <UrlPath />
            <SokHeader onSearch={handleSearch} />
            <main className="flex-1 px-6 md:px-28 lg:px-64 font-opensans">
                <SearchResults
                    searchResultsStore={searchResultsStore}
                    searchResultsPost={searchResultsPost}
                    searchQuery={searchQuery} />
            </main>
        </div>
    )
}