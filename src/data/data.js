const data = async (req, res) => {
    const url = 'https://api.npoint.io/eaed357df570960d2538';

    const characters = await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            const filters = req.query;
            const values = Object.values(json);
            const filtered = values.filter((event) => {
                let exists = true;
                for (let key in filters) {
                    exists = exists && event[key] == filters[key];
                }
                return exists;
            });
            res.json(filtered);
        })
        .catch((err) => {
            console.error(`Error: ${err.message}`)
        });

    return characters;
}

export default data;