function Item(props){
    return(
      <div className="group bg-white rounded-md">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={props.img}
          alt={props.title}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <div className='text-center'>
      <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
      <h4 className="mt-4 text-sm text-gray-700">{props.series}</h4>
      <p className="mt-1 text-lg font-medium text-gray-900">${props.price}</p>
      </div>  
      <a href="#" className="button">Detalles</a>
    </div>
    )
}

export default Item;