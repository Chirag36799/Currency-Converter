function CalculateAmount(To,Amount,Data){
  return (Number(Data[To].value *Amount));
}
export {CalculateAmount}