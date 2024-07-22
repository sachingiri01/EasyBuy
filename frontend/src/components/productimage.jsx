import React from 'react'

const productimage = ({url,onclose}) => {
    console.log(url)
  return (
    <div className="fixed inset-0 flex items-center justify-center p-5" onClick={onclose}>
      <div className=" relative p-2 max-w-full max-h-full">
        <img src={url} alt="" className=" object-contain rounded-xl max-w-[80%] max-h-[70%]" />
      </div>
    </div>
  )
}

export default productimage
