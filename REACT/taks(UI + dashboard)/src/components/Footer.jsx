export default function Footer() {
  return (
    <footer className="bg-[#00272D] text-gray-300 px-4 md:px-16 py-10 bottom-0 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm">
        {/* FreshCart Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-green-500 text-2xl">🛒</span>
            <h1 className="text-xl font-bold text-white">FreshCart</h1>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-white mb-2">Categories</h3>
          <ul className="space-y-1">
            <li>Vegetables & Fruits</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, rice & dal</li>
            <li>Organic & gourmet</li>
            <li>Personal care</li>
          </ul>
        </div>

        {/* Get to know us */}
        <div>
          <h3 className="font-semibold text-white mb-2">Get to know us</h3>
          <ul className="space-y-1">
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* For Consumers */}
        <div>
          <h3 className="font-semibold text-white mb-2">For Consumers</h3>
          <ul className="space-y-1">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Become a Shopper */}
        <div>
          <h3 className="font-semibold text-white mb-2">Become a Shopper</h3>
          <ul className="space-y-1">
            <li>Opportunities</li>
            <li>Earnings</li>
            <li>New Retailers</li>
          </ul>
        </div>

        {/* FreshCart Programs */}
        <div>
          <h3 className="font-semibold text-white mb-2">Freshcart programs</h3>
          <ul className="space-y-1">
            <li>Gift Cards</li>
            <li>Promos</li>
            <li>Ads</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2022 - 2025 FreshCart. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-white">Payment Partners:</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
}
