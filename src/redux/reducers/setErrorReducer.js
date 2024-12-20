import { SET_ERROR } from '../actions/types';

const initialState = {
	error: '',
};

export const setErrorReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return { ...state };
	}
};

export default setErrorReducer;
