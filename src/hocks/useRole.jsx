import { useContext } from 'react';
import useAxiosSecure from '../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const useRole = () => {
      const { user } = useContext(AuthContext)
      const axiosSecure = useAxiosSecure()

      const { data: role, isPending, refetch } = useQuery({
            queryKey: ['role', user?.email],
            queryFn: async () => {
                  const { data } = await axiosSecure.get(`/users/${user?.email}`);
                  console.log('data', data)
                  return data.role;
            }
      })

      return [role, isPending, refetch]
};

export default useRole;