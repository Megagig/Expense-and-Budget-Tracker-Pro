'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface UserContextType {
  user: any;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <SessionProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </SessionProvider>
  );
};

const UserContextProvider = ({ children }: UserProviderProps) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const isLoading = status === 'loading';

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    } else {
      setUser(null);
    }
  }, [session]);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
