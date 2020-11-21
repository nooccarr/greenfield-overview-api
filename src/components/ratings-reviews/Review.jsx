import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Review(props) {
  const [yesCounter, setYesCounter] = useState(props.indReview.helpfulness);
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  let truncSummary;
  let responseFromSeller = '';
  let recommendedLine = '';
  let reportLink = (
    <button
      class="link"
      onClick={handleYesClick}
      style={{
        background: 'white',
        border: 'none',
        textDecoration: 'underline',
      }}
    >
      report
    </button>
  );

  let handleYesClick = () => {
    if (alreadyClicked) {
      return;
    } else {
      setYesCounter(yesCounter + 1);
      setAlreadyClicked(true);
    }
  };

  let yesCounterText = (
    <button
      class="link"
      onClick={handleYesClick}
      style={{
        background: 'white',
        border: 'none',
        textDecoration: 'underline',
      }}
    >
      yes
    </button>
  );

  let convertedDate = new Date(props.indReview.date).toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );
  if (props.indReview.response !== 'null') {
    responseFromSeller = (
      <div
        class="response-from-seller-wrapper"
        style={{ background: '#D3D3D3', padding: '.5rem', margin: '.5rem' }}
      >
        <h4>Response from seller:</h4>
        <p id="response-from-seller-body">{props.indReview.response}</p>
      </div>
    );
  }

  if (props.indReview.summary.length < 35) {
    truncSummary = props.indReview.summary;
  } else {
    truncSummary = `${props.indReview.summary.slice(0, 35)}...`;
  }

  if (props.indReview.recommend === 1) {
    recommendedLine = '✓ I recommend this product';
  }
  return (
    <div className="single-review">
      <Rating
        // value={props.allReviews.rating}
        value={props.indReview.rating}
        precision={0.1}
        readOnly
        size="small"
        id="review-stars"
      />
      <p className="individual-review-user">
        {props.indReview.reviewer_name} | {convertedDate}
      </p>
      <h3 className="individual-review-header">{truncSummary}</h3>
      <p className="individual-review-body">{props.indReview.body}</p>
      <div className="individual-review-photos">
        {/* map magic here to render out review photos */}
        <p id="individual-review-recommended">{recommendedLine}</p>
        <div>{responseFromSeller}</div>
        <div id="helpful-report">
          <p>
            Helpful? {yesCounterText} ({yesCounter}) | {reportLink}
          </p>
        </div>
        <hr id="review-line-break"></hr>
      </div>
    </div>
  );
}

export default Review;
