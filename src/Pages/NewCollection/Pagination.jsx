

import React from 'react';

const Pagination = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  if (totalPages <= 1) return null; // Don't show if only one page

  // Logic for generating pagination buttons (1, 2, 3, ..., N)
  const pageNumbers = [];
  const maxPagesToShow = 3;
  
  for (let i = 1; i <= Math.min(totalPages, maxPagesToShow); i++) {
    pageNumbers.push(i);
  }

  // If more than maxPagesToShow, add ellipsis and the last page
  if (totalPages > maxPagesToShow) {
    if (pageNumbers[pageNumbers.length - 1] < totalPages - 1) {
        pageNumbers.push('...');
    }
    // Only add the last page if it's not already visible
    if (!pageNumbers.includes(totalPages)) {
        pageNumbers.push(totalPages);
    }
  }

  // --- Style Definitions (Inline for single-file component) ---
  const paginationStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "40px",
    marginBottom: "20px",
    fontSize: "16px",
    fontFamily: "inherit",
    fontWeight: "500",
  };

  const baseStyles = {
    padding: "8px 12px",
    borderRadius: "4px",
    textDecoration: "none",
    color: "#111",
    cursor: "pointer",
    transition: "background-color 0.2s",
    userSelect: "none",
  };

  const nextButtonStyles = {
    ...baseStyles,
    backgroundColor: "#b88a38", 
    color: "#fff",
    padding: "8px 16px",
    marginLeft: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    userSelect: "none"
  };

  return (
    <div className="pf_pagination_container" style={paginationStyles}>
      
      {Array.from(new Set(pageNumbers)).map((page, index) => {
        if (page === '...') {
          return <span key={index} style={{ color: "#aaa" }}>...</span>;
        }

        const isCurrent = page === currentPage;
        // Highlight active page with yellow/gold background
        const pageStyles = isCurrent 
            ? { ...baseStyles, backgroundColor: "gold", fontWeight: "bold" }
            : baseStyles;

        return (
          <span 
            key={index} 
            style={pageStyles}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        );
      })}

      {/* Next Button */}
      <div 
        style={{ 
            ...nextButtonStyles,
            // Visually disable if on the last page
            opacity: currentPage === totalPages ? 0.5 : 1,
            cursor: currentPage === totalPages ? 'default' : 'pointer'
        }}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        &gt;
      </div>
    </div>
  );
};

export default Pagination;