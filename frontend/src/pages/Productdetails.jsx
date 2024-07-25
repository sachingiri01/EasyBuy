import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const _id=useParams();
    console.log(_id);
  return (
    <div className='text-white'>
      product details
    </div>
  )
}

export default Productdetails
