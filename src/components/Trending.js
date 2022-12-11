import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import duneImage from "../assets/images/trending/liyue.jpg"
import everything from "../assets/images/trending/mondstadt.jpg"
import infinte from "../assets/images/trending/inazuma.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white'>Region Available</h1>
                <br />
                <Row>
                    <Col md={4} className="regionWrapper" id="trending">
                        <Card className="bg-dark regionImage">
                            <Image src={duneImage} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Liyue</Card.Title>
                            <Card.Text className='text-left'>
                            Liyue is one of the seven regions in Teyvat. It is the city-state that worships Rex Lapis, the Geo Archon.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={infinte} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Inazuma</Card.Title>
                            <Card.Text className='text-left'>
                            Inazuma is one of the seven regions in Teyvat. It is an archipelagic region that worships Raiden Shogun, the Electro Archon, who is also the leader of its governing body, the Inazuma Shogunate. Inazuma is located approximately 4 km southeast from Liyue Harbor and is a close neighbor with the Dark Sea.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={everything} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Mondstadt</Card.Title>
                            <Card.Text className='text-left'>
                            Mondstadt is one of the seven regions in Teyvat, and the first in which the Traveler starts to look for their lost sibling. It is the city-state that worships Lord Barbatos, the Anemo Archon.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending