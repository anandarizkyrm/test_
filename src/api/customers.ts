import axios from "axios";
import { getCookie, setCookie } from 'cookies-next';

const CostumerAPI = {
  all: async(token : any) => {
      try{
          const data = await fetch(`https://mitramas-test.herokuapp.com/customers?`, {
          headers: {
              'Content-Type': 'application/json',
              Authorization: token
            }
          })
          
          const res = await data.json()

          return res
      }catch(error : any){
       

        
        return  JSON.parse(JSON.stringify(error))
      }

  },
  login: async(account : any) => {
       await axios.post(`https://mitramas-test.herokuapp.com/auth/login`, account ).then( (res : any )=>{
          setCookie('token', res.data.access_token , { maxAge: res.data.expires_in })
          return res
     }).catch((err : any)=>{
           window.alert(err.message)
          return err
      })
  

},
update: async (data : any, router : any) => {
    const token : any=  getCookie('token');
   await axios.put(`https://mitramas-test.herokuapp.com/customers`,data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization : token,
        },
      }
    ).then((res)=> {  
      
      window.alert("success")
      router.reload()
    return res
    }).catch((err : any) =>{
      window.alert(err)
      return err
    });

   
  },

  create: async (data : any, router : any) => {
    const token : any=  getCookie('token');
   await axios.post(`https://mitramas-test.herokuapp.com/customers`,data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization : token,
        },
      }
    ).then((res)=> {  
      
      window.alert("success")
      router.reload()
    return res
    }).catch((err : any) =>{
      window.alert(err)
      return err
    });

   
  },

 delete: async (id : any, router : any) => {
   const token : any=  getCookie('token');
  
   await axios.delete(`https://mitramas-test.herokuapp.com/customers`,{data : {id : id} , 
        headers: {
          Authorization : token,
        },
      }
    ).then((res)=> {  
      window.alert("success delete data")
      router.reload()
    return res
    }).catch((err : any) =>{
      window.alert(err)
      return err
    });

   
  },
};

export default CostumerAPI;