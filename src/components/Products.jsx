import React, { useState } from "react";

const products = [
  { id: 1, image: "pic1.jpeg", description: "Elegant black stilettos for every occasion.", price: "₱1,500" },
  { id: 2, image: "pic2.jpg", description: "Stylish red stilettos that turn heads.", price: "₱1,800" },
  { id: 3, image: "pic3.jpg", description: "Sleek silver stilettos with a modern design.", price: "₱2,000" },
  { id: 4, image: "pic4.jpg", description: "Comfortable nude stilettos for all-day wear.", price: "₱1,600" },
  { id: 5, image: "pic5.jpg", description: "Classic white stilettos perfect for formal events.", price: "₱2,200" },
  { id: 6, image: "pic6.jpg", description: "Chic gold stilettos for a glamorous look.", price: "₱1,900" },
  { id: 7, image: "pic7.jpg", description: "Trendy blue stilettos for casual outings.", price: "₱1,700" },
  { id: 8, image: "pic8.jpg", description: "Bold green stilettos for adventurous spirits.", price: "₱1,800" },
  { id: 9, image: "pic9.jpg", description: "Charming pink stilettos for a feminine touch.", price: "₱1,600" },
  { id: 10, image: "pic10.jpg", description: "Unique patterned stilettos for a standout style.", price: "₱2,100" },
  { id: 11, image: "pic11.jpg", description: "Elegant purple stilettos for sophisticated tastes.", price: "₱2,300" },
  { id: 12, image: "pic12.jpg", description: "Sassy yellow stilettos for a cheerful vibe.", price: "₱1,900" },
  { id: 13, image: "pic13.jpg", description: "Dazzling metallic stilettos for parties.", price: "₱2,400" },
];

const Products = () => {
  const [clickedProducts, setClickedProducts] = useState({});

  const handleAddToCart = (productId) => {
    setClickedProducts((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };

  return (
    <section
      id="products"
      className="min-h-screen bg-maroon text-black py-16 px-8"
      style={{ backgroundColor: "#800000" }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black p-4 rounded shadow-lg hover:shadow-xl transition"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-64 object-cover rounded mb-4"
              />
              {/* Product Description */}
              <p className="text-lg font-semibold">{product.description}</p>
              {/* Product Price */}
              <p className="text-xl font-bold mt-2">{product.price}</p>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product.id)}
                className={`mt-4 w-full py-2 px-4 rounded ${
                  clickedProducts[product.id]
                    ? "bg-green-500 text-white"
                    : "bg-red-200 text-black hover:bg-gray-300"
                } transition`}
                disabled={clickedProducts[product.id]} // Disable button after clicking
              >
                {clickedProducts[product.id] ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
