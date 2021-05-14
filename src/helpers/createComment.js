const createComment = (comment) => {
    (
        async () => {
            const response = await fetch('https://localhost:44347/api/CaseComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                credentials: 'include',
                body: JSON.stringify(comment)
            });

            if(!response.ok) {
                console.log("Creating comment failed");
            }
        }
    )();
};

export default createComment;