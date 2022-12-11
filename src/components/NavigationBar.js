import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand>Genshin Impact</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Regions</Nav.Link>
                        <Nav.Link href="#characters">Characters</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar