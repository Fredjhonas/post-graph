import { User } from '@/api/types';

export const formatUsers = (users: User[]) => {
  return users.map((user: User) => {
    return {
      id: user.id,
      nombre: user.name,
      username: user.username,
      email: user.email,
      teléfono: user.phone,
      website: user.website,
      empresa: user.company.name,
      dirección: user.address.street,
      ciudad: user.address.city,
      código_postal: user.address.zipcode,
    };
  });
};
