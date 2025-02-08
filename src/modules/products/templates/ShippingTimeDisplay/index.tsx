"use client"

import React, { useState, useEffect } from 'react';

const ShippingTimeDisplay = () => {
  const [shippingInfo, setShippingInfo] = useState({
    day: "today",
    hours: 4,
    minutes: 30
  });

  useEffect(() => {
    // Define possible shipping options
    const shippingOptions = [
      { day: "today", hours: 4, minutes: 35 },
      { day: "today", hours: 4, minutes: 15 },
      { day: "tomorrow", hours: 5, minutes: 20 },
      { day: "tomorrow", hours: 4, minutes: 45 },
      { day: "Monday", hours: 4, minutes: 30 },
      { day: "Monday", hours: 5, minutes: 0 }
    ];

    // Randomly select an option
    const randomOption = shippingOptions[Math.floor(Math.random() * shippingOptions.length)];
    setShippingInfo(randomOption);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <span className="text-ui-fg-base text-base ml-2">
      <span className="font-normal">Ships </span>
      <span className="font-semibold">{shippingInfo.day}</span>
      <span className="font-normal"> if ordered within </span>
      <span className="font-semibold">
        {shippingInfo.hours} hrs {shippingInfo.minutes > 0 ? `${shippingInfo.minutes} min` : ''}
      </span>
    </span>
  );
};

export default ShippingTimeDisplay;