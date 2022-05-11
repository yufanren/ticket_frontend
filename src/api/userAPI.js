import axios from "axios"

const rootURL = 'http://localhost:3001/v1/'
const loginURL = rootURL + 'user/login'
const userProfileURL = rootURL + 'user'
const logoutURL = rootURL + 'user/logout'
export const userLogin = formData => {
    return new Promise(async(resolve, reject) => {

        try {
            const res = await axios.post(loginURL, formData)
            
            console.log(res)
            resolve(res.data)

            if (res.data.status === 'success') {
                sessionStorage.setItem('accessJWT', res.data.accessJWT)
                localStorage.setItem('crmSite', JSON.stringify({refreshJWT: res.data.refreshJWT}))
            }

        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}

export const fetchUser = () => {
    return new Promise(async(resolve, reject) => {

        try {
            const accessJWT = sessionStorage.getItem('accessJWT')

            if (!accessJWT) {
                reject("Token not found")
            }
            const res = await axios.get(userProfileURL, {
                headers: {
                    Authorization: accessJWT
                }
            })
            resolve(res.data)

            // if (res.data.status === 'success') {
            //     sessionStorage.setItem('accessJWT', res.data.accessJWT)
            //     localStorage.setItem('crmSite', JSON.stringify({refreshJWT: res.data.refreshJWT}))
            // }

        } catch (error) {
            console.log(error.message)
            reject(error.message)
        }
    })
}

export const userLogout = async () => {
    try {
        await axios.delete(logoutURL, {
            headers: {
                Authorization: sessionStorage.getItem('accessJWT')
            }          
        })
    } catch (error) {
        console.log(error)
    }
}