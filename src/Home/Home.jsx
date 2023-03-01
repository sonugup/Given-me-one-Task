import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"
const Home = () => {
    const [data, setData]=useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const getData=() => {
      // setLoading(true)
        const res= axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
                  setData(res.data)
                  setLoading(false)
                  // console.log(res.data)
        
              }).catch((err) => {
                  console.log(err)
              })
    }

    useEffect(() => {
        getData()
    })

  return (
    <div>
      {
        loading? <div className='load'><p>Loading....</p>  <img src="https://tse3.mm.bing.net/th?id=OIP.uScjOwrr7oWnU6TZ5v87_AHaEe&pid=Api&P=0" alt="" /> </div>:(
<div className='container'>
        <div className='head'>
          <h1 className='sortlist'>Shortlist</h1>
          <div className='catagory'>
            <p>Clothin</p>
            <p>Jewelery</p>
            <p>Electronics</p>
          </div>
          <h1 className='sortlist'>ALLPRODUCT</h1>
          <p className='titlem'>Show all Catagory Product here you can select any Product</p>
        </div>
        <div className='main'>
          {
            data.map((el) => {
              return (
                <div key={el.id} className="box" 
                onClick={() => {
                  localStorage.setItem("itemadd", JSON.stringify(el));
                  navigate("/fetch");
                }}
                >
                  <div className='imgdiv'>
                    <img src={el.image} alt="image" />
                  </div>
                  <div className='catepri'>
                  <p>{el.category} </p>
                  <p className='price'>Price: {el.price} </p>
                  </div>
                  
                  <p className='title'> {el.title} </p>
                  {/* <p> {el.description} </p> */}
                </div>
              )
            })
          }
        </div>
      </div>
        )
      }
      
    </div>
  )
}

export default Home
