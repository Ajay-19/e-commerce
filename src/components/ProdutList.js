import React,{useEffect, useState} from "react"
import ProductCart from "./ProductCard"
const ProductList = () =>
{
  const [data, setData] = useState(["Shirts", "pants"])

  useEffect(()=>
  {
    fetchData()
  },[])

  const fetchData = async () =>
  {
      const data = await fetch("https://fakestoreapi.com/products")
      const json = await data.json()
      setData(json)
  }
  return (
    <div className="flex flex-wrap justify-center items-start p-4 min-h-screen bg-gray-100">
      {data.map((item) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={item.id}>
          <ProductCart ProductInfo={item} />
        </div>
      ))}
    </div>
  );
  
}

export default ProductList