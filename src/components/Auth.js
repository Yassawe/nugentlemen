import React, {useEffect, useState} from 'react';
import instance from './secret';

export const AuthContext = React.createContext();

export const AuthProvider = ( { children } ) => {
    const [currentUser, setCurrentUser] = useState('');

    useEffect( () => {
        instance.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );

}