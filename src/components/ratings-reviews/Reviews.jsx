import React, { useState, useEffect } from 'react';

function Reviews(props) {
  return (
    <div className="reviews-container">
      <h4>{props.reviewCount} reviews, sorted by</h4>
    </div>
  );
}

export default Reviews;
