export const ALL_MESSAGES = 'ALL_MESSAGES'

export function allMessages (payload) {
    return {
        type: ALL_MESSAGES,
        payload
    }
}
