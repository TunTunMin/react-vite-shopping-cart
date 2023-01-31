import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Button, Stack } from "react-bootstrap";
import FormatCurrency from "../utilities/FormatCurrency";
type CartItemProps = {
    id: number
    quantity: number
}
export default function CartItem({id, quantity} : CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if(item == null) return null
    return (
        <Stack direction="horizontal" gap={2}>
            <img src={item.imgUrl} alt="item.name" style={{width: "125px", height: "75px"}}></img>
           <div className="me-auto">
                <div>
                    {item.name} {" "}
                    {quantity > 1 && (<span className="text-muted" style={{fontSize: ".65rem"}}>
                        * {quantity}
                    </span>)}
                </div>
           </div>
           <div className="text-muted">
                {FormatCurrency(item.price * quantity)}
           </div>
           <Button variant="outline-danger" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}
