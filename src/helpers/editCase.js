const editCase = (decision) => {
    (
        async () => {
            const response = await fetch('https://localhost:44347/api/Case', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                credentials: 'include',
                body: JSON.stringify(decision)
            });

            if(!response.ok) {
                console.log("Creating comment failed");
            }
        }
    )();
};

export default editCase;