import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import heart from "../images/heart.png"
import heart1 from "../images/heart(1).png"

import star from "../images/star.png"

export default function DailogItem(props) {
  const {open, setOpen, changeHeart , info, liked} = props;


  const handleClose = () => {
    setOpen(false);
  };

  const {id,title, category, old_price, new_price, Disponible, desc, image} = info;

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const percente = parseInt((parseFloat(new_price.split(" ")[0])*100)/parseFloat(old_price.split(" ")[0]) - 100)
  
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        >
        <DialogContent>
        <div className=' w-[60vw] h-[50vh] lg:h-[50vh] bg-white grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr]'>
                <div style={backgroundStyle} className=' w-full h-full bg-[#f8f8f8]'></div>
                <div className=' w-full h-full m-4'>
                    <img src={liked[id] ? heart1:heart} className=' w-7 ml-auto mr-3 cursor-pointer' alt="heart" onClick={()=>changeHeart(id)} />
                    <p className=' font-semibold text-2xl'>{title}</p>
                    <p className=" text-gray-500 font-medium mt-1">Marque: <span className=' text-[#0085FF]'>{category}</span></p>
                    <div className=' bg-black w-[80%] my-4 h-[1px]'></div>
                    <p><span className=' font-bold text-2xl mr-4'>{new_price}</span> <span className='text-gray-500 line-through mr-8'>{parseFloat(old_price.split(" ")[0]).toFixed(2) + old_price.split(" ")[1]}</span> <span className=' text-[#F6932E] text-lg'>{percente}%</span></p>
                    <p className=' text-gray-400 text-lg mt-1'>{Disponible}</p>
                    <p className=' font-medium text-black'>+{desc}</p>
                    <div className='grid grid-cols-5 w-[30%] my-2'>
                    <img src={star} className='w-5' alt="" />
                    <img src={star} className='w-5' alt="" />
                    <img src={star} className='w-5' alt="" />
                    <img src={star} className='w-5' alt="" />
                    <img src={star} className='w-5' alt="" />
                    </div>
                    <div className='w-full h-[35%] flex justify-center items-center'>
                    <button className='uppercase text-white bg-[#f68b1e] hover:bg-[#e07e1b] border border-[#e07e1b] active:border-slate-700   w-[80%] py-3 font-semibold text-3xl my-5'>Buy Now</button>
                    </div>
                </div>
            </div>
          
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}