import "./bicicletas.css"
import { useCarrito } from '../carrito/CarritoContext.jsx'
const Bicis = [
  {
    id: 2,
    name: "Urbana",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/71GEZL1N3PL.jpg"
  },
  {
    id: 1,
    name: "BMX",
    price: 100,
    imageUrl: "https://static.wixstatic.com/media/21c93c_731097e1c4c940e3a75facc5e08a407e~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/21c93c_731097e1c4c940e3a75facc5e08a407e~mv2.jpg"
  },
  {
    id: 3,
    name: "MTX",
    price: 100,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_882121-MLU75982868709_042024-O.webp"
  },
  {
    id: 4,
    name: "Cruiser",
    price: 100,
    imageUrl: "https://bicimundomx.vtexassets.com/arquivos/ids/169035/6521500_1.jpg?v=638775785988700000"
  },
  {
    id: 5,
    name: "Plegable",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/51po1nTDeLL._AC_UF894,1000_QL80_DpWeblab_.jpg"
  },
  {
    id: 6,
    name: "Electrica",
    price: 100,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_852912-MLM73552678426_122023-O-bicicleta-electrica-bicicleta-de-playa-eco-bici-200kg-25kmh.webp"
  },
]
function CategoriaBici({
  id,
  name,
  price,
  imageUrl,
}) {
  const { addToCart } = useCarrito();
  return (
    <div className="bici-producto">
      <img src={imageUrl} alt="" />
      <p>{name}</p>
      <div className="categoria-bici-detalles">
        <p className="categoria-bici-precio">{`$ ${price} MXN`}</p>
        <p className="categoria-bici-agregar" onClick={() => addToCart({'id': id, 'name': name, 'price': price, 'imageUrl': imageUrl})}>Agregar</p>
      </div>
    </div>
  );
}

function Categoria({products}) {
  return (
    <article className="categoria-bicis">
      {
        products.map(({name, price, imageUrl, id}) => (
          <CategoriaBici name={name} price={price} imageUrl={imageUrl} key={id} id={id} />
        ))
      } 
    </article>
  );
}

function Bicicletas(){

  return(
  <>
    <section className="bicicletas-section">
      <article className="bicicletas-article">
        <Categoria products={Bicis} />
      </article>
    </section>
  </>
  )
}

export default Bicicletas;
