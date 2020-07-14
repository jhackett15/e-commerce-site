import { UserActionTypes} from './user-types'

const INITIAL_STATE ={
	currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) =>{  //ES6 state = initial state is a default param
	switch (action.type){
		case UserActionTypes.SET_CURRENT_USER:
		return{
			...state,
			currentUser:action.payload
		}

		default:
		return state; // if none action types match inside switch statement. we want to return the default state
	}

}

export default userReducer;