const logout = (callback) => {
    (
        async () => {
            const response = await fetch('https://localhost:44347/api/AuthManagement/Logout', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                credentials: 'include'
            });

            if (response.ok) {
                callback();
            }
        }
    )();
};

export default logout;
