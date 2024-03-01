// External libraries
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Own style
import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <>
            <Form className='mb-4'>
                <Row className={styles.row_search}>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
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