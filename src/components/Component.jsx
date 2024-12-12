import React, { useId } from "react"
function Component({Amount,ConvertedAmount,
  From,
  To,
  options=[],
  onCurrencychange,
  onAmountchange,
  onConvertedcurrencychange,
  convert,
currencyDisabled=false,
AmountDisabled=false,

//this is for if user wants to ad some class externally
className=""}){
  const Amountinputid=useId()
  const ConvertedAmountinputid=useId()
  return(
  <div className={`min-h-screen bg-image bg-cover bg-lime-500 ${className}`}>
    {console.log(options)}
    <div className="mx-50  pt-40 text-center">
      <h1 className="text-4xl">Currency Converter</h1></div>
      <div className="rounded-1  grid grid-cols-12 mx-50 bg-amber-700 ">
    <div className="col-span-2"><h1 className="text-white p-5">From</h1></div>
    <div className="col-span-10 ml-30 mr-10 mt-4">
    <select className="rounded pr-10 bg-gray-300 cursor-pointer outline-none"
      value={From}
      onChange={(e)=>onCurrencychange && onCurrencychange(e.target.value)}
      disabled={currencyDisabled}>
    {
      options.map((keys)=>(<option key={keys} value={keys}>{keys}</option>
      
      ))}
      </select>
      </div>
      
      <div className=" pl-20 col-span-6">
        <label htmlFor={Amountinputid}>Amount</label>
      <input className="outline-none w-full bg-transparent" 
      id={Amountinputid}
      type="number"
      value={Amount}
      placeholder="Amount" 
      onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}/>
      </div>
      {console.log({From})}
  </div>
  <div className=" rounded-1 grid grid-cols-12 mx-50 bg-fuchsia-500 ">
    <div className="col-span-2"><h1 className="text-white p-5">To</h1></div>
    <div className="col-span-8 ml-30 mr-10 mt-4">
    <select className="rounded pr-10 bg-gray-300 cursor-pointer outline-none"
    value={To}
    onChange={(e)=>{onConvertedcurrencychange && onConvertedcurrencychange(e.target.value)}}
    disabled={currencyDisabled}
    >
   {
    // React's Expectations: React expects each element you render (like in a <select> or any list of components) to be a valid React element. If the function you pass to map does not return a value, React won't have anything to render for that iterationin code: options.map((keys)=>{<option  value={keys}>{keys}</option}).
      options.map((keys)=>(<option key={keys} value={keys}>{keys}</option>
      
      ))}
      </select>
      </div>
      <div className=" pl-20 col-span-6">
      <label className="" htmlFor={ConvertedAmountinputid}>ConvertedAmount</label>
      <input className=" outline-none w-full bg-transparent" 
      id={ConvertedAmountinputid}
      type="number"
      value={ConvertedAmount}
      placeholder="ConvertedAmount" 
      onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
    />
    </div>

  </div>
  <div className="mx-50 text-center text-3xl ">
  <button type="submit" 
  className="appearance-none rounded  px-40 bg-red-400 text-white font-bold py-2 "
  onClick={(e)=>{convert && convert()}}>
  Button
</button>  
    </div>
  </div>
  );
}
export default Component;