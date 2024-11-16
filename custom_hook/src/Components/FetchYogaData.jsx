import React from 'react';
import UseFetch from './UseFetch'; 
  
const FetchYogaData = () => {
    const [yogaData] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log("FetchYogaData", yogaData);
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {yogaData && yogaData.map((e)=>(
      <>
       <li className='list_data'>
            <h3>{e.name}</h3> 
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time duration: </strong>{e.time_duration}</p>
            </li>
      </>
    ))}
     </ul>
    </>
  )
}
export default FetchYogaData
