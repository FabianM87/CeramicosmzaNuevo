import {useState , useEffect} from 'react';  
import ItemList from '../Item/ItemList';
import Loader from '../Utils/Loader';
import data from '../Utils/data.json';
import {useParams} from 'react-router-dom';

function ItemListConteiner(props) {

  const {categoria} = useParams();
  const [Ceramico , setCeramico] = useState([]);
  const [loading, setLoading] = useState(true)
  

  const promise = new Promise((res) => {
    res(data)
  });

  const getCeramico = async() => {

      promise.then((res) => {
        const products = res;
        if(categoria){
          setCeramico(products.filter((product)=>product.categoria == categoria))
        }else{
          setCeramico(products)
        }
      })
  }
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    getCeramico()},
     2000);
  },[categoria])


  return (<>
    { loading ? <Loader/>
    : <ItemList Ceramico={Ceramico}/>}
    </>
  )
}

export default ItemListConteiner;
