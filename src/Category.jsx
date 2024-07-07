import React from 'react'

function Category({finalCategory,setCatName}) {

    let cat=finalCategory.map((v,i)=>{
        return(
            <li onClick={()=>setCatName(v)} key={i} className='bg-slate-200 p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2 rounded-sm'>{v}</li>
        )
    })
  return (
    <>
    <h3 className='text-[25px] font-[500] p-[10px]'>Category</h3>
    <ul>
       {cat}
    </ul>
    </>
  )
}

export default Category