import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth.store';
import MainScreen from '@/app/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import authService from '@/services/AuthService';
import AuthNavigator from '@/navigator/AuthNavigator';

const queryClient = new QueryClient();

function InitAuth() {
  const accessToken = useAuthStore(s => s.accessToken);
  const setUser = useAuthStore(s => s.setUser);

  const { data, isLoading } = useQuery({
    queryKey: ['info'],
    queryFn: authService.getInfo,
    enabled: !!accessToken,
    onSuccess: user => setUser(user),
    onError: () => {
      useAuthStore.getState().resetAuth();
    },
  });

  if (isLoading) return null;

  return useAuthStore.getState().isAuthenticated ? <MainScreen /> : <AuthNavigator />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <InitAuth />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
