import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './types';

export const getProducts  = () => {
    return {
        type: GET_ITEMS
    };
};