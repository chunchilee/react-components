import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Here is an important agreement for you to accept
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {isOpen && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
        error veniam omnis quo blanditiis qui alias sit fugit eos quidem, ipsa
        corporis commodi nam fugiat ex a atque facilis.
      </p>
    </div>
  );
};

export default ModalPage;
