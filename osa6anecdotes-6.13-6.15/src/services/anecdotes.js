import axios from "axios"

const url = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(url)
  console.log(response.data)
  return response.data
}

const createNew = async (content) => {
  console.log(content)
  const response = await axios.post(url, content)
  return response.data
}

const update = async(id, newObject) => {
  const response = await axios.put(`${url}/${id}`, newObject)
  return response.data
}

export default {getAll, createNew, update}