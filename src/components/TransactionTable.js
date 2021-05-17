import { MDBDataTable } from 'mdbreact';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import getTransactionData from '../helpers/getTransactionData';
import getAccountNumber from '../helpers/getAccountNumber';

const txType = {
  0: "Salary",
  1: "Cash deposit",
  2: "Transfer from person",
  3: "Transfer from company",
  4: "Investment return"
}

const DatatablePage = (props) => {
  const [tableData, setTableData] = useState('');
  const [loading, setLoading] = useState(true);

  const setStates = (content) => {
    setTable(content);
  }

  const setTable = (transactions) => {
    transactions.forEach(obj => {
      Object.keys(obj).forEach((key) => {
        if (key == "accountId") {
          let testukas = '';
          const accountId = (result) => {
            testukas = result.accountNumber;
            obj[key] = testukas;
            setLoading('true');
          }
          getAccountNumber(obj[key], accountId)
        }
        if (key == "date") {
          obj[key] = obj[key].split("T")[0]
        }
        if (key == "transactionType") {
          obj[key] = txType[obj[key]];
        }
      });
    });

    const data = {
      columns: [
        {
          label: 'Date',
          field: 'date',
          sort: 'dsc',
          width: 150
        },
        {
          label: 'Amount',
          field: 'amount',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Details',
          field: 'details',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Transaction type',
          field: 'transactionType',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Account number',
          field: 'accountId',
          sort: 'asc',
          width: 150
        }
      ],
      rows: transactions
    };
    
    setTableData(data);
  }

  useEffect(() => {
    if (!tableData) {
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
      <MDBDataTable
        striped
        bordered
        small
        sortRows={['date']}
        data={tableData}
      />
    );
  }
}

export default withRouter(DatatablePage);