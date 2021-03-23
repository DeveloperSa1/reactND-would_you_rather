export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receivedUsers (users) {
    return {
        type : RECEIVE_USERS,
        users
    }
}