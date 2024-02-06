import React, { useState } from 'react';
import './BestSellers.css';
import Data from '../../Data/data';
import DailogItem from '../../DailogItem/DailogItem'

const BestSellers = () => {
  
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
      if (product.id === id){
        // send data of the cards that clicked to the server
        sendClick({"id": product.id, 
        "title" : product.name, "category": product.category, 
        "new_price":`${product.price} Dh`,
        "Disponible": product.Disponible,
        "old_price": `${product.old_price} Dh`,
        "desc": product.desc,
        "image": product.image,})
        //update the state
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
    })
    setOpen(true);
  };
  

  return (
    <>
      <div className="flex justify-center pt-[5rem]">
        <p className='border-b-2 border-red-500 text-4xl pb-[1rem] font-extrabold'>
          Best Sellers
        </p>
      </div>

      <div id="bestsellersid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center pl-[23rem] pr-[15rem] pt-[5rem]">
        {Data.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="product-card m-4 p-4 border"
            onClick={() => handleClickOpen(product.id)}
          >
            <img
              className="product-card__image mb-2 max-w-full h-auto"
              src={product.image}
              alt={product.name}
            />
            <p className="product-card__brand">{product.name}</p>
            <p className="product-card__price">${product.price}</p>
            
          </div>
        ))}
    {open && <DailogItem open={open} setOpen={setOpen} info={info} changeHeart={changeHeart} liked={liked} />}
        
      </div>
    </>
  );
}

export default BestSellers;
