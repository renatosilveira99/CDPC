import React, {
  createContext, useCallback, useState, useContext, useEffect,
} from 'react';
import { AsyncStorage } from 'react-native';
// import { } from '../services/api';


interface AuthState {
  token: string;
  user: UserProps;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface SignUpCredentials {
  nome: string;
  email: string;
  senha: string;
  RA: string;
  foto: string;
  contato: string;
}

interface UpdateCredentials {
  nome?: string;
  email?: string;
  senha?: string;
  RA?: string;
  foto?: string;
  contato?: string;
}

interface UserProps {
  nome: string;
  email: string;
  senha: string;
  RA: string;
  foto: string;
  contato: string;
}

interface AuthContextData {
  user: UserProps;
  loading: boolean;
  setLoading(val: boolean): void;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  update(credentials: UpdateCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      setLoading(true);
      const [token, user] = await AsyncStorage.multiGet([
        '@IFPCS:token',
        '@IFPCS:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, senha }) => {
   
  }, []);

  const signUp = useCallback(async ({
    nome, email, senha,
  }) => {
    
  }, []);

  const update = useCallback(async (updateData: UpdateCredentials) => {
    
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);

    await AsyncStorage.multiRemove([
      '@IFPCS:token',
      '@IFPCS:user',
    ]);
    setData({} as AuthState);

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn,
      signOut,
      signUp,
      update,
      loading,
      setLoading,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
