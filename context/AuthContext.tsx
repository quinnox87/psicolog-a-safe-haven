import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the user object
interface User {
    id: string;
    email: string;
    name: string;
}

// Define the auth context type
interface AuthContextType {
    user: User | null;
    login: () => void;
    logout: () => void;
    isLoading: boolean;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Mock Login Function (To be replaced with Supabase Google Auth)
    const login = () => {
        setIsLoading(true);
        setTimeout(() => {
            setUser({
                id: 'mock-user-123',
                email: 'alumno@ejemplo.com',
                name: 'Carlos Ruiz',
            });
            setIsLoading(false);
        }, 1000);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to use the Auth Context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
