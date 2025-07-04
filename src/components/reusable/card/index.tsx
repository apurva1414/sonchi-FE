import { CardData } from '@/utils/types';
import Image from 'next/image';
import {
  FaMapMarkerAlt,
  FaUser,
  FaUtensils,
  FaStar,
  FaArrowRight,
  FaInfoCircle
} from 'react-icons/fa';

const Card = ({ data }: { data: CardData }) => {
  return (
    <div className="relative rounded-tr-3xl rounded-bl-3xl shadow-card-shadow w-full max-w-sm hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative w-full h-48">
        <Image
          src={data.image || "/assets/restu.png"}
          alt={data.name}
          fill
          className="object-cover rounded-tr-3xl -mr-10"
        />
        <span className="absolute bottom-0 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded-tl">
          ₹{data.discount} OFF
        </span>
      </div>

      <div className="p-4 space-y-2 text-sm text-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{data.name}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <FaStar className="text-base" />
            {data.rating.toFixed(1)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>{data.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaUtensils />
          <span>{data.cuisine}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaInfoCircle />
          <p className="truncate" title={data.description}>{data.description}</p>
        </div>
      </div>

      <button className="absolute z-10 -bottom-3 -right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-md rounded-tl-none shadow">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Card;