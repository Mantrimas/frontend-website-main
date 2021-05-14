import getAccountNumber from './getAccountNumber';

const getTransactionData = (id, callback) => {
    (
        async () => {
            const response = await fetch('https://localhost:44347/api/Transaction/bycustid/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                credentials: 'include'
            });

            const content = await response.json();



            callback(content);
        }
    )();
};

export default getTransactionData;