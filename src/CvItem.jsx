import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Fade from "react-bootstrap/Fade";
import Linkify from "react-linkify";
import { MdExpandMore, MdExpandLess, MdClose } from "react-icons/md";
import { getImageType } from "./utils";
 
const CvItem = ({
  label,
  date,
  description,
  imageSrc,
  detail,
  closeFunction
}) => {
  const [showInfo, setInfo] = useState(false);
  const [imageType, setImageType] = useState("");

  useEffect(() => {
     async function fetchImageType(){ 
      if (imageSrc) {
        const imageType = await getImageType(imageSrc);
        setImageType(imageType); 
      }
     };
     fetchImageType();
  });

  return (
    <div className="card">
      <div className="closeIcon">
        <Button onClick={closeFunction} variant="outline-secondary" size="sm">
          <MdClose />
        </Button>
      </div>
      {imageSrc && <div className={`cardImage ${imageType}`}><img src={imageSrc} title={label} alt={label} /></div>}
      <div className="label">{label}</div>
      <div className="date">
        <div className="dateStart">{date.Start}</div>
        <div className="dateEnd">{date.End}</div>
      </div>
      <Collapse in={showInfo}>
        <div className="detail">
          <Linkify>{detail}</Linkify>
        </div>
      </Collapse>

      <div className="empty" />
      <Fade in={!showInfo}>
        <div className="description">{description}</div>
      </Fade>
      <div>
        <Button
          variant="light"
          block={true}
          onClick={() => setInfo(!showInfo)}
          aria-controls="example-collapse-text"
          aria-expanded={showInfo}
        >
          {showInfo ? <MdExpandLess /> : <MdExpandMore />}
        </Button>
      </div>
    </div>
  );
};

export default CvItem;
