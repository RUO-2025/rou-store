"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@medusajs/ui';
import { addToCart } from "@lib/data/cart";
import { useParams } from "next/navigation";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdding, setIsAdding] = useState({});
  const countryCode = useParams().countryCode as string;

  const products = [
    {
      id: 1,
      name: 'VIP',
      strength: '5mg',
      image: '/VIP.avif',
      variant: {
        id: "variant_01",
        inventory_quantity: 10,
        manage_inventory: true,
        allow_backorder: false,
        prices: [
          {
            amount: 6299,
            currency_code: "usd",
            region_id: "reg_01"
          }
        ],
        original_price: 6299,
        calculated_price: 6299,
        original_tax: 0,
        calculated_tax: 0,
        tax_rates: null
      },
      inStock: true,
      isValidVariant: true
    },
    {
      id: 2,
      name: 'Tirzepatide',
      strength: '10mg',
      image: '/Tirzepatide.avif',
      variant: {
        id: "variant_02",
        inventory_quantity: 10,
        manage_inventory: true,
        allow_backorder: false,
        prices: [
          {
            amount: 19999,
            currency_code: "usd",
            region_id: "reg_01"
          }
        ],
        original_price: 19999,
        calculated_price: 19999,
        original_tax: 0,
        calculated_tax: 0,
        tax_rates: null
      },
      inStock: true,
      isValidVariant: true
    },
    {
      id: 3,
      name: 'Thymosin Alpha-1',
      strength: '10mg',
      image: '/Thymosin.avif',
      variant: {
        id: "variant_03",
        inventory_quantity: 10,
        manage_inventory: true,
        allow_backorder: false,
        prices: [
          {
            amount: 11699,
            currency_code: "usd",
            region_id: "reg_01"
          }
        ],
        original_price: 11699,
        calculated_price: 11699,
        original_tax: 0,
        calculated_tax: 0,
        tax_rates: null
      },
      inStock: true,
      isValidVariant: true
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % products.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProducts = () => {
    const firstIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % products.length;
    return [products[firstIndex], products[secondIndex]];
  };

  const formatPrice = (amount: number) => {
    return (amount / 100).toFixed(2);
  };

  const handleAddToCart = async (product) => {
    if (!product.variant?.id) return null;
    setIsAdding(prev => ({ ...prev, [product.id]: true }));
    
    try {
      await addToCart({
        variantId: product.variant.id,
        quantity: 1,
        countryCode,
      });
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setIsAdding(prev => ({ ...prev, [product.id]: false }));
    }
  };

  const checkInStock = (product) => {
    const variant = product.variant;
    if (!variant) return false;
    if (!variant.manage_inventory || variant.allow_backorder) {
      return true;
    }
    return (variant.inventory_quantity ?? 0) > 0;
  };

  return (
    <div className="w-full pb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">You May Also Like</h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full border hover:bg-gray-100"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full border hover:bg-gray-100"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {getVisibleProducts().map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg border">
            <div className="flex items-start gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.strength}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold">${formatPrice(product.variant.calculated_price)}</span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdding[product.id] || !product.isValidVariant || !checkInStock(product)}
                    className="w-auto h-10 bg-[#008080] text-white px-6 py-2 rounded-xl hover:bg-teal-600 font-medium flex items-center justify-center gap-2"
                    isLoading={isAdding[product.id]}
                    data-testid="add-product-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    {isAdding[product.id] ? "Adding..." : "Add to cart"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;