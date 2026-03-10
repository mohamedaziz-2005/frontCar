import './Product.css';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { getAllProduct } from "../../Redux/Actions/ProductAction"
import { currentUser } from "../../Redux/Actions/UserAction"
import { getAllCommand } from "../../Redux/Actions/CommandAction"

const ProductsListe = () => {

    const dispatch = useDispatch()

    const [search,setSearch] = useState("")
    const [price,setPrice] = useState(0)

    useEffect(()=>{
        dispatch(getAllProduct())
        dispatch(currentUser())
        dispatch(getAllCommand())
    },[dispatch])

    const products = useSelector(state => state.ProductReducer.products)
    const commands = useSelector(state => state.CommandReducer.commands)

    // récupérer tous les prix
    const prices = products?.map(p => Number(p.prix)) || []

    const minPrice = prices.length ? Math.min(...prices) : 0
    const maxPrice = prices.length ? Math.max(...prices) : 0

    // initialiser le slider au max
    useEffect(()=>{
        setPrice(maxPrice)
    },[maxPrice])

    const filteredProducts = products?.filter(el =>
        el.text.toLowerCase().includes(search.toLowerCase()) &&
        Number(el.prix) <= price
    )

    return (
        <div className='hh'>

            <input
                type="text"
                placeholder="Search product..."
                onChange={(e)=>setSearch(e.target.value)}
            />

            <div className='mm' style={{margin:"20px 0"}}>
                <p>Price: {minPrice} - {price}</p>

                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
            </div>

            <div className="products-container">
                {
                    filteredProducts?.map((el)=>(
                        <ProductCard key={el._id} el={el} commands={commands}/>
                    ))
                }
            </div>

        </div>
    )
}

export default ProductsListe