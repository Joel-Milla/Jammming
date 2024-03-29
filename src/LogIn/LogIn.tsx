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
        const client_id = 'da44360f76c0420d91b54a9f7277d76e';
        const redirect_uri = 'https://jammming-fe-project.netlify.app';

        const state = generateRandomString(16);
        const scope = 'user-read-private playlist-modify-private playlist-modify-public';
        localStorage.setItem('stateKey', state);

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