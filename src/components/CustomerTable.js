import { MDBDataTable } from 'mdbreact';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import getAllCustomers from '../helpers/getAllCustomers';

const CustomerTable = (props) => {
    const [tableData, setTableData] = useState('');
    const [ligma, setLigma] = useState('');
    const [loading, setLoading] = useState(true);

    const setStates = (content) => {
        setTable(content);
    }

    const setTable = (transactions) => {

        const data = {
            columns: [
                {
                    label: 'First name',
                    field: 'firstName',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Last name',
                    field: 'lastName',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Phone number',
                    field: 'phone',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Address',
                    field: 'address',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'National ID',
                    field: 'nationalId',
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
            getAllCustomers(setStates);
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
                data={tableData}
            />
        );
    }
}

export default withRouter(CustomerTable);