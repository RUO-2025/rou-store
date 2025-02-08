// hooks/useShippingTime.ts
"use client";

import { useState, useEffect } from 'react';

interface ShippingTime {
  day: string;
  hours: number;
  minutes: number;
}

const generateShippingTime = (): ShippingTime => {
  const days = ["Today", "Monday", "Tuesday"];
  return {
    day: days[Math.floor(Math.random() * days.length)],
    hours: Math.floor(Math.random() * 3) + 1, // 1-4 hours
    minutes: Math.floor(Math.random() * 60), // 0-59 minutes
  };
};

export const useShippingTime = () => {
  const [shippingTime, setShippingTime] = useState<ShippingTime>(generateShippingTime());

  useEffect(() => {
    setShippingTime(generateShippingTime());
  }, []);

  return shippingTime;
};