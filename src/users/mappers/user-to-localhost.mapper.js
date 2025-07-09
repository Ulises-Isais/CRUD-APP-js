import { User } from "../models/user";

/**
 *
 * @param {User} user
 */
export const userModelToLocalHost = (user) => {
  const { avatar, balance, firstName, gender, lastName, id, isActive } = user;

  return {
    avatar,
    balance,
    first_name: firstName,
    gender,
    last_name: lastName,
    id,
    isActive,
  };
};
