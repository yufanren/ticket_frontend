import axios from 'axios'


const rootUrl = ' http://localhost:3001/v1/'
const getSingleTicketUrl = rootUrl + 'ticket/'
const closeTicketUrl = rootUrl + 'ticket/close-ticket/'

export const getAllTickets = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                getSingleTicketUrl,
                {headers: {
                    Authorization: sessionStorage.getItem('accessJWT')
            
                }}
            )
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}


export const getSingleTicket = (_id) => {

    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                getSingleTicketUrl + _id,
                {headers: {
                    Authorization: sessionStorage.getItem('accessJWT')
                }}
            )
            resolve(result)
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}


export const updateReplyTicket = (_id, msgObj) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.put(getSingleTicketUrl + _id, msgObj, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
  
        resolve(result.data);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
};

export const updateTicketStatusClosed = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.patch(closeTicketUrl + _id, {}, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
  
        resolve(result.data);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  };