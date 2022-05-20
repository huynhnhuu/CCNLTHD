import axios from 'axios'
import cookies from 'react-cookies'

export const endpoints = {
    "categories": "/categories/",
    "routes": "/routes/",
    "buses": (busesId) => `/route/${routeId}/buses/`,
    "login": "/o/token/",
    "current-user": "/users/current-user/",
    "like-buses": (busesId) => `/buses/${busesId}/like/`,
    "buses-comments": (busesId) => `/buses/${busesId}/comments/`,
    "comments": "/comments/",
    "buses-rating": (busesId) => `/buses/${busesId}/rating`
}

export const authApi = () => {
    return axios.create({
        baseURL: "https://thanhduong.pythonanywhere.com",
        headers: {
            'Authorization': `Bearer ${cookies.load('token')}`
        }
    })
}

export default axios.create({
    baseURL: "https://thanhduong.pythonanywhere.com"
})