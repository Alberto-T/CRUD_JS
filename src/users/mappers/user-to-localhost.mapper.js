import { User } from '../models/user';


/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = ( user ) => {

    const {
        avatar,
        balancee,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    return {
        avatar,
        balancee,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }

}
