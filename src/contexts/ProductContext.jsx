





import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;