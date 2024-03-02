

const fetchAccessToken = async () => {
    // Endpoint to reach the API
    const url = 'https://accounts.spotify.com/api/token';
    // IDs for application
    const client_id = 'a8d061cda90a4b31a37740b9eabe4c52';
    const client_secret = '1c8fa7d121694959bc1dc75d4c282f12';
    // Headers for request
    const content_type = 'application/x-www-form-urlencoded';
    // Encode the parameters as x-www-form-urlencoded
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);

    // Request information
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': content_type
        },
        body: params.toString(),
    };

    try {
        const response = await fetch(url, request)
        if (response.ok) {
            const json = response.json();
            return json;
        }
        throw new Error('Error while fetching access token');
    } catch(error) {
        console.log('Error while fetching access token: ', error)
    }
}

export default fetchAccessToken;