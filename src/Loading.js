import { Container, Spinner } from 'reactstrap'


function Loading(){
    return(
        <Container className="App">
        <Spinner style={{ width: '30px', height: '30px' }} />{' '}
        </Container>
        
    );
}

export default Loading;