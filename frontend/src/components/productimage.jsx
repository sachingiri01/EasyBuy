import React from 'react'

const productimage = ({onclose,url}) => {
  return (
    <div className="fixed inset-0 top-0  h-full w-full flex items-center justify-center p-5" onClick={()=>onclose()}>
      <div className=" relative p-2  flex items-center justify-center  top-0 max-w-full max-h-full" onClick={()=>onclose()}>
        <img src={url} alt="" className=" w-[50%] object-contain rounded-xl" onClick={()=>onclose()}/>
      </div>
    </div>
  )
}

export default productimage
