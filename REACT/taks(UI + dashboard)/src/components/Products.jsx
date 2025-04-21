const Products = ({ productList }) => {
  return (
    <div className="flex">
      {/* This div acts as 20% left spacing */}
      <div className="w-[25%]"></div>

      {/* Main Products Section */}
      <div className="w-[80%] mb-10 ml-auto">
        {productList.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {productList.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md hover:border-green-500 transition duration-300"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-2"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-xl font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
