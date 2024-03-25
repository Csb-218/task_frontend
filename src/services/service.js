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

export async function updateTask(id,update){

    const options = {
        method:'PATCH',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/update/${id}`,
        data:update,
        headers: {
            Authorization: `Bearer ${token}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function markComplete(idList){

    const options = {
        method:'PATCH',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/complete`,
        data:idList,
        headers: {
            Authorization: `Bearer ${token}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function deleteTasks(idList){

    const options = {
        method:'DELETE',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/remove`,
        data:idList,
        headers: {
            Authorization: `Bearer ${token}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function addTask(task){

    const options = {
        method:'POST',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/add`,
        data:task,
        headers: {
            Authorization: `Bearer ${token}`
         }
    }

    const res = await axios.request(options)
    return res
}




export async function sendTokenToServer(deviceToken){

    const options = {
      method:'POST',
      baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
      url:'/token',
      data:{
        token:deviceToken
      },
      headers: {
          Authorization: `Bearer ${token}`
       }
    }

      const response = await axios.request(options)
      return response
  }