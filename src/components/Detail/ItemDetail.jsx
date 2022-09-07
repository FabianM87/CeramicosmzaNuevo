import ItemCount from '../Item/ItemCount'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom'
function ItemDetail(props) {
    const {title, price, filename, stock, categoria,} = props;
    const [cant, setCant] = useState(0);

    const onAdd = (cant)=>{
        setCant(cant)
    }
    const navigate = useNavigate();
    
    function aCarrito(){ navigate("/cart") }

  return (
    <section className="body py-10">
        <div className="w-2/4 bg-neutral-300 m-auto rounded-md">
            <h2 className="font-bold text-2xl text-center p-4">{title}</h2>
            <div className="flex justify-around my-4">
                <img src={filename} alt={title} className="m-4 h-4/6 w-2/6"/>
                <div className="">
                    <span className="text-sky-500">Categoria:</span>
                    <span className="text-gray-700">{categoria}</span>
                    <div>
                        <h3 className="text-gray-800 text-end text-xl">Precio: ${price}</h3>
                        <h4 className="text-gray-700">Primera calidad: {stock}</h4>
                        <p className="text-gray-700">- texturado <br />
                           - 45,3x45,3cm <br />
                           - Este producto se vende por caja</p>
                        <div className='text-center'>
                        {cant == 0 ?(<ItemCount stock={stock} initial={0} onAdd={onAdd} />):
                        (<><p className='text-gray-900 text-center  '>se agrego {cant} {cant== 1 ?("Item"):("Items")}</p>
                        <button className='rounded border bg-violet-500 p-2 m-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={aCarrito}>Ir al Carrito</button></>)}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default ItemDetail;