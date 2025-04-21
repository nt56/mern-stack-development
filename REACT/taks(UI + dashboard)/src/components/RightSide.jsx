import { Star } from "lucide-react";

const RightSide = ({ productList }) => {
  return (
    <div className="space-y-10">
      {/* New Arrivals */}
      <section>
        <h2 className="text-lg font-semibold mb-2">New Arrivals</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {productList.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[200px] border rounded-xl p-4 text-center space-y-2 relative  hover:border-green-500 transition duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-20 mx-auto"
              />
              <p className="text-sm font-medium">{item.title}</p>
              <div className="text-sm font-semibold">
                ${item.price}{" "}
                <span className="line-through text-gray-400 text-xs">
                  ${item.price}
                </span>
              </div>
              <div className="flex items-center justify-center text-yellow-500 text-sm">
                {[...Array(productList.lenght)].map((_, i) => (
                  <Star key={i} size={14} fill={i < 4 ? "#facc15" : "none"} />
                ))}
                <span className="ml-1 text-gray-600 text-xs">
                  {item.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deal of the Day */}
      <section>
        <h2 className="text-lg font-semibold">Deal of the day</h2>
        <p className="text-sm text-gray-600 mb-4">
          Brings to users an array of discounts on a variety
        </p>
        <div className="border border-red-400 rounded-xl p-4 flex gap-6 items-center">
          <img
            src="product-img-2.jpg"
            alt="Deal"
            className=" w-[30%] object-contain"
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < 4 ? "#facc15" : "none"} />
              ))}
              <span className="ml-1 text-gray-600 text-xs">4.3</span>
            </div>
            <h3 className="text-md font-semibold">NutriChoice Digestive</h3>
            <div className="text-sm">
              <span className="text-green-600 font-bold text-lg">$24</span>{" "}
              <span className="line-through text-gray-400 text-sm">$24</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
              + Add to cart
            </button>
            <div className="text-sm text-gray-700">
              Already Sold: <span className="font-bold text-red-500">45</span> |{" "}
              Available: <span className="font-bold text-green-600">10</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-red-500 h-full"
                style={{ width: "81%" }} // (45/(45+10))*100
              ></div>
            </div>
            {/* Countdown */}
            <div className="text-xs text-gray-700 mt-2">
              <strong>Hurry up</strong> offer ends soon
              <div className="flex gap-4 mt-1">
                <div className="bg-white shadow rounded-lg px-3 py-2 text-center">
                  <div className="text-md font-bold">1268</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="bg-white shadow rounded-lg px-3 py-2 text-center">
                  <div className="text-md font-bold">3</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="bg-white shadow rounded-lg px-3 py-2 text-center">
                  <div className="text-md font-bold">44</div>
                  <div className="text-xs">Mins</div>
                </div>
                <div className="bg-white shadow rounded-lg px-3 py-2 text-center">
                  <div className="text-md font-bold">50</div>
                  <div className="text-xs">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-red-100  p-4 rounded-md mt-4 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-red-700 font-medium text-sm sm:text-base">
            First time here? Get 10% off your first order!{" "}
            <span className="underline cursor-pointer">Click here</span>
          </p>
          <button className="border border-dashed border-red-500 text-red-600 px-4 py-2 rounded-md hover:bg-red-200 transition duration-200 text-sm sm:text-base">
            FIRSTTIME10
          </button>
        </div>
      </section>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">New Arrivals</h1>
        <button className=" rounded-md bg-gray-100 text-black px-4 py-2">
          View All
        </button>
      </div>
    </div>
  );
};

export default RightSide;
