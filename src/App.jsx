import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './Category'
import axios from 'axios'

function App() {

  let[finalCategory,setFinalCategory]=useState([])
  let[finalProduct,setFinalProduct]=useState([])
  let[catName,setCatName]=useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalCategory(finalRes);
      
    })
  }
  
  let getProduct=() =>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalProduct(finalRes.products);
    })
  }
  useEffect(()=>{
    
    getCategory();
    getProduct();
    
  },[])

  useEffect(()=>{
    if(catName !==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes)=>proRes.data)
      .then((finalRes)=>{
        setFinalProduct(finalRes.products);
      })
    }
  },[catName])

  let product=finalProduct.map((product,index)=>{
    return(
      <ProductItem key={index} pdata={product}/>
    )
})
  return(
    <>
  <div className='p-[10px] bg-slate-100'>
    <h1 className='font-bold text-[40px]'>Ecommerce</h1>
    <div className='max-w[1320px] mx-auto'>
      <h1 className='text-center text-[30px] font-bold mb-[20px]'>Oue Products</h1>
        <div className='grid grid-cols-[20%_auto] gap-[20px]'>
          <div>
            <Category finalCategory={finalCategory} setCatName={setCatName}/>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-5'>
              {
              finalProduct.length>=1 ?
              product
              :
              'loading'}
            </div>
              
             
            </div>
          </div>
        </div>
    </div>
  
    </>
  )
}

export default App

function ProductItem ({pdata}){
  console.log(pdata)
  return(
    <div className='shadow-lg text-center pb-4'>
    <img src={pdata.thumbnail} alt="not avalible product" className='w-[100%]h-[220]' />
    <h4>{pdata.title}</h4>
    <b>Rs {pdata.price}</b>
    </div>
  )
}


