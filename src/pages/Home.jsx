import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, Button, Card, Row, Col, Offcanvas } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaUser, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import itemSizeImage from '../assets/Item-Size.png';
import ConjuntoDe10Piezas from '../assets/ConjuntoDe10Piezas.png';
import pcCuchilloMinideLaton from '../assets/pcCuchilloMinideLaton.png';
import Set4LlaverosPracticos from '../assets/Set4LlaverosPracticos.png';
import Juegode5MartillosdeSeguridad from '../assets/Juegode5MartillosdeSeguridad.png';
import PzaLlaveroTactil from '../assets/PzaLlaveroTactil.png';
import Soporteparagaspimienta from '../assets/Soporteparagaspimienta.png';
import Minisilbatos from '../assets/Minisilbatos.png';
import Kubotan from '../assets/Kubotan.png';
import GasPimienta from '../assets/GasPimienta.png';
import CombKnife from '../assets/CombKnife.png';
import KitdeSupervivencia from '../assets/KitdeSupervivencia.png';
import NinjaBoyProtectors from '../assets/NinjaBoyProtectors.png';
import PackPistolaPerdigon from '../assets/PackPistolaPerdigon.png';

const products = [
  //Productos de mujer
  { id: 1, name: "Item Size", price: "20.000", description: "Alarma personal con sonido seguro de 130 dB, 1 paquete de llavero de alarma de seguridad con luces LED, ideal para regalo (10 colores diferentes)", image: itemSizeImage },
  { id: 2, name: "Conjunto De 10 Piezas", price: "70.000", description: "Alarmas Personales De Defensa Personal, con Rompeventanas, Abridor De Botellas Y Bolsa De Almacenamiento En Llavero", image: ConjuntoDe10Piezas },
  { id: 3, name: "1pc Cuchillo Mini de Latón", price: "20.000", description: "Herramienta EDC para Camping al Aire Libre y Uso de Emergencia - Multifuncional y Portátil", image: pcCuchilloMinideLaton },
  { id: 4, name: "Set 4 Llaveros Practicos", price: "60.000", description: "Llavero de cuchillo holográfico miniatura de aleación fresco, con protección, para defensa personal", image: Set4LlaverosPracticos },
  { id: 5, name: "Juego de 5 Martillos de Seguridad", price: "100.000 ", description: "Rompeventanas y Cortador de Cinturón de Seguridad con Llavero, Herramienta de Emergencia Portátil en Colores Surtidos", image: Juegode5MartillosdeSeguridad },
  { id: 6, name: "1Pza Llavero Táctil", price: "129", description: "Herramienta Multifuncional, Abridor De Botellas Y Puertas", image: PzaLlaveroTactil },
  { id: 7, name: "Soporte para gas pimienta", price: "299", description: "Diamantes de imitación, mini bolsa de alta calidad con llavero, accesorio de moda, brillo y cuidado", image: Soporteparagaspimienta },
  { id: 8, name: "Mini silbatos", price: "49", description: "Huego de 3 Metal con Llavero - Compactas y Portátiles para Viajes", image: Minisilbatos },
  { id: 9, name: "Wireless Mouse", price: "39", description: "Ergonomic wireless mouse with long battery life", image: "https://i.imgur.com/9012345.jpg" },
  { id: 10, name: "Gaming Console", price: "499", description: "Next-gen gaming console with 4K capabilities", image: "https://i.imgur.com/0123456.jpg" },
 //Productos de Hombre
  { id: 11, name: "Ninja Boy Protectors", price: "89", description: "Navaja (Estilo japonés), Color Negro", image: NinjaBoyProtectors },
  { id: 12, name: "Kubotan", price: "699", description: "Arma de llavero autodefensa 5.5 pulgadas 14cm", image: Kubotan },
  { id: 13, name: "Gas Pimienta", price: "249", description: "Pelta Spray antiagresión de 15 ml", image: GasPimienta },
  { id: 14, name: "Comb Knife", price: "299", description: "Herramienta de defensa personal discreta en forma de peine 8.5cm resistencia nada riesgosa", image: CombKnife },
  { id: 15, name: "Kit de Supervivencia", price: "449", description: "Bolsa Molle de Herramientas Multifuncional con Manta de Emergencia", image: KitdeSupervivencia },
  { id: 16, name: "Pack Pistola Perdigón", price: "79", description: "Gamo PT-85 4,5mm Blowback. + Funda + balines + bombonas", image: PackPistolaPerdigon },
  { id: 17, name: "Manopla diseño skull", price: "159", description: "Exclusivo doble capa externa de oro macizo con su tarjeta de entrega y estuche original", image: "https://i.imgur.com/7890123.jpg" },
  { id: 18, name: "Par Kevlar", price: "129", description: "Manga Brazo de Protección / Antebrazo Tirador Anti-Cortar Resistente a Quemaduras Brazo Manga - Negro", image: "https://i.imgur.com/8901234.jpg" },
  { id: 19, name: "Taser", price: "59", description: "Táctico no ocupa gran espacio, ideal autodefensa 1.200 voltios econopac con linterna", image: "https://i.imgur.com/9012345.jpg" },
  { id: 20, name: "Bolígrafo Herramienta de autodefensa ", price: "349", description: "Rompevidrios con equipo de supervivencia DEC de acero de tungsteno multifuncional (negro)", image: "https://i.imgur.com/0123456.jpg" },
]

const defaultUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://i.imgur.com/abcdefg.jpg"
};

export default function Home() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products); // Inicialmente muestra todos los produtos

  const handleClose = () => setShowUserMenu(false);
  const handleShow = () => setShowUserMenu(true);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  const showWomenProducts = () => {
    setFilteredProducts(products.slice(0, 10));
  };

  const showMenProducts = () => {
    setFilteredProducts(products.slice(-10));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="primary" variant="dark" expand="lg" className="navbar-animation">
        <Container>
          <Navbar.Brand href="#home">KAIDO DEFENCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={showWomenProducts}>Womens</Nav.Link>
              <Nav.Link onClick={showMenProducts}>Mens</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light"><FaSearch /></Button>
            </Form>
            <Nav>
              <Nav.Link href="#cart"><FaShoppingCart /></Nav.Link>
              <Nav.Link onClick={handleShow}><FaUser /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <Container className="py-4">
          <h2 className="text-center mb-4 title-animation">Nuestros productos</h2>
          <Row xs={1} md={2} lg={4} className="g-4">
            {filteredProducts.map((product, index) => (
              <Col key={product.id}>
                <Card className="h-100 product-card-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card.Img variant="top" src={product.image}   className="product-image-animation" />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-title-animation">{product.name}</Card.Title>
                    <Card.Text className="text-muted mb-2 product-price-animation">${product.price}</Card.Text>
                    <Button
                      variant="outline-primary"
                      className="mt-auto button-animation"
                      onClick={() => handleProductClick(product)}
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer className="bg-dark text-light py-4 footer-animation">
      <Container>
          <Row>
            <Col md={7}>
              <h5>About KAIDO DEFENCE</h5>
              <p>Bienvenido a KAIDO DEFENCE, tu tienda especializada en artículos de defensa personal diseñados para brindar seguridad y tranquilidad a todos. Ofrecemos una amplia gama de productos de alta calidad, adecuados tanto para mujeres como para hombres, que te ayudarán a protegerte y mantenerte seguro en cualquier situación.</p>
            </Col>
            <Col md={5}>
              <h5>Connect With Us</h5>
              <div>
                <a href="#" className="text-light me-2"><FaFacebook /></a>
                <a href="#" className="text-light me-2"><FaTwitter /></a>
                <a href="#" className="text-light me-2"><FaInstagram /></a>
                <a href="#" className="text-light me-2"><FaLinkedin /></a>
              </div>
              <Form className="mt-3">
                <Form.Group controlId="newsletter">
                  <Form.Label>Subscribe to our newsletter</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="outline-light" className="mt-2">Subscribe</Button>
              </Form>
            </Col>
          </Row>
          <hr />
          <p className="text-center mb-0">&copy; 2024 KAIDO DEFENCE. All rights reserved.</p>
        </Container>
      </footer>

      <Offcanvas show={showUserMenu} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center mb-3">
            <img src={defaultUser.avatar} alt={defaultUser.name} className="rounded-circle me-3" style={{width: '64px', height: '64px'}} />
            <div>
              <h5 className="mb-0">{defaultUser.name}</h5>
              <p className="text-muted mb-0">{defaultUser.email}</p>
            </div>
          </div>
          <Button variant="outline-primary" className="w-100 mb-2">
            <FaUser className="me-2" /> Edit Profile
          </Button>
          <Button variant="outline-primary" className="w-100 mb-2">
            <FaShoppingCart className="me-2" /> Order History
          </Button>
          <Button variant="outline-primary" className="w-100">
            <FaShoppingCart className="me-2" /> Wishlist
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showProductDetails} onHide={() => setShowProductDetails(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{selectedProduct?.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedProduct && (
            <>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%" }} className="img-fluid mb-3" />
              <h4>${selectedProduct.price}</h4>
              <p>{selectedProduct.description}</p>
              <Button variant="primary" className="w-100">Add to Cart</Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx>{`
        .navbar-animation {
          animation: slideDown 0.5s ease-out;
        }
        .brand-animation {
          animation: fadeIn 1s ease-out;
        }
        .title-animation {
          animation: fadeInUp 0.8s ease-out;
        }
        .product-card-animation {
          animation: fadeInUp 0.8s ease-out both;
        }
        .product-image-animation {
          transition: transform 0.3s ease-in-out;
        }
        .product-image-animation:hover {
          transform: scale(1.05);
        }
        .product-title-animation {
          animation: fadeInLeft 0.8s ease-out;
        }
        .product-price-animation {
          animation: fadeInRight 0.8s ease-out;
        }
        .button-animation {
          transition: all 0.3s ease-in-out;
        }
        .button-animation:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .footer-animation {
          animation: slideUp 0.5s ease-out;
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}