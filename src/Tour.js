import React,{useState} from 'react'
import {Card, CardBody, CardImg, CardText, CardTitle,Button, Badge} from 'reactstrap'

export const Tour = ({tour,removeTours}) => {

    const [readMore,setReadMore] = useState(false);
    return (
        <div className="container col col-md-10">
        <Card>
        <CardBody>
            <CardImg top className='img' width="100%" height="500px" src={tour.image} alt="Card image cap" />
            <hr></hr>
            <div className="row">
            <CardTitle tag="h4" className="col md-2">{tour.name}</CardTitle>
            <h3><Badge color="light">${tour.price}</Badge></h3>
            </div>
            <CardText>{readMore?tour.info:
                `${tour.info.substring(0,250)}...`
            }<button className="btn btn-link" onClick={()=>setReadMore(!readMore)}>{readMore?'Show Less':'Read More'}</button></CardText>
            <div className="row">
            <Button className="col-6 col-md-4 offset-4" outline color='danger'  onClick={()=>removeTours(tour.id)}>Not Interested</Button>
            </div>
        </CardBody>
        </Card>
    </div>
    )
}
export default Tour;
