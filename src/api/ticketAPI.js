import axios from 'axios'

export const getAllTickets = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                'http://localhost:3001/v1/ticket',
                {headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlcjEiLCJpYXQiOjE2NTIyMzQzODAsImV4cCI6MTY1MjIzNTU4MH0.YgwbHzq6SVpjK6xVWeVs5f2GiqnHwJvVsA3VjA_Jw1I'
            
                }}
            )
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
