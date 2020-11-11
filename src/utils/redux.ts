
export function createAction<T>(type: T): () => ({ type: T }) {
    return () => ({ type })
}


export function createActionWithPayload<T, P>(type: T): (payload: P) => ({ type: T, payload: P }) {
    return (payload) => ({ type, payload })
}

