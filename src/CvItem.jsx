import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Fade from "react-bootstrap/Fade";
import { MdExpandMore, MdExpandLess, MdClose } from "react-icons/md";

const CvItem = ({
  label,
  date,
  description,
  imageSrc,
  detail,
  closeFunction
}) => {
  const [showInfo, setInfo] = useState(false);

  return (
    <div className="card">
      <div className="closeIcon">
        <Button onClick={closeFunction} variant="outline-secondary" size="sm">
          <MdClose />
        </Button>
      </div>
      <div className="label">{label}</div>
      <div className="date">
        <div className="dateStart">{date.Start}</div>
        <div className="dateEnd">{date.End}</div>
      </div>
      <Collapse in={showInfo}>
        <div className="detail">{detail}</div>
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
