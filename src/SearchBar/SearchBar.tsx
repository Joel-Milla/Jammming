import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <>
            <Form>
                <Row className={styles.row}>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit">Submit</Button>
                </Col>
                </Row>
            </Form>
        </>
    )
}

export default SearchBar;