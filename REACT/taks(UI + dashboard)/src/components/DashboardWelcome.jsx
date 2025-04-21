// components/WelcomeBanner.js
const DashboardWelcome = () => {
  return (
    <div className="flex items-center justify-around bg-green-100 p-6 rounded-xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back! FreshCart
        </h2>
        <p className="text-gray-600 mt-1">
          Simple & clean design for developers and designers.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded mt-3">
          Create Product
        </button>
      </div>
      <img
        src="https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg"
        alt="Fruits"
        className="w-52 rounded-lg hidden md:block"
      />
    </div>
  );
};

export default DashboardWelcome;
