// components/Plants.js
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';


const Plants = () => {
  const [plantData, setPlantData] = useState([]);
  const [clientToken, setClientToken] = useState('');

  useEffect(() => {
    const fetchClientToken = async () => {
      try {
        const clientTokenData = await getClientToken('YOUR-WEBSITE-URL', 'USER-IP-ADDRESS', 'YOUR_TREFLE_TOKEN');
        setClientToken(clientTokenData.token);
      } catch (error) {
        console.error('Error fetching client token:', error);
      }
    };

    fetchClientToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://trefle.io/api/v1/plants?token=QY1rFJmy7wKf6yXOUU1XyeEwpLuRBax8F8mpl7RsbYg&q=coconut');
        if (!response.ok) {
          throw new Error('Failed to fetch plant data');
        }
        const data = await response.json();
        setPlantData(data.data || []);
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    if (clientToken) {
      fetchData();
    }
  }, [clientToken]);
  // Function to shuffle array elements randomly
  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Render Swiper component with shuffled plant images
  const renderSwiper = () => {
    const shuffledPlantData = shuffleArray(plantData);
    return (
      <Swiper spaceBetween={10} slidesPerView={1}>
        {shuffledPlantData.map((plant, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image src={plant.image_url} alt={plant.common_name} className="w-full h-64 object-cover" />
              <p>{plant.common_name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Plants</h2>
      {renderSwiper()}
    </div>
  );
};

export default Plants;
