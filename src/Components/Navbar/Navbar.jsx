
import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import "./Navbar.css";

export default function CustomNavbar({ isScrolled }) { 
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    // 1. Load initial count from localStorage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistCount(savedWishlist.length);

    // 2. Listen for the custom "wishlistUpdated" event
    const handleUpdate = (e) => {
      setWishlistCount(e.detail);
    };

    window.addEventListener("wishlistUpdated", handleUpdate);
    return () => window.removeEventListener("wishlistUpdated", handleUpdate);
  }, []);

  return (
    <div className={`custom-navbar-links ${isScrolled ? 'scrolled-nav' : ''}`}>
      <Container>
        <Navbar.Collapse id="main-navbar" className="justify-content-center">
          <Nav className="navbar-items">
             <Nav.Link href="/about" className="nav-item-custom">ABOUT US</Nav.Link> 
            <Nav.Link href="/collections" className="nav-item-custom">FRESH LOUNCH</Nav.Link>

            <NavDropdown title="COLLECTIONS" id="coll-drop" className="nav-item-custom dropdown-custom collections-dropdown">
              <div className="collection-grid">
                <a href="/abstract" className="collection-item"><img src="/assets/images/gallary1.webp" alt="Abstract" /><span>Abstract</span></a>
                <a href="/prints" className="collection-item"><img src="/assets/images/gallary2.webp" alt="Botanical" /><span>Botanical</span></a>
                <a href="/photography" className="collection-item"><img src="/assets/images/gallary3.webp" alt="Photography" /><span>Photography</span></a>
                <a href="/landscape" className="collection-item"><img src="/assets/images/gallary4.webp" alt="Landscape" /><span>Landscape</span></a>
                <a href="/geometric" className="collection-item"><img src="/assets/images/gallary5.webp" alt="Geometric" /><span>Geometric</span></a>
                 <a href="/landscape" className="collection-item"><img src="/assets/images/gallary4.webp" alt="Landscape" /><span>Contemporary</span></a>
                <a href="/geometric" className="collection-item"><img src="/assets/images/gallary5.webp" alt="Geometric" /><span>Folk Art</span></a>
              </div>
            </NavDropdown>

            <NavDropdown title="ARTISTS" id="art-drop" className="nav-item-custom dropdown-custom artists-dropdown">
              <div className="artists-mega-menu">
                <div className="artist-section">
                  <div className="artist-grid">
                    <a href="/artist/van-gogh" className="artist-item"><img src="/assets/images/gallary2.webp" alt="Van Gogh" /><span className="artist-label">Van Gogh</span></a>
                    <a href="/artist/matisse" className="artist-item"><img src="/assets/images/gallary3.webp" alt="Henri Matisse" /><span className="artist-label">Henri Matisse</span></a>
                    <a href="/artist/dan-hobday" className="artist-item"><img src="/assets/images/gallary4.webp" alt="Dan Hobday" /><span className="artist-label">Dan Hobday</span></a>
                    <a href="/artist/eleanor-baker" className="artist-item"><img src="/assets/images/gallary5.webp" alt="Eleanor Baker" /><span className="artist-label">Eleanor Baker</span></a>
                    <a href="/artist/edward-hopper" className="artist-item"><img src="/assets/images/gallary1.webp" alt="Edward Hopper" /><span className="artist-label">Arty guava</span></a>
                  </div>
                </div>  
              </div>
            </NavDropdown>

            <Nav.Link href="/gallery-wall-sets" className="nav-item-custom">WALL DECOR COMBO</Nav.Link>

            {/* <NavDropdown title="CUSTOM ART" id="custom-art-drop" className="nav-item-custom dropdown-custom custom-art-dropdown">
              <div className="custom-art-mega-menu">
                <div className="custom-section">
                  <div className="custom-grid">
                    <a href="/custom/habitat" className="custom-item"><img src="/assets/images/gallary3.webp" alt="Habitat" /><span className="custom-label">Habitat</span></a>
                    <a href="/custom/streetscapes" className="custom-item"><img src="/assets/images/gallary1.webp" alt="E.Streetscapes" /><span className="custom-label">E.Streetscapes</span></a>
                    <a href="/custom/blush" className="custom-item"><img src="/assets/images/gallary4.webp" alt="Blush" /><span className="custom-label">Blush</span></a>
                    <a href="/custom/watercolour" className="custom-item"><img src="/assets/images/gallary5.webp" alt="Watercolour" /><span className="custom-label">Watercolour</span></a>
                    <a href="/custom/starry-night" className="custom-item"><img src="/assets/images/gallary2.webp" alt="Starry Night" /><span className="custom-label">Starry Night</span></a>
                  </div>
                </div>
              </div>
            </NavDropdown> */}

            <NavDropdown 
                title={<span onClick={() => window.location.href = '/shop-by-nook'} style={{ cursor: 'pointer' }}>STYLE YOUR</span>} 
                id="nook-drop" 
                className="nav-item-custom dropdown-custom nook-dropdown"
            >
              <div className="nook-menu-container">
                <NavDropdown.Item href="living-room" className="nook-item">Living Room Nook</NavDropdown.Item>
                <NavDropdown.Item href="/bedroom" className="nook-item">Bedroom Nook</NavDropdown.Item>
                <NavDropdown.Item href="/breakfast" className="nook-item">Breakfast Nook</NavDropdown.Item>
              </div>
            </NavDropdown>

            {/* UPDATED WISHLIST LINK WITH BADGE */}
            <Nav.Link href="/wishlist" className="nav-item-custom wishlist">
              WISHLIST <span className="heart">♥</span>
              {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </div>
  );
}

