import './carrito.css'
import { useCarrito } from "./CarritoContext.jsx"
import { useState } from "react"

function Modal({setContinued}){
  
  const { cart } = useCarrito();

  async function submitHandle(formData){
    const nombre = formData.get("nombre")
    const telefono = formData.get("telefono")
    const email = formData.get("email")
    const direccion = formData.get("direccion")
    const tarjeta = formData.get("tarjeta")
    const cvv = formData.get("cvv")
    const caducidad = formData.get("caducidad")
    const fechaActual = new Date().toISOString();

    try {
      const clienteResponse = await fetch('http://localhost:8000/floreria/clientes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre,
          direccion: direccion,
          telefono: telefono,
          correo: email
        }),
      });

      if (!clienteResponse.ok) throw new Error('Error al crear cliente');

      const id_cliente = await clienteResponse.json();

      console.log('Cliente creado:', id_cliente);

    } catch (error) {
      alert(error.message);
      console.error(error);
    }

   try {
      const res = await fetch('http://localhost:4000/create-sales-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart })
      });
      console.log('Respuesta HTTP recibida:', res);

      const data = await res.json();

      if (!res.ok) {
        console.error('Error recibido del backend:', data);
      } else {
        console.log('Datos recibidos del backend:', data);
      }
    } catch (e) {
      console.error('Error en fetch:', e);
    } 
    console.log(nombre, telefono, direccion, email)
    alert("Compra Realizada")
    window.location.href = "http://localhost:5173/";
  }
  return (
   <article className="modal-address">
      <div className="bg-modal" onClick={e => setContinued(false)}>
      </div>
     <div className="modal">
       <div className="cart-address-title">Datos</div>
       <form className="form-address" action={submitHandle} id="address-form">
         <div className="cart-input">
           <div className="cart-input-title">Nombre</div>
           <input className="input-normal" type="text" name="nombre" id="" />
         </div>
         <div className="cart-input">
           <div className="cart-input-title">Teléfono</div>
           <input className="input-normal" type="text" name="telefono" id="" />
         </div>
         <div className="cart-input address-email">
           <div className="cart-input-title">Correcto Electrónico</div>
           <input className="input-email" type="email" name="direccion" id="" />
         </div>
         <div className="cart-input address-email">
           <div className="cart-input-title">Direccion</div>
           <input className="input-email" type="text" name="email" id="" />
         </div>
         <div className="cart-input address-email">
           <div className="cart-input-title">Numero de Tarjeta</div>
           <input className="input-email" type="text" name="tarjeta" id="" />
         </div>
         <div className="cart-input">
           <div className="cart-input-title">CVV</div>
           <input className="input-normal" type="text" name="cvv" id="" />
         </div>
         <div className="cart-input">
           <div className="cart-input-title">Fecha Caducidad</div>
           <input className="input-normal" type="text" name="caducidad" id="" />
         </div>
       </form>
       <button className="cart-address-send" type="submit" form="address-form">Comprar</button>
     </div>
   </article>
  )
}
function Item({
  id,
  name,
  price,
  imageUrl,
  quantity
}) {
  
  const { removeFromCart, addToCart } = useCarrito();

  return (
    <div className="cart-product">
      <img src={imageUrl} alt="" />
      <div className="cart-product-details">
        <p className="cart-product-title">{name}</p>
        <p className="cart-product-unit-price">{`$${price} cada unidad`}</p>
        <div className="cart-product-buttons">
          <p className="cart-product-remove" onClick={() => removeFromCart(id)}>Eliminar x1</p>
          <p className="cart-product-remove" onClick={() => addToCart({'id': id, 'name': name, 'price': price, 'imageUrl': imageUrl})}>Agregar x1</p>
        </div>
      </div>
      <div className="cart-product-prices">
        <p className="cart-product-total-price">{`$ ${price * quantity} $`}</p>
        <p className="cart-product-quantity">Cantidad: {quantity}</p>
      </div>
    </div>
  );
}

function Carrito(){
  
  const [continued, setContinued] = useState(false)
  const { cart } = useCarrito();
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);

  return (
    <div className="carrito-page">
      <section className="cart-section">
        <h2>Carrito</h2>
        <div className="cart-products">
          {cart.map(item => (
            <Item key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} quantity={item.quantity}/>
          ))}
        </div>
      </section>
      <section className="carrito-total">
        <div className="cart-subtotal"> <div className="cart-total">
            Total: {total} $
          </div>
          <div className="cart-continue" onClick={(e) => {setContinued(true)}}> 
            Continuar
          </div>
        </div>
      </section>
      {
        continued && <Modal setContinued={setContinued}/> 
      }
    </div>
  )
}

export default Carrito;
