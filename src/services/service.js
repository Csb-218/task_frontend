import axios from "axios"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY3NiIiwiZW1haWwiOiJjc2JoYWd3YW50QGdtYWlsLmNvbSIsImlhdCI6MTcxMDkzOTIzNn0.Gcmyplx5VWxjwjeWECPXJ-EJDTv995TbP92JseJBhFI'

export async function getTasks(){
    console.log(process.env.REACT_APP_SERVER_BASE_URL)

    const options = {
        method:'GET',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:'/task',
        headers: {
            Authorization: `Bearer ${token}`
         }
    }

    const res = await axios.request(options)
    return res
}