import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Zalpa } from "./components/Zalpa";
import SlotMachine from "./SlotMachine";

function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <Header></Header>
            <SlotMachine></SlotMachine>
            <Zalpa></Zalpa>
            <Footer></Footer>
        </div>
    );
}
function Navigation() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="container">
                <Navbar.Brand href="#home" style={{ fontSize: "50px" }}>
                    Casino
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#" style={{ fontSize: "30px" }}>
                        Start
                    </Nav.Link>
                    <Nav.Link href="#zalpa" style={{ fontSize: "30px" }}>
                        Zalpa
                    </Nav.Link>
                    <Nav.Link href="#slot" style={{ fontSize: "30px" }}>
                        Slot
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
function Header() {
    return (
        <div id="header">
            <img src="casino-background.jpg" width="100%"></img>
            <div className="game-start-btn">
                <Button id="game-btn1" variant="warning" href="#zalpa">
                    Zalpa
                </Button>{" "}
                <Button id="game-btn2" variant="warning" href="#slot">
                    SLOT
                </Button>{" "}
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer">
            <p>2023 Copyright &Copyright Mia & Zalpa</p>
        </div>
    );
}
export default App;
