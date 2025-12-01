import { useState } from "react"
import axios from "axios";
export default function Form ({handleProduct}) {

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [stock,setStock] = useState("");
    const [error,setError] = useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price,
            category,
            stock
        }

        try {
            const response = await axios.post('http://localhost:4000/api/products/',product)
            console.log(response.data)
            handleProduct(response.data)
            setName("")
            setPrice("")
            setStock("")
            setCategory("")

        } catch (err) {
            console.error(err.response.data.error)
            setError(err.response.data.error)
        }



    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Category: </label>
                <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                <label>Price: </label>
                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <label>Stock: </label>
                <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            {error}
        </div>
    )
}