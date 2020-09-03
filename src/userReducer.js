export default (state, action) => {
    const { type, payload} = action
    switch(type) {
        case 'ADD_USER' :
            return [
                payload, ...state
            ]
        default:
            return state
    }
}