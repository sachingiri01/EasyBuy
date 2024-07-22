
const backend_domain='http://localhost:3000/api'
const fetch_api={
      signup:{
        url:`${backend_domain}/signup`,
        method:"post"
      },
      login:{
        url:`${backend_domain}/login`,
        method:"post"
      },
      user_detail:{
        url:`${backend_domain}/userdetail`,
        method:'get'
      },
      logut:{
        url:`${backend_domain}/logout`,
        method:'get'

      },
      all_user:{
        url:`${backend_domain}/alluser`,
        method:'get'
      },
      update_user:{
        url:`${backend_domain}/updateuser`,
        method:"post"
      }
}
export default fetch_api;