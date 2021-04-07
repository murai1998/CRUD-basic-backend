import axios from 'axios';
process.env.NODE_ENV === "production"
  ? (baseURL = "")
  : (baseURL = "http://localhost:5000");

console.log(process.env, baseURL);
const service = axios.create({baseURL})
const actions = {
    getAll: async() =>{
        return await service.get('"/tutorials"')
    
    },

   get: async (id) => {
    return await service.get(`/tutorials/${id}`);
  },
  
  create: async(data)  => {
    return await service.post("/tutorials", data);
  },
  
   update: async(id, data) => {
    return await service.put(`/tutorials/${id}`, data);
  },
  
  remove: async (id) => {
    return await service.delete(`/tutorials/${id}`);
  },
  
  removeAll: async () => {
    return await service.delete(`/tutorials`);
  },
  
  findByTitle: async (title) => {
    return await service.get(`/tutorials?title=${title}`);
  }
}

export default actions;