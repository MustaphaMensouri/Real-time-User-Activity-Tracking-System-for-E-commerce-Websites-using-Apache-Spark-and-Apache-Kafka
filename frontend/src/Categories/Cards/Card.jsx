import React ,{useState} from 'react';
import './Card.css';
import Data from '../../Data/data';
import { useCategory } from '../CategoryContext';
import BestSellers from '../Bestsellers/BestSellers';
import DailogItem from '../../DailogItem/DailogItem'
const Card = () => {
    const { activeCategory } = useCategory();
    const filteredData = Data.filter((product) => product.category === activeCategory);  
    const [open, setOpen] = useState(false);
  const info_1 = {
    title: "Fashion Titanium Steel Colorfast Thick Chain Cuban Chain Necklace-Silver BY ELITE WORLD",
    category: "Men",
    old_price: "49.99 Dhs",
    new_price: "37.49 Dhs",
    Disponible: "Disponible",
    desc: "livraison à partir de 9.00 Dhs vers CASABLANCA - Anfa",
  }
  const [info, setInfo] = useState(info_1)
  const l = {}
  Data.map(el => {
    l[el.id] = false
  })
  const [liked, setLike] = useState(l)

  const changeHeart = (id) =>{
    Data.map((product) =>{
      if (product.id === id){
        setLike(ex => {return {...ex, [id]: !ex[id]}})
      }
    })
  }

  const sendClick = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/send_click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You may need to include additional headers, such as authorization tokens
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      // Handle the result as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle the error as needed
    }
  };
  

  const handleClickOpen = (id) => {
    Data.map((product) =>{
      // send data to server
      if (product.id === id){
        sendClick({"id": product.id, 
        "title" : product.name, "category": product.category, 
        "new_price":`${product.price} Dh`,
        "Disponible": product.Disponible,
        "old_price": `${product.old_price} Dh`,
        "desc": product.desc,
        "image": product.image,})
      // update the state
        setInfo((ex) =>{
          return {...ex,
            "id": product.id, 
            "title" : product.name, "category": product.category, 
            "new_price":`${product.price} Dh`,
            "Disponible": product.Disponible,
            "old_price": `${product.old_price} Dh`,
            "desc": product.desc,
            "image": product.image,
          }
        }) 
      }
      setOpen(true);
    })
    
  };
  
  
    return (
      <>
    <div id='cards' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center pl-[15rem] pr-[15rem] pt-[5rem] ">
      {filteredData.map((product) => (
        <a
          key={product.id}
          href="#dolce-gabbana-cropped"
          className="product-card m-4 p-4 border"
          onClick={()=>handleClickOpen(product.id)}
        >
          <img className="product-card__image mb-2 max-w-full h-auto" src={product.image} alt={product.name} />
          <p className="product-card__brand">{product.name}</p>
          <p className="product-card__price">${product.price.toFixed(2)}</p>
          <button 
           className={`product-card__btn-wishlist z-20 ${liked[product.id] ? 'wishlist-clicked' : ''}`}
           onClick={(event) => {
            event.stopPropagation();
            changeHeart(product.id)}
          }
          
          >
            <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z"
                strokeWidth="2"
              />
            </svg>
          </button>
        </a>
      ))}

       

    </div>
    {open && <DailogItem open={open} setOpen={setOpen} info={info} changeHeart={changeHeart} liked={liked} />}
    <div className='best-sellers pt-[5rem]'>

<BestSellers />

</div>
 </>
  )
}

export default Card
