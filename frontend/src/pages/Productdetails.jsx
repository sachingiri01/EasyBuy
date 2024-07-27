import React from "react";
import { useParams } from "react-router-dom";
import fetch_api from "../fetch/fetch";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import star from "../assets/star.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import demo from "../assets/boAt Airdopes 111 2.webp";
import HomeProductcard from "../components/HomeProductcard";
import Simpleproductcard from "../components/SimpleProductcard";
const Productdetails = () => {
  const [product, setproduct] = useState([]);
  const [zooming, setzooming] = useState(false)
  const [picture, setpicture] = useState([]);
  const [new_url, setnew_url] = useState('')
  const [allcatproduct, setallcatproduct] = useState([])
  const [loading, setloading] = useState(true);
  const [zoomimage, setzoomimage] = useState({
    x:0 ,
    y:0
  })
  const nevigate = useNavigate();
  const data = useParams();
  const fetch_product = async () => {
    const res = await fetch(fetch_api.productdetail.url, {
      method: fetch_api.productdetail.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({_id:data._id}),
    });
    const response = await res.json();
    if (response.Success) {
      setproduct(response.product);
      setnew_url(response.product.productimage[0])
      setloading(false);
    } else {
      toast.error(response.message);
      nevigate("/");
    }
  };
  const fetch_category_product=async()=>{
    const res=await fetch(fetch_api.getallcatproduct.url,{
      method:fetch_api.getallcatproduct.method,
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({category:data.category})

    })
    const response=await res.json();
    setallcatproduct(response.product)
   
    
  }
  const handlezoom=(e)=>{
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setzoomimage({x,y})
  }
  useEffect(() => {
    fetch_product();
      fetch_category_product();    
  }, [data])
  const handle_product_click=(_id)=>{
    nevigate(`/${data.category}/${_id}`)
  }
  const addtocart=async()=>{
        const productid=data._id;
        const quantity=1;
        const res=await fetch(fetch_api.addtocart.url,{
          method:fetch_api.addtocart.method,
          headers:{
            'Content-Type':'application/json',
          },
          credentials:"include",
          body:JSON.stringify({productid:productid,quantity:quantity})
         })
        const response=await res.json();
        if(response.Success){
          toast.success(response.message);
        }else{
          toast.error(response.message);

        }
    
  }
  const removefromcart=()=>{
    const productid=data._id;
    
  }
  return (
    <div className="text-white py-4 mb-4 bg-gray-800 w-full min-h-[80vh] max-[600px]:px-2 px-10">
      { loading ? (
        <p>Data Loading</p>
      ) : <>
        <div className="flex gap-4 w-full bg-gray-700 rounded-lg p-2 ">
          <div className="flex flex-col w-24  overflow-y-scroll scroll-none  bg-slate-600 min-[600px]:h-[400px]  px-1 rounded-lg py-2 gap-3">
           {
           
            product.productimage.map((url)=>{
              return(
                <img
                onClick={()=>setnew_url(url)}
                src={url}
                className="bg-white w-20  max-h-20 hover:cursor-pointer hover:scale-105 transition duration-150 hover:ring-1 object-scale-down rounded-lg"
                alt=""
              />
            //   <img
            //   onClick={()=>setnew_url(url)}
            //   src={url}
            //   className="bg-white w-20 hover:cursor-pointer hover:scale-105 transition duration-150 hover:ring-1 object-scale-down rounded-lg"
            //   alt=""
            // />
              )
            })
           }
            
           
          </div>
          <div className="flex max-[900px]:flex-col gap-3 w-11/12 text-wrap">
            <div className="w-4/12 relative max-[900px]:w-full flex items-center bg-slate-600 rounded-lg ">
              <img
               onMouseMove={handlezoom}
               onMouseEnter={()=>setzooming(true)}
               onMouseLeave={()=>setzooming(false)}
                src={new_url}
                className="w-full hover:cursor-pointer min-[600px] h-96 object-scale-down bg-white rounded-lg"
                alt=""
              />

             {
              zooming && (
                <div className="absolute hidden lg:block min-w-[450px] bg-white rounded-md p-1 -right-[480px] min-h-[450px] z-10">
                <div
                className="min-h-[450px] min-w-[450px] mix-blend-multiply bg-white scale-110 rounded-lg"
                style={{backgroundImage:`url(${new_url})`,backgroundPosition:`${zoomimage.x*100}% ${zoomimage.y*100}%`}}

                >

                </div>
              </div>
              )
             }
            </div>
            <div className="w-8/12 max-[900px]:w-full py-3">
              <span className="bg-red-500 rounded-lg text-red-200 p-1 space-y-2">
                {product.brandename}
              </span>
              <h1 className="line-clamp-2 text-3xl max-[700px]:text-xl space-y-2 my-1">
                {product.productname} 
              </h1>
              <p className="mb-2">{product.category}</p>
              <div className="flex text-red-500 h-8 items-center gap-2 mb-1">
               
                <FaStar className=""/>
                <FaStar className=""/>
                <FaStar className=""/>
                <FaStar className=""/>
                <FaStarHalf />
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-red-400 text-2xl">-{((product.price-product.selling)*100/product.price).toPrecision(4)}%</span>
                <span className="text-xl">₹{product.selling}</span>
              </div>
              <p className="mb-2">
                MRP : <span className="line-through">₹{product.price}</span>
              </p>
              <div className="flex gap-3 mb-2">
                <button className="border-red-400 bg-white font-semibold px-2 p-1 rounded-md text-red-500 duration-150 transition-transform hover:scale-105">
                  Buy Now
                </button>
                <button onClick={addtocart} className=" bg-red-500 text-white font-semibold px-2 p-1 rounded-md hover:scale-105 duration-150 transition-transform">
                  Add To Cart
                </button>
              </div>
              <div>
                <h1 className="text-gray-300">Product Details :</h1>
                <p className="line-clamp-3  mt-[-3px]">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="pt-4 ">
          <p className="text-xl font-semibold">Recommended Product </p>
          <div className="py-4 px-2 flex flex-wrap gap-5">
            {
              // console.log(allcatproduct)
            allcatproduct.map((item) => (
                    <Simpleproductcard clickme={()=>handle_product_click(item._id)} item={item} />
            ))
            }
          </div>
        </div>
      </>
      }
    
    </div>
  );
};

export default Productdetails;
