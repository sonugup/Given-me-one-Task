import React, {useState, useEffect} from 'react'

const Fetch = () => {
    const [Data, setData] = useState([]);

    const localStorageData = () => {
      let valueData = JSON.parse(localStorage.getItem("itemadd")) || [];
      setData(valueData);
    };
  
    useEffect(() => {
      localStorageData();
    }, []);
    console.log(Data)
  return (
    <div>
     <div className='main1'>
         
                <div  className="Onebox"
                >
                  <div className='imgdiv'>
                    <img src={Data.image} alt="image" />
                  </div>
                  <div className='catepri1'>
                  <p>{Data.category} </p>
                  <p className='price'>Price: {Data.price} </p>
                  </div>
                  
                  <p className='title'><h1>Title: </h1> <br />{Data.title} </p>
                  <p className='des'><h1>Description</h1> <br /> {Data.description} </p>
                </div>
              
        </div>
    </div>
  )
}

export default Fetch
