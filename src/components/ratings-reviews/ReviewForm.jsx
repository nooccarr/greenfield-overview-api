import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Rating from '@material-ui/lab/Rating';
import Button from 'react-bootstrap/Button';
import Box from '@material-ui/core/Box';
import AddMoreModal from './AddMoreModal';

function ReviewForm(props) {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [showMore, setShowMore] = useState(false);
  const handleClose = () => setShowMore(false);

  const starLabels = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };

  return (
    <Form>
      <Form.Group>
        <h3>Overall Rating</h3>
        <div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && (
            <Box
              style={{
                position: 'absolute',
                top: '7.8%',
                left: '29.8%',
              }}
            >
              {starLabels[hover !== -1 ? hover : value]}
            </Box>
          )}
        </div>
        <Form.Label style={{ fontWeight: 'bold', marginTop: '1rem' }}>
          Do you recommend this product?
        </Form.Label>
        <Form.Group>
          <Form.Check
            inline
            type="radio"
            label="Yes"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            inline
            type="radio"
            label="No"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
        </Form.Group>
      </Form.Group>

      <Form.Group>
        <Form.Label style={{ fontWeight: 'bold' }}>Review Summary</Form.Label>
        <Form.Control type="input" placeholder="Example: Best purchase ever!" />
        <Form.Label style={{ fontWeight: 'bold', marginTop: '.3rem' }}>
          Review
        </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Why did you like the product or not?"
          required
        />
        <Form.File
          id="custom-file"
          label="Optional: Upload Photos"
          custom
          style={{ marginTop: '1rem' }}
        />
      </Form.Group>
      <hr></hr>
      <Form.Group>
        <Form.Label style={{ fontWeight: 'bold' }}>
          What is your nickname?
        </Form.Label>
        <Form.Control required placeholder="Example: jackson11!" />
        <Form.Text className="text-muted">
          For privacy reasons, do not use your full name or email address.
        </Form.Text>
        <Form.Label style={{ fontWeight: 'bold' }}>Your Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Example: jackson11@email.com"
        />
        <Form.Text className="text-muted">
          For authentication reasons, you will not be emailed
        </Form.Text>
      </Form.Group>
      <hr></hr>
      <Button
        id="review-submit-button"
        type="submit"
        onClick={props.handleClose}
        style={{ float: 'right', margin: '1rem 1rem' }}
      >
        Submit
      </Button>
      <Button
        id="review-more-button"
        style={{ float: 'right', margin: '1rem 1rem' }}
        onClick={() => setShowMore(true)}
        className="review-submitButton"
      >
        Add More
      </Button>
      <AddMoreModal
        show={showMore}
        handleClose={handleClose}
        productCharacteristics={props.productCharacteristics}
      />
    </Form>
  );
}

export default ReviewForm;
