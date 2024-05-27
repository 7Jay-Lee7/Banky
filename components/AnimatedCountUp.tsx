"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCountUp = ({
  amount} : { amount: number
}) => {
  return (
    <div className="w-full">
      <CountUp 
        decimals={2}
        prefix="£"
        end={amount}
        decimal="."
        separator=","
       />
    </div>
  )
}

export default AnimatedCountUp