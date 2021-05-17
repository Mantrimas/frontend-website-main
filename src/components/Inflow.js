import Container from 'react-bootstrap/Container';
import Chart from "react-google-charts";

import getTransactionData from '../helpers/getTransactionData';
import React, { useState, useEffect } from 'react';


const txType = {
  0: "Salary",
  1: "Cash deposit",
  2: "Transfer from person",
  3: "Transfer from company",
  4: "Investment return"
}

const Inflow = (props) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [salary, setSalary] = useState('');
  const [cashDeposit, setCashDeposit] = useState('');
  const [transferPerson, setTransferPerson] = useState('');
  const [transferCompany, setTransferCompany] = useState('');
  const [investmentReturn, setInvestmentReturn] = useState('');

  const setStates = (data) => {
    let sum = 0;
    let cashSum = 0;
    let transferPersonSum = 0;
    let transferCompanySum = 0;
    let investmentSum = 0;
    data.forEach(obj => {
      Object.keys(obj).forEach((key) => {
        if (key == "transactionType") {
          if (obj[key] == 0) {
          sum += obj['amount'];
          }
          else if (obj[key] == 1) {
            cashSum += obj['amount'];
          }
          else if (obj[key] == 2) {
            transferPersonSum += obj['amount'];
          }
          else if (obj[key] == 3) {
            transferCompanySum += obj['amount'];
          }
          else if (obj[key] == 4) {
            investmentSum += obj['amount'];
          }
        }
      });
    });
    setSalary(sum);
    setCashDeposit(cashSum);
    setTransferPerson(transferPersonSum);
    setTransferCompany(transferCompanySum);
    setInvestmentReturn(investmentSum);
    setContent(data);
  }

  useEffect(() => {
    if (!content) {
      getTransactionData(props.custId, setStates);
    }
    else {
      setLoading(false);
    }
  });

  if (loading) {
    return "Loading...";
  } else {
    return (
      <Container className="p-3" style={{
        marginTop: "2.5vw",
        backgroundColor: "#add8e669",
        color: "#17a2b8"
      }}>
        Inflow overview

        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            [txType[0], salary],
            [txType[1], cashDeposit],
            [txType[2], transferPerson],
            [txType[3], transferCompany],
            [txType[4], investmentReturn],
          ]}
          options={{
            title: 'Inflow funds (EUR)',
            backgroundColor: '#17a2b8',
            titleTextStyle: {
              color: 'lightcyan'
            }
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </Container>
    );
  }
}

export default Inflow;
