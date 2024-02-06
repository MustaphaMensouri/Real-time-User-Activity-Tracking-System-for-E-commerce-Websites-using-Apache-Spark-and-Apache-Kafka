import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
const ENDPOINT = "http://127.0.0.1:5002";
    
function Test() {

  const [dd, setdd] = useState([])
  useEffect(() => {
      const socket = io.connect(ENDPOINT);
      let c  = 0;
      const handleUpdateSensorData = (data) => {
        console.log(`data: ${c}`, data);
        setdd(e => [...e, ` ${data.count} ${data.id}`])
        c = c+1;
    };

    socket.on('updateSensorData', handleUpdateSensorData);

    return () => {
        socket.off('updateSensorData', handleUpdateSensorData);
        socket.disconnect();
    };
  },[]);
  return (
    

<div className="mt-64 ml-64 border border-green-600 rounded-md">
 {dd.map(e => (<div key={dd.indexOf(e)} className="mx-6">{e}</div>))}
</div>      
    

  );
}
export default Test;