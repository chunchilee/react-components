import React from "react";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import Button from "../components/Button";
const ButtonPage = () => {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button
          rounded
          primary
          outline
          className="mb-5 text-blue-500 "
          onClick={handleClick}
          onMouseEnter={handleClick}
        >
          Click me!!
          <FcBusinessman />
        </Button>
      </div>
      <div>
        <Button danger outline className="mb-5">
          Buy Now!
          <FcBusinesswoman />
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Something!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          ABC
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
