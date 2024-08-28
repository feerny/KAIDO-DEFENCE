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
import Manopladisenioskull from '../assets/Manopladisenioskull.png';
import ParKevlar from '../assets/ParKevlar.png';
import Taser from '../assets/Taser.png';
import BoligrafoHerramientadeautodefensa from '../assets/BoligrafoHerramientadeautodefensa.png';

const products = [
  //Productos de mujer
  { id: 1, name: "Item Size", price: "20.000", description: "Alarma personal con sonido seguro de 130 dB, 1 paquete de llavero de alarma de seguridad con luces LED, ideal para regalo (10 colores diferentes)", image: itemSizeImage },
  { id: 2, name: "Conjunto De 10 Piezas", price: "70.000", description: "Alarmas Personales De Defensa Personal, con Rompeventanas, Abridor De Botellas Y Bolsa De Almacenamiento En Llavero", image: ConjuntoDe10Piezas },
  { id: 3, name: "1pc Cuchillo Mini de Latón", price: "20.000", description: "Herramienta EDC para Camping al Aire Libre y Uso de Emergencia - Multifuncional y Portátil", image: pcCuchilloMinideLaton },
  { id: 4, name: "Set 4 Llaveros Practicos", price: "60.000", description: "Llavero de cuchillo holográfico miniatura de aleación fresco, con protección, para defensa personal", image: Set4LlaverosPracticos },
  { id: 5, name: "Juego de 5 Martillos de Seguridad", price: "100.000 ", description: "Rompeventanas y Cortador de Cinturón de Seguridad con Llavero, Herramienta de Emergencia Portátil en Colores Surtidos", image: Juegode5MartillosdeSeguridad },
  { id: 6, name: "1Pza Llavero Táctil", price: "20.000", description: "Herramienta Multifuncional, Abridor De Botellas Y Puertas", image: PzaLlaveroTactil },
  { id: 7, name: "Soporte para gas pimienta", price: "80.000", description: "Diamantes de imitación, mini bolsa de alta calidad con llavero, accesorio de moda, brillo y cuidado", image: Soporteparagaspimienta },
  { id: 8, name: "Mini silbatos", price: "50.000", description: "Huego de 3 Metal con Llavero - Compactas y Portátiles para Viajes", image: Minisilbatos },
 //Productos de Hombre
  { id: 11, name: "Ninja Boy Protectors", price: "120.000", description: "Navaja (Estilo japonés), Color Negro", image: NinjaBoyProtectors },
  { id: 12, name: "Kubotan", price: "75.000", description: "Arma de llavero autodefensa 5.5 pulgadas 14cm", image: Kubotan },
  { id: 13, name: "Gas Pimienta", price: "87.000", description: "Pelta Spray antiagresión de 15 ml", image: GasPimienta },
  { id: 14, name: "Comb Knife", price: "54.000", description: "Herramienta de defensa personal discreta en forma de peine 8.5cm resistencia nada riesgosa", image: CombKnife },
  { id: 15, name: "Kit de Supervivencia", price: "210.000", description: "Bolsa Molle de Herramientas Multifuncional con Manta de Emergencia", image: KitdeSupervivencia },
  { id: 16, name: "Pack Pistola Perdigón", price: "700.000", description: "Gamo PT-85 4,5mm Blowback. + Funda + balines + bombonas", image: PackPistolaPerdigon },
  { id: 17, name: "Manopla diseño skull", price: "1'800.000", description: "Exclusivo doble capa externa de oro macizo con su tarjeta de entrega y estuche original", image: Manopladisenioskull },
  { id: 18, name: "Par Kevlar", price: "129.000", description: "Manga Brazo de Protección / Antebrazo Tirador Anti-Cortar Resistente a Quemaduras Brazo Manga - Negro", image: ParKevlar },
  { id: 19, name: "Taser", price: "120.000", description: "Táctico no ocupa gran espacio, ideal autodefensa 1.200 voltios econopac con linterna", image: Taser },
  { id: 20, name: "Bolígrafo Herramienta de autodefensa", price: "48.000", description: "Rompevidrios con equipo de supervivencia DEC de acero de tungsteno multifuncional (negro)", image: BoligrafoHerramientadeautodefensa },
]

const defaultUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "data:image/png;base64,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"
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
    setFilteredProducts(products.slice(0, 8));
  };

  const showMenProducts = () => {
    setFilteredProducts(products.slice(-10));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-animation">
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
                placeholder="Buscar productos..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark"><FaSearch /></Button>
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
                      variant="outline-dark"
                      className="mt-auto button-animation"
                      onClick={() => handleProductClick(product)}
                    >
                      Ver detalles
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
              <h5>Contactanos</h5>
              <div>
                <a href="#" className="text-light me-2"><FaFacebook /></a>
                <a href="#" className="text-light me-2"><FaTwitter /></a>
                <a href="#" className="text-light me-2"><FaInstagram /></a>
                <a href="#" className="text-light me-2"><FaLinkedin /></a>
              </div>
              <Form className="mt-3">
                <Form.Group controlId="newsletter">
                  <Form.Label>Suscribete para recibir ofertas exclusivas</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="outline-light" className="mt-2">Suscribirme</Button>
              </Form>
            </Col>
          </Row>
          <hr />
          <p className="text-center mb-0">&copy; 2024 KAIDO DEFENCE. Todos los derechos reservados</p>
        </Container>
      </footer>

      <Offcanvas show={showUserMenu} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Perfil del usuario</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center mb-3">
            <img src={defaultUser.avatar} alt={defaultUser.name} className="rounded-circle me-3" style={{width: '64px', height: '64px'}} />
            <div>
              <h5 className="mb-0">{defaultUser.name}</h5>
              <p className="text-muted mb-0">{defaultUser.email}</p>
            </div>
          </div>
          <Button variant="outline-dark" className="w-100 mb-2">
            <FaUser className="me-2" /> Editar perfil
          </Button>
          <Button variant="outline-dark" className="w-100 mb-2">
            <FaShoppingCart className="me-2" /> historial de ordenes
          </Button>
          <Button variant="outline-dark" className="w-100">
            <FaShoppingCart className="me-2" /> Lista de deseos
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
              <Button variant="dark" className="w-100">Agregar al carrito</Button>
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