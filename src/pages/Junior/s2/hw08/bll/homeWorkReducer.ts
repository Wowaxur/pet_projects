import { UserType } from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            // Create a new array for sorting to avoid mutating the original state
            const newState = [...state].sort((a, b) => {
                if (a.name < b.name) {
                    return action.payload === 'up' ? -1 : 1;
                }
                if (a.name > b.name) {
                    return action.payload === 'up' ? 1 : -1;
                }
                return 0;
            });
            return newState;
        }
        case 'check': {
            // Filter users who are older than the given age
            return state.filter(user => user.age >= action.payload);
        }
        default:
            return state;
    }
};