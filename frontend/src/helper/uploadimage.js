
<<<<<<< HEAD
// import { url } from "../cloud";
const url=process.env.URL
=======
import { url } from "../cloud";

// const url=process.env.URL
// console.log(url);

>>>>>>> 7a7dfce (Bug Fixed)
const uploadimage=async(image)=>{
    const formdata=new FormData();
    formdata.append('file',image);
    formdata.append("upload_preset","EasyBuy");
    const data=await fetch(url,{ 
        method:"post",
        body:formdata
    })
    return data.json();
}
export default uploadimage
