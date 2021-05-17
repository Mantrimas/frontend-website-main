const getAccountsByCustomer = (id, callback) => {
    (
        async () => {
            const response = await fetch('https://localhost:44347/api/Account/bycustid/' + id, {
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

export default getAccountsByCustomer;
