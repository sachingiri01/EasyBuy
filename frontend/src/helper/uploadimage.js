
import { url } from "../cloud";
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