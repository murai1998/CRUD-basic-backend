import axios from 'axios';
let baseURL = ""
process.env.NODE_ENV === "production"
  ? (baseURL = "http://localhost:5000")
  : (baseURL = "http://localhost:5000");


const service = axios.create({baseURL})
const actions = {
    getAllPlans: async() =>{
        return await service.get("/api/plans")
    
    },

   getPlan: async (id) => {
    return await service.get(`/api/plans/${id}`);
  },
  
  createPlan: async(data)  => {
    return await service.post("/api/plans", data);
  },
  
   updatePlan: async(id, data) => {
    return await service.put(`/api/plans/${id}`, data);
  },
  
  removePlan: async (id) => {
    return await service.delete(`/api/plans/${id}`);
  },
  
  removeAllPlans: async () => {
    return await service.delete(`/api/plans`);
  },
  
  findByTitlePlans: async (title) => {
    return await service.get(`/api/plans?title=${title}`);
  },
//================GOALS====================
getAllGoals: async() =>{
  return await service.get("/api/goals")

},

getGoal: async (id) => {
return await service.get(`/api/goals/${id}`);
},

createGoal: async(data)  => {
return await service.post("/api/Goals", data);
},

updateGoal: async(id, data) => {
return await service.put(`/api/goals/${id}`, data);
},

removeGoal: async (id) => {
return await service.delete(`/api/plans/${id}`);
},

removeAllPlans: async () => {
return await service.delete(`/api/plans`);
},

findByTitlePlans: async (title) => {
return await service.get(`/api/plans?title=${title}`);
}
}

export default actions;