import axios from 'axios'

export const getAllTickets = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                'http://localhost:3001/v1/ticket',
                {headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlcjEiLCJpYXQiOjE2NTIyOTY4NDgsImV4cCI6MTY1MjI5ODA0OH0.Tf4wDUzioxzY203U1_LIvdo86bvVGAuQGpb-Rc5lynA'
            
                }}
            )
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
