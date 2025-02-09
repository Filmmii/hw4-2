// Product object
const product = {
    id: "uniqueID",            // Product ID
    name: "สินค้า A",          // Product Name
    price: 500,                // Price
    inStock: 10,               // Stock Quantity
    category: "electronics",   // Product Category
    minStock: 5,               // Minimum Stock Required
    totalSales: 50,            // Total Sales
  };
  
  // Function to add a product
  function addProduct(productData) {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(productData);
      localStorage.setItem('products', JSON.stringify(products));
      displayProducts();
  }
  
  // Function to update stock
  function updateStock(productId, quantity) {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const product = products.find(p => p.id === productId);
      if (product) {
          product.inStock -= quantity;
          product.totalSales += quantity;
          localStorage.setItem('products', JSON.stringify(products));
          displayProducts();
      }
  }
  
  // Function to check low stock
  function checkLowStock() {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      return products.filter(p => p.inStock <= p.minStock);
  }
  
  // Function to generate sales report
  function generateSalesReport() {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      // Logic to generate and display report
  }
  
  // Function to display products
  function displayProducts() {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const productList = document.getElementById('productList');
      productList.innerHTML = '';
      products.forEach(p => {
          const li = document.createElement('li');
          li.textContent = `${p.name} - Price: ${p.price} - Stock: ${p.inStock}`;
          productList.appendChild(li);
      });
  }
  
  // Event listener for form submission
  document.getElementById('productForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const newProduct = {
          id: Date.now().toString(),
          name: document.getElementById('productName').value,
          price: parseFloat(document.getElementById('productPrice').value),
          inStock: parseInt(document.getElementById('productStock').value),
          category: document.getElementById('productCategory').value,
          minStock: 5,
          totalSales: 0,
      };
      addProduct(newProduct);
      this.reset();
  });