import React from "react";
import ExplorerItem from "../ExplorerItem/ExplorerItem";
import FoodBankIcon from "../../assets/images/icons8-hamper-100.png";
import ProtectChildrenIcon from "../../assets/images/icons8-care-100.png";
import ScholarshipIcon from "../../assets/images/Icon awesome-graduation-cap.svg";
import parishIcon from "../../assets/images/Icon map-church.svg";
import donateIcon from "../../assets/images/Icon awesome-donate.svg";
import volunterIcon from "../../assets/images/icons8-volunteering-100.png";
function ExplorerComponent() {
  const explorerItemsList = [
    {
      icon: FoodBankIcon,
      cardHeading: "Christ Church Food Bank",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    },
    {
      icon: ProtectChildrenIcon,
      cardHeading: "Protect Our Children",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    },
    {
      icon: ScholarshipIcon,
      cardHeading: "Scholarships",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    },
    {
      icon: parishIcon,
      cardHeading: "Our Parish",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    },
    {
      icon: donateIcon,
      cardHeading: "Donate Online",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    },
    {
      icon: volunterIcon,
      cardHeading: "Volunteering",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
    },
  ];
  return (
    <div className="explorerComponentContainer container-lg px-5">
      <div className="row">
        <div className="col-lg-12 fw-semibold">
          <h1 className="color-primary text-md-center text-sm-center text-xl-start  ">
            Explorer Our Christ Church{" "}
          </h1>
          <h1 className="color-secondary text-md-center text-sm-center text-xl-start">
            Drigh Road Parish
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-between flex-wrap pt-4">
          {explorerItemsList.map((item) => {
            return <ExplorerItem props={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ExplorerComponent;
