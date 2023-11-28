import React, { useEffect, useState } from 'react'
import { item } from '../utils'

const ProductList = ({ category }: { category: string}) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log('Fetching products in ', category)
    setProducts([...item])
  }, [category])

  return (
    <div>{products}</div>
  )
}

export default ProductList