import {
    ADD_USER,
    ADD_USERS,
    SET_USERS,
    ENABLE_DISABLE_USER,
    SET_SEARCH
} from '../actions/UserActions'

const initialState = {
    search: '',
    users: [
        {
            id: '1',
            name: 'Nicole Pearson',
            active: true,
            prof: 'Web Designer / UI',
            hobbies: ['Read', 'out with friends', 'listen to music'],
            skills: ['html5', 'css3', 'react']
        }
    ]
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: state.users.concat(action.user)};
        case ADD_USERS:
            return {...state, users: state.users.concat(action.users)};
        case SET_USERS:
            return {...state, users: action.users};
        case ENABLE_DISABLE_USER:
            setActiveToUser(state.users, action.userId, action.value);
            return {...state, users: [...state.users]};
        case SET_SEARCH:
            return {...state, search: action.search};
        default:
            return state;
    }
}
const setActiveToUser = (users, userId, value) => {
    const user = users.find(user => user.id === userId);
    if (user) {
        user.active = value;
    }
};