// External libraries
import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Own style
import styles from './SearchBar.module.css'
// Types
import { SearchProperties } from '../Models/models';

function SearchBar(properties: SearchProperties) {
    const { searchFunction } = properties;

    const [query, setQuery] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchFunction(query);
        setQuery('');
    }

    return (
        <>
            <Form className='mb-4' onSubmit={handleSubmit}>
                <Row className={styles.row_search}>
                <Col xs="auto">
                    <Form.Control
                    onChange={handleChange}
                    value={query}
                    type="text"
                    placeholder="Search track"
                    className="mb-2"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit">Search</Button>
                </Col>
                </Row>
            </Form>
        </>
    )
}

export default SearchBar;