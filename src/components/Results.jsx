import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ input }) {

    let annualData = calculateInvestmentResults(input);
    const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
    console.log(annualData);
    
  return (
    <table id='result'>
      <thead className='center'>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => { 
            const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;

            const totalInvested = data.valueEndOfYear - totalInterest;
            return (<tr className='center' key={data.year} >
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvested)}</td>
        </tr>)
        })}
      </tbody>
    </table>
  )
}
