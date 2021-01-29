import { useState ,useEffect} from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';
import { Container,Button } from "reactstrap";
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState(true);
  const [tourss,setTours] = useState([]);

  const removeTours = (id)=>{
    const newTours = tourss.filter((tour) => tour.id !==id);
    setTours(newTours);
  }

  const fetchTours = async () =>{
    try{
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if(loading){
    return (
      <div className="themain">
      <div className="App">
        <Loading/>
      </div>
      </div>
    );
  }
  if(tourss.length===0){
    return(
      <div className="themain">
      <div className="App">
        <div className="d-flex justify-content-center mt-5"><h2>No More Tours Left</h2></div>
        <div className="d-flex justify-content-center p-10">
          <Button  color="primary" className=" btn btn-lg primary" onClick={fetchTours}>Refresh</Button>
        </div>
      </div>
      </div>
    )
  }
  else{
    return(
      <div className="themain">
      <div className="App">
        <Container>
        <div className="d-flex justify-content-center"><h1>Our Tours</h1></div>
        <div className="underline"></div>
        <Tours tours ={tourss} removeTours={removeTours.bind(this)}/>
        </Container>
      </div>
      </div>
    )
  }
}

export default App;
