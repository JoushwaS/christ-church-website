import React from "react";
import ColumnItem from "../../components/ColumnItem/ColumnItem";
import WomenMinistryImg from "../../assets/images/WomenMinistryImg.jpeg";
import youthMinistryImg from "../../assets/images/youthMinistryImg.jpeg";
import childrenMinistryImg from "../../assets/images/childrenMinistryImg.jpeg";
import musicMinistryImg from "../../assets/images/musicMinistryImg.jpeg";
import educationMinistry from "../../assets/images/educationMinistry.jpeg";
import foodMinistryImg from "../../assets/images/foodMinistryImg.jpeg";
function Ministeries() {
  const MinisteriesData = [
    {
      minsitryName: "Women Ministry",
      subHeading: "",
      ministryImg: WomenMinistryImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
    {
      minsitryName: "Youth Ministry",
      subHeading: "",
      ministryImg: youthMinistryImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
    {
      minsitryName: "Children Ministry",
      subHeading: "",
      ministryImg: childrenMinistryImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
    {
      minsitryName: "Music  Ministry",
      subHeading: "",
      ministryImg: musicMinistryImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
    {
      minsitryName: "Education  Ministry",
      subHeading: "",
      ministryImg: educationMinistry,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
    {
      minsitryName: "Food  Ministry",
      subHeading: "",
      ministryImg: foodMinistryImg,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erat, sed diam ptua. At vero eos et accusam et justo duo dolores et ea Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna aliquyam erebum. Stet clita kasd gubergren. labore et dolore magna aliquyam erebum. Stet clita kasd gubergren.abore et dolore magna aliquyam erebum. Stet clita kasd gubergren.",
    },
  ];
  return (
    <div className="container-xl p-4">
      {" "}
      {MinisteriesData.map((item, index) => {
        const ministryItem = { ...item, index };
        return <ColumnItem props={ministryItem} />;
      })}
    </div>
  );
}

export default Ministeries;
