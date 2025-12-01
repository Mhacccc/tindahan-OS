import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

import Form from '../components/Form'

export default function Home() {

    const [products,setProducts] = useState(null)
    const [loading,setLoading] = useState(true)

    const handleDelete = async (e) => {

        try{
            const response = await axios.delete(`http://localhost:4000/api/products/${e.target.value}`);
            console.log(response.data)
            setProducts((prev)=>prev.filter(p=>p._id!==e.target.value))
        }catch({response}){
            console.error(response.data)
        }


    }

    const handleEdit = async (e) => {
        try{
            
        }catch({respo}){

        }
    }

    const handleProduct = (newProduct) => {
        setProducts((prev)=>[...prev,newProduct])
    }

    useEffect(()=>{
        
       axios('http://localhost:4000/api/products/').then((response)=>{
        console.log(response.data)
        setProducts(response.data)
       }
       ).catch((err)=>console.error(err)).finally(()=>{
        setLoading(false)
       })

    },[])

    if(loading){
        return <h1>
            Loading
        </h1>
    }

    return(
        <>
            <h1>
                Home
            </h1>

            <ol>
            {products.map((e)=>{
                return (<li key={e._id}>
                    <h1>{e.name}</h1> <button value={e._id} onClick={handleEdit}> edit </button>
                    <p>{e.category}</p> <button value={e._id} onClick={handleEdit}> edit </button>
                    <p>{e.price}</p> <button value={e._id} onClick={handleEdit}> edit </button>
                    <p>{e.stock}</p> <button value={e._id} onClick={handleEdit}> edit </button>
                    <button value={e._id} onClick={handleDelete}> delete </button>
                   
                    
                </li>)
            })}
            </ol>
            <Form handleProduct={handleProduct}></Form>
        </>
    )
}