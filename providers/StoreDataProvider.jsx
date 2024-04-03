"use client"
import { createContext, useState, useEffect } from 'react';
import { readUserSession } from '@/lib/supabase/actions';

const StoreDataContext = createContext();

export const StoreDataProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch articles and events from Supabase when the component mounts
        const fetchSupabaseData = async () => {

        };

        fetchSupabaseData();
    }, []);

    return (
        <StoreDataContext.Provider value={{ articles, events }}>
            {children}
        </StoreDataContext.Provider>
    );
};
