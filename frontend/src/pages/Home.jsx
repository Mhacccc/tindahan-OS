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

    const handleEdit = async (id,fields) => {

        const input = {
            [fields]: prompt("Enter")
        }

        try{
            const response = await axios.patch(`http://localhost:4000/api/products/${id}`,input)
            console.log(response.data)
            setProducts((prev)=>prev.map(product=>{
                if(product._id===id){
                    return {...product, ...input} 
                }
                return product
            }))
        
        }catch({response}){
            console.error(response.data)
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
       ).catch((err)=>console.error(err.response.data)).finally(()=>{
        setLoading(false)
       })

    },[])

    if(loading){
        return <h1>
            Loading...
        </h1>
    }

    return(
        <>
            <h1>
                Home
            </h1>

            <ol>
            {products&&products.map((e)=>{
                return (<li key={e._id}>
                    <h1>{e.name}</h1> <button onClick={()=>handleEdit(e._id,"name")}> edit </button>
                    <p>{e.category}</p> <button onClick={()=>handleEdit(e._id,"category")}> edit </button>
                    <p>{e.price}</p> <button onClick={()=>handleEdit(e._id,"price")}> edit </button>
                    <p>{e.stock}</p> <button onClick={()=>handleEdit(e._id,"stock")}> edit </button>
                    <button value={e._id} onClick={handleDelete}> delete </button>
                    
                    
                </li>)
            })}
            </ol>
            <Form handleProduct={handleProduct}></Form>
        </>
    )
}