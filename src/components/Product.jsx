import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'

function Product() {
    const { id } = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch (`https://fakestoreapi.com/products/${id}`);
        }
        getProduct();
    },[])
  return (
    <div>

    </div>
  )
}

export default Product