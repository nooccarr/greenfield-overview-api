import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ArrowBackIosIcon from '@material-ui/icons/ArrowLeft';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowRight';
import DefaultImgSubSlider from './DefaultImgSubSlider.jsx';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const ExpandView = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="default-expand-image-container">
      <DefaultImgSubSlider
        subSliderImgs={props.currentImageSet}
        currentMainIndex={props.mainSliderIndex}
        currentSubIndex={props.subSliderIndex}
        handleMainImageChange={props.setMainIndex}
        prevSub={props.prevSub}
        nextSub={props.nextSub}
        activeIndex={props.activeIndex}
      />
      <button
        className="default-expand-current-img-button-left"
        onClick={() => props.prevMain()}
        disabled={props.mainSliderIndex === 0}
      >
        <ArrowBackIosIcon />
      </button>
      <div className="default-expand-active-image">
        <div
          className="default-expand-current-img"
          style={{
            transform: `translateX(-${props.mainSliderIndex * 660}px)`,
          }}
        >
          {props.currentImageSet.map((photo, index) => {
            return (
              <>
                <img
                  src={photo.url}
                  key={index}
                  style={{
                    height: `100%`,
                    width: `660px`,
                    cursor: 'zoom-in',
                  }}
                  onClick={handleShow}
                />
              </>
            );
          })}
        </div>
      </div>
      <button
        className="default-expand-current-img-button-right"
        onClick={() => props.nextMain()}
        disabled={props.mainSliderIndex === props.currentImageSet.length - 1}
      >
        <ArrowForwardIosIcon />
      </button>
      <button
        className="default-expand-changView-btn"
        onClick={() => {
          props.changeExpandView();
          document.getElementById('default-product-info').style.display =
            'block';
        }}
      >
        <AspectRatioIcon />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton />
        <Modal.Body style={{ width: '800px' }}>
          <img
            class="img-fluid"
            src={props.currentImageSet[props.activeIndex].url}
            style={{ width: '800px' }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExpandView;
