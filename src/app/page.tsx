import { Card } from "@/components";
import { restaurantData } from "@/utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[500px]">
        <section
          className="w-full h-full py-16 px-4 sm:px-10 text-center absolute -top-24 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url('/assets/home-page-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-germania text-black">
              Home &gt; <span className="text-black">Hosts</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base font-semibold text-gray-800">
              Reference site about Lorem Ipsum, giving information on its origins,
            </p>
          </div>

          <div className="hidden sm:block absolute top-1/2 right-8 translate-y-1/2">
            <button className="bg-red-700 text-white px-10 py-2 rounded-tl-lg rounded-tr-lg -rotate-90 origin-top-right text-sm">
              Book Now
            </button>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 p-8 pb-20 sm:p-10 max-w-7xl mx-auto">
        {restaurantData.map((chef) => (
          <Card key={chef.id} data={chef} />
        ))}
      </div>
    </div>
  );
}

