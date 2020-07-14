import { UserActionTypes} from './user-types'

//functions that return objects

export const setCurrentUser = user => ({
	type:UserActionTypes.SET_CURRENT_USER, //use capital and _ to use as strings
	payload: user
})