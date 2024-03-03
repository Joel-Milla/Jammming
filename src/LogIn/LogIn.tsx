// External libraries
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function LogIn() {
    const generateRandomString = (length: number) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0; 
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const handleClick = () => {
        // IDs for application
        const client_id = 'a8d061cda90a4b31a37740b9eabe4c52';
        const redirect_uri = 'http://localhost:5173';

        const state = generateRandomString(16);
        localStorage.setItem('stateKey', state);
        const scope = 'user-read-private playlist-modify-private';

        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&state=' + encodeURIComponent(state);

        window.location.href = url;
    }

    return (
        <div className="text-center">
            <Image src='/spotify.svg' fluid />
            <br></br>
            <Button variant="primary" size='lg' onClick={handleClick}>Log In</Button>
        </div>
    )
}


export default LogIn;