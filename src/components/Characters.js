import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import beidou from "../assets/images/characters/beidou.png"
import eula from "../assets/images/characters/eula.png"
import lisa from "../assets/images/characters/lisa.png"
import ningguang from "../assets/images/characters/ningguang.png"
import raiden from "../assets/images/characters/raiden.png"
import sara from "../assets/images/characters/sara.png"
import shenhe from "../assets/images/characters/shenhe.png"
import yelan from "../assets/images/characters/yelan.png"


const Characters = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white'>Characters Available</h1>
                <br />
                <Row>
                    <Col md={4} className="regionWrapper" id='characters'>
                        <Card className="bg-dark regionImage">
                            <Image src={beidou} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Beidou</Card.Title>
                                <Card.Text className='text-left'>
                                    She is the captain of The Crux, a renowned crew in Liyue. Besides her capabilities as a fleet captain and her immense strength, many in Liyue know her for her lack of fear towards the Tianquan of the Liyue Qixing, Ningguang — a trait that the other appreciates, yet grows irritated by.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={eula} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Eula Lawrence</Card.Title>
                                <Card.Text className='text-left'>
                                    Although a descendant of the infamous and tyrannical Lawrence Clan, Eula severed her ties with the clan and became the captain of the Reconnaissance Company with the Knights of Favonius.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={lisa} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Lisa Minci</Card.Title>
                                <Card.Text className='text-left'>
                                    A powerful mage recognized as Sumeru Akademiya's most distinguished graduate in 200 years, Lisa has since returned to Mondstadt to become the humble Librarian of the Knights of Favonius.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={ningguang} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Ningguang</Card.Title>
                                <Card.Text className='text-left'>
                                    The Tianquan of the Liyue Qixing and owner of the floating Jade Chamber in the skies of Liyue, Ningguang is a mogul who shakes the very foundations of business circles. Even grabbing a few scraps from the documents she shreds from the Jade Chamber will gift one an invaluable fragment of her wisdom, enough to stay a step or two from one's peers.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={raiden} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Raiden Shogun</Card.Title>
                                <Card.Text className='text-left'>
                                    The Raiden Shogun is unique as she is comprised of two beings in one body: Ei, the current Electro Archon of Inazuma; and the Shogun, the puppet created by Ei to act as the ruler of Inazuma in her stead, which also serves as her vessel.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={sara} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Kujou Sara</Card.Title>
                                <Card.Text className='text-left'>
                                A tengu, Sara is the adopted daughter of the Kujou Clan of the Tenryou Commission. Loyal to both her clan and the Shogun, Sara carries out her orders by the Shogun's will.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={shenhe} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Shenhe</Card.Title>
                                <Card.Text className='text-left'>
                                The daughter of an unnamed exorcist couple, Shenhe was taken in and raised by Cloud Retainer as a disciple following a traumatic incident by Shenhe's father during her childhood.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="regionWrapper">
                        <Card className="bg-dark regionImage">
                            <Image src={yelan} alt="Dune Image" className='images' />
                            <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Yelan</Card.Title>
                                <Card.Text className='text-left'>
                                She is a mysterious person who claims to work for the Ministry of Civil Affairs, but comes out as a non-entity on their list. She also claims to work for the Yanshang Teahouse, but only uses it for her true job, an intelligence agent collaborating with Ningguang.
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

export default Characters