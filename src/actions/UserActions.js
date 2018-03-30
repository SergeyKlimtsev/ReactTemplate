import axios from 'axios';

export const ADD_USER = 'ADD_USER';
export const ADD_USERS = 'ADD_USERS';
export const SET_USERS = 'SET_USERS';
export const ENABLE_DISABLE_USER = 'ENABLE_DISABLE_USER';
export const SET_SEARCH = 'SET_SEARCH';

export const addUser = user => ({type: ADD_USER, user});
export const addUsers = users => ({type: ADD_USERS, users});
export const setUsers = users => ({type: SET_USERS, users});
export const enableDisableUser = (userId, value) => ({type: ENABLE_DISABLE_USER, userId, value});
export const setSearch = search => ({type: SET_SEARCH, search});


export const fetchUsers = () => dispatch => axios
    .get('/data/')
    .then(({data}) => dispatch(setUsers(data)));

