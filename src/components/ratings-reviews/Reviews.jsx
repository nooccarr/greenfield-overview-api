import React, { useState, useEffect } from 'react';

function Reviews(props) {
  return (
    <div className="reviews-container">
      <h2>{props.reviewCount} reviews, sorted by</h2>
    </div>
  );
}

export default Reviews;
