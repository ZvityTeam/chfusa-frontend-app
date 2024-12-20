// context/DataContext.js
import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({ clientSecret: null ,paymentData:null,accessToken:null});

    useEffect(() => {
        const clientSecretData = sessionStorage.getItem("clientSecret")
        const accessToken = sessionStorage.getItem("accessToken")
        if (clientSecretData) {
            setData(v => ({ ...v, clientSecret: clientSecretData }))
        } 
        if (accessToken) {
            setData(v => ({ ...v, accessToken }))
        }

    }, [])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};
