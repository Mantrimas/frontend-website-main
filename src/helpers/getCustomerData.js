const getCustomerData = (id, callback) => {
    (
        async () => {
            const response = await fetch('https://localhost:44347/api/Customer/' + id, {
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

export default getCustomerData;