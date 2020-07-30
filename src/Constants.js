const dev = {
    url: {
        API_URL: "http://127.0.0.1:5000/api",
        API_URL_USERS: "http://127.0.0.1:5000/api/users"
    }
}

const prod = {
    url: {
        API_URL: "https://192.168.220.37:8000/api"
    }
}

export const config = (process.env.NODE_ENV === 'development') ? dev: prod;