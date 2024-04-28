"use client"
import { useState } from 'react';
import { SokHeader } from "../SokHeader"
import { UrlPath } from "../UrlPath"
import { SearchResults } from "../SearchResults"
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
            <SokHeader onSearch={handleSearch} />
            <UrlPath />
            <main className="flex-1">
                <SearchResults searchResultsStore={searchResultsStore}
                    searchResultsPost={searchResultsPost}
                    searchQuery={searchQuery} />
            </main>
        </div>
    )
}