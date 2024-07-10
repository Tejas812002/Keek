import React from 'react'

const InvestmentStats = () => {

  return (
    <div class="flex items-center rounded-xl justify-around bg-white  p-8 mt-6 min-h-[100px]">
    <div class="text-center">
      <p class="text-sm mb-2 text-muted-foreground">Total Target</p>
      <p class="text-lg font-bold">$200,000</p>
    </div>
    <div class="text-center">
      <p class="text-sm mb-2 text-muted-foreground">Current Target</p>
      <p class="text-lg font-bold">$250,000</p>
    </div>
    <div class="text-center">
      <p class="text-sm mb-2 text-muted-foreground">Total Returns</p>
      <p class="text-lg font-bold text-green-500">+50,000 (25%)</p>
    </div>
    <div class="text-center">
      <p class="text-sm mb-2 text-muted-foreground">Total Loss</p>
      <p class="text-lg font-bold text-red-500">-5,000 (5%)</p>
    </div>
  </div>
  )
}

export default InvestmentStats