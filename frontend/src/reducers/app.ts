import jwtDecode from 'jwt-decode';

interface actionType {
    type: string
    payload: any
}

interface jwtDecoded {
    data: object
}

const getToken = (tokenArg?: string) => {
    try {
        if (tokenArg) return tokenArg;
        const token = JSON.parse(localStorage.getItem('token') as string);
        if (token !== null) return token;
        localStorage.setItem('token', JSON.stringify(null));
        return null;
    } catch {
        localStorage.setItem('token', JSON.stringify(null));
        return null;
    }
}

const getUser = (tokenArg?: string) => {
    try {
        const token = tokenArg || getToken();
        return (jwtDecode(token) as jwtDecoded).data as object;
    } catch {
        return null;
    }
}

const initialState = (token?: string) => {
    return {
        token: getToken(token),
        ...getUser(token)
    }
}

//eslint-disable-next-line
export default (state = initialState(), action: actionType) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload }
        default:
            return state;
    }
}