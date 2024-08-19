import { createContext, type PropsWithChildren, useContext } from 'react';
import { useStorageState } from '@/hooks/useStorageState';
import api from '@/api/api';

const AuthContext = createContext<{
  signIn: ({ email, password }: Record<string, string>) => Promise<void>;
  signUp: ({
    firstName,
    lastName,
    username,
    email,
    password
  }: Record<string, string>) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => null,
  session: null,
  isLoading: false
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({
          email,
          password
        }: Record<string, string>): Promise<void> => {
          await api
            .post('/auth/login', { email, password })
            .then(async (res) => {
              setSession(res.data.token);
              // const profile = await api.get('/profile', {
              //   headers: {
              //     Authorization: `Bearer ${res.data.token}`
              //   }
              // });
              // await SecureStore.setItemAsync(
              //   'userID',
              //   (profile.data as Account).id.toString()
              // );
              // await SecureStore.setItemAsync(
              //   'role',
              //   (profile.data as Account).role
              // );
            });
        },
        signUp: async ({
          firstName,
          lastName,
          username,
          email,
          password
        }: Record<string, string>): Promise<void> => {
          await api.post('/auth/register', {
            firstName,
            lastName,
            username,
            email,
            password
          });
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
