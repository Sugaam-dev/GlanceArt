

import React, { useState, useMemo, useEffect } from "react";
import "./ProductFilterSection.css";
import ProductCard from "../../Components/ProductGrid/ProductCard.jsx";
// import ProductCard from "./ProductCard.jsx";
import Pagination from "./Pagination.jsx"; 
import { useNavigate } from "react-router-dom";

// CONSTANTS
const PRODUCTS_PER_PAGE = 12;

const ProductFilterSection = (props) => {
  // --- State Management ---
  const [productsData, setProductsData] = useState([]); // Stores API results
  const [isLoading, setIsLoading] = useState(true);     // Tracks loading status
  const [error, setError] = useState(null);             // Tracks fetch errors
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState('Featured');
  const navigate = useNavigate(); // Initialize useNavigate hook 

  // --- Data Fetching (API Integration) ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Replace this URL with your actual backend endpoint
        // It passes the category prop as a query parameter
        // new
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/?category=${props.category}`)
        // old

        // const response = await fetch(`http://127.0.0.1:8000/products?category=${props.category}`);
        // const response = await fetch(`http://127.0.0.1:8000/products/`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch products from the server.");
        }
        
        const data = await response.json();
        setProductsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [props.category]); // Re-runs whenever the category prop changes

  // --- Sorting Logic ---
  const getSortedProducts = (products, type) => {
    const sortedProducts = [...products].map(p => ({
      ...p,
      price: typeof p.price === 'string' ? parseFloat(p.price) : p.price, 
    }));

    switch (type) {
      case 'Price: Low to High':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'Price: High to Low':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'Newest':
        // Assuming your SQL data has an auto-increment ID or created_at
        return sortedProducts.sort((a, b) => b.id.localeCompare(a.id));
      case 'Featured':
      default:
        return sortedProducts; 
    }
  };

  // --- Memoized Sorting & Pagination ---
  const allProducts = useMemo(() => {
    setCurrentPage(1); // Reset to page 1 on new data/sort
    return getSortedProducts(productsData, sortType);
  }, [productsData, sortType]);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

  // --- Handlers ---
  const handlePageChange = (pageNumber) => {
    if (pageNumber === '...') return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' }); 
  };
  
  const handleSortChange = (event) => {
      setSortType(event.target.value);
  };
  const handleOpenProduct = (product) => {
    // Navigates to the new route, passing the product data in the state object
    navigate(`/product/${product.slug}`, { state: { productData: product } });
  };

  // --- Conditional Rendering for Loading/Error ---
  if (isLoading) return <div className="pf_loading">Loading {props.category} Art...</div>;
  if (error) return <div className="pf_error">Error: {error}</div>;

  return (
    <div className="pf_container_main">

      {/* OVERLAY / SIDEBAR */}
      <div
        className={`pf_sidebar_overlay ${isSidebarOpen ? "pf_sidebar_overlay_show" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div className={`pf_sidebar ${isSidebarOpen ? "pf_sidebar_open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="pf_sidebar_header">
          <h2 className="pf_sidebar_title">FILTER</h2>
          <button className="pf_sidebar_close_btn" onClick={() => setIsSidebarOpen(false)}>×</button>
        </div>
        <div className="pf_sidebar_options">
          {["PRIMARY COLOUR", "SECONDARY COLOUR", "ORIENTATION", "SIZE", "FRAME", "PRICE", "MATERIAL"].map((item, index) => (
            <div className="pf_sidebar_option_row" key={index}>
              <span className="pf_sidebar_option_label">{item}</span>
              <span className="pf_sidebar_option_icon">⌄</span>
            </div>
          ))}
        </div>
      </div>

      {/* TOP FILTER BAR */}
      <div className="pf_topbar">
        {/* <button className="pf_filter_btn" onClick={() => setIsSidebarOpen(true)}>
          <span className="pf_filter_icon">☰</span> Filter
        </button> */}
        <div>Category</div>

        <div className="pf_product_count">
            <strong>{props.category}</strong>: {allProducts.length} products
        </div>

        <div className="pf_sort_dropdown">
          <select className="pf_sort_select" value={sortType} onChange={handleSortChange}>
            <option value="Featured">Featured</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            {/* <option value="Newest">Newest</option> */}
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="pf_products_grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard product={product} key={product.slug} onOpen={handleOpenProduct} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Pagination 
          totalProducts={allProducts.length}
          productsPerPage={PRODUCTS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProductFilterSection;