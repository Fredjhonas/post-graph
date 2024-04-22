'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { User } from '../api/types';
import { fetchUsers } from '@/api/resquests/user';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { data, refetch, isLoading, isFetching, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return { users, setUsers, refetch, isLoading, isFetching, isError };
};
