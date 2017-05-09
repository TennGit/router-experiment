/**
 * Created by hengl on 09/05/2017.
 */


const initialState = {
    hasError: false,
    loading: false,
    title: ''
};

const responseValue = (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_USERS_PENDING':
            return {
                hasError: false,
                loading: true,
                title: 'no'
            }
        case 'FETCH_USERS_FULFILLED':
            console.log('fulfilled:', action.payload)
            return {
                hasError: false,
                loading: false,
                title: action.payload.data.title
            }
        case 'FETCH_USERS_REJECTED':
            return {
                hasError: true,
                loading: false,
                title:''
            }
        default: return state
    }
}

export default responseValue