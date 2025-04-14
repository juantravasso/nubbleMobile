import {useMutation} from '@tanstack/react-query';
import {useAuthCredentials} from '@services';
 import {authService} from '../authService';
 
 export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentials();
   const mutation = useMutation<string, unknown, void>({
     mutationFn: authService.signOut,
     retry: false,
    onSuccess: removeCredentials,
   });
 
   return {
     isLoading: mutation.isLoading,
     signOut: () => mutation.mutate(),
   };
 }