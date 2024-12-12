import { useEffect, useState} from "react";
import React from 'react';
import {currencyInfo} from "./utility/currencyInfo.js";
import { CalculateAmount } from "./utility/CalculateAmount.js";
 import Component from "./components/Component.jsx"
// var data;
// useEffect(async()=>{
//   data=await currencyInfo(currency);
//   ConvertedAmount=CalculateAmount(currencyConverted,Amount,data);
// },[currency,Amount])
// const options=Object.keys(data);
function App() {
  
const [Amount,setAmount]=useState(0)
const[From,setFrom]=useState("USD");
const[To,setTo]=useState("INR");
const[ConvertedAmount,setConvertedAmount]=useState(0);
var object=currencyInfo(From);
console.log(object);
const options=Object.keys(object)
console.log(options)
const currencyDisabled=false;
const AmountDisabled=false;
var currency;
var convertedcurrency;
const onCurrencychange=(currency)=>{
  setFrom(currency)
}
const onConvertedcurrencychange=
(convertedcurrency)=>{
  setTo(convertedcurrency)
}
function onAmountchange(amount){
  setAmount(amount)
}
function convert(){
  setConvertedAmount((object[To].value)*Amount);
}

// useEffect(()=>{
//   DATA=currencyInfo(From);
//   setoptions(Object.keys(DATA));
//   setConvertedAmount(CalculateAmount(To,Amount,Data));
// },[setFrom,setTo,Amount])
//let [amount,setAmount]=useState(0)
//   let [currency,setCurrency]=useState("usd")
// let [Currencyconverted,setCurrencyconverted]=useState("inr")
// useEffect(()=>{
//   let temp=currency
//   setCurrency(Currencyconverted)
//   setCurrencyconverted(temp)
// },[currency])

  return (<>
  <Component Amount={Amount}
   ConvertedAmount={ConvertedAmount} From={From} To={To}
    options={options}
    onCurrencychange={(currency)=>{setFrom(currency)}}
    onAmountchange={(amount)=>{setAmount(amount)}}
    onConvertedcurrencychange={(convertedcurrency)=>{setTo(convertedcurrency)}}
    currencyDisabled={currencyDisabled}
    AmountDisabled={AmountDisabled}
    convert={()=>{setConvertedAmount((object[To].value)*Amount);}} />
  
  </>
)
}

export default App;

