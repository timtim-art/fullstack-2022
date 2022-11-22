import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newPerson => {
  return axios.post(baseUrl, newPerson)
}

const update = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
    return getAll()
}

const changeNumber = (id, newPersonObject) => {
    return axios.put(`${baseUrl}/${id}`, newPersonObject)
}



export default { getAll, create, update, changeNumber }