import {
    SHOW_WAITING,
    HIDE_WAITING
} from './constants';

export const showModal = () => ({
    type: SHOW_WAITING,
});

export const hideModal = () => ({
    type: HIDE_WAITING,
});

