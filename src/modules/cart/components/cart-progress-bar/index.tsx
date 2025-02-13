import React from 'react';

const CartProgressBars = ({ currentAmount = 0 }) => {
  return (
    <div className="relative flex items-center justify-between gap-2 px-8 text-xs text-black lg:px-10">
      {currentAmount > 1 && (
        <>
          <div className="h-2 w-full overflow-hidden rounded-lg bg-[#C4C4C4]">
            <div
              className="h-full bg-[#008080]"
              style={{ width: `${Math.min((currentAmount / 200) * 100, 100)}%` }}
            />
          </div>
          <div className="relative">
            <span className="absolute -left-[6px] -top-[18px] font-normal">€200</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <span className="absolute -bottom-[36px] -left-[14px] text-center font-normal">FREE Shipping</span>
          </div>
        </>
      )}

      {currentAmount > 1 && (
        <>
          <div className="h-2 w-full overflow-hidden rounded-lg bg-[#C4C4C4]">
            <div
              className={`h-full ${currentAmount >= 200 ? "bg-[#008080]" : "bg-transparent"}`}
              style={{ 
                width: `${currentAmount < 400 
                  ? Math.min((currentAmount / 400) * 100, 100)
                  : 100}%` 
              }}
            />
          </div>
          <div className="relative">
            <span className="absolute -left-2 -top-[20px] font-normal">
              €{currentAmount < 400 ? 400 : Math.floor(currentAmount / 400) * 400}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              stroke="#000"
            >
              <path d="M316.9 157.8H195.1c-48 0-87.1 39.1-87.1 87.1v235.7c0 11.3 9.1 20.4 20.4 20.4h255.2c11.3 0 20.4-9.1 20.4-20.4V244.9c0-48-39-87.1-87.1-87.1zm-121.8 40.8H317c25.5 0 46.3 20.8 46.3 46.3v41.5H148.8v-41.5c0-25.5 20.8-46.3 46.3-46.3zm-46.3 261.6v-133h214.4v132.9H148.8zM182.6 132.1h149.2c11.3 0 20.4-9.1 20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4H182.6c-11.3 0-20.4 9.1-20.4 20.4v80.3c0 11.3 9.1 20.4 20.4 20.4zM203 51.8h108.4v39.5H203V51.8z" />
            </svg>
            <span className="absolute -bottom-[36px] -left-[28px] whitespace-nowrap text-center font-normal">
              FREE<br />
              Bac Water x{currentAmount < 400 ? 1 : Math.floor(currentAmount / 400)}
            </span>
          </div>
        </>
      )}

      {currentAmount >= 400 && (
        <>
          <div className="h-2 w-full overflow-hidden rounded-lg bg-[#C4C4C4]">
            <div
              className="h-full bg-[#008080]"
              style={{ 
                width: `${Math.min(
                  ((currentAmount % 400) / 400) * 100,
                  100
                )}%`
              }}
            />
          </div>
          <div className="relative">
            <span className="absolute -left-2 -top-[20px] font-normal">
              €{Math.ceil(currentAmount / 400) * 400}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path d="M316.9 157.8H195.1c-48 0-87.1 39.1-87.1 87.1v235.7c0 11.3 9.1 20.4 20.4 20.4h255.2c11.3 0 20.4-9.1 20.4-20.4V244.9c0-48-39-87.1-87.1-87.1zm-121.8 40.8H317c25.5 0 46.3 20.8 46.3 46.3v41.5H148.8v-41.5c0-25.5 20.8-46.3 46.3-46.3zm-46.3 261.6v-133h214.4v132.9H148.8zM182.6 132.1h149.2c11.3 0 20.4-9.1 20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4H182.6c-11.3 0-20.4 9.1-20.4 20.4v80.3c0 11.3 9.1 20.4 20.4 20.4zM203 51.8h108.4v39.5H203V51.8z" />
            </svg>
            <span className="absolute -bottom-[36px] -left-[28px] whitespace-nowrap text-center font-normal">
              FREE<br />
              Bac Water x{Math.floor(currentAmount / 400) + 1}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartProgressBars;