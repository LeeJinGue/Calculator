import React from 'react'
import CalculatorPage from '../../components/CalculatorPage';
import HomeLayout from '../../components/common/@Layout/HomeLayout';
import Header from '../../components/header';

const Calculator:React.FC = () => {
  return (
    <HomeLayout header={<Header />} title="계산기 페이지 입니다." content={<CalculatorPage />} />
  )
}
export default Calculator;