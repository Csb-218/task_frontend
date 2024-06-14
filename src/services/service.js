import axios from "axios"

export async function getTasks(credential){
    console.log(process.env.REACT_APP_SERVER_BASE_URL,credential)
 
    const options = {
        method:'GET',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:'/task',
        headers: {
            Authorization: `Bearer ${credential}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function updateTask(id,update,credential){

    const options = {
        method:'PATCH',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/update/${id}`,
        data:update,
        headers: {
            Authorization: `Bearer ${credential}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function markComplete(idList,credential){

    const options = {
        method:'PATCH',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/complete`,
        data:idList,
        headers: {
            Authorization: `Bearer ${credential}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function deleteTasks(idList,credential){

    const options = {
        method:'DELETE',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/remove`,
        data:idList,
        headers: {
            Authorization: `Bearer ${credential}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function addTask(task,credential){

    const options = {
        method:'POST',
        baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
        url:`/task/add`,
        data:task,
        headers: {
            Authorization: `Bearer ${credential}`
         }
    }

    const res = await axios.request(options)
    return res
}

export async function sendTokenToServer(deviceToken,credential){
    console.log(deviceToken)
    const options = {
      method:'POST',
      baseURL:`${process.env.REACT_APP_SERVER_BASE_URL}`,
      url:`/token`,
      data:{
        token:deviceToken
      },
      headers: {
          Authorization: `Bearer ${credential}`
       }
    }

      const response = await axios.request(options)
      console.log(response)
      return response
}