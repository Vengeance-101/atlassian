import { FaLocationArrow } from "react-icons/fa";
import { SiInfluxdb } from "react-icons/si";
import { SiAdguard } from "react-icons/si";
import { SiLoom } from "react-icons/si";
import { IoLogoBitbucket } from "react-icons/io";
import { TbBoxAlignTopLeftFilled } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { FaCompass } from "react-icons/fa6";
export const ProductMenuData = [
  {
    sublink: [
      "Featured",
      "Developers",
      "Product Managers",
      "Business Teams",
      "Leadership Teams",
    ],
    title: "Jlra",
    subTitle: "Flexible project managment",
    icon: <FaLocationArrow />,
  },
  {
    sublink: [
      "Featured",
      "Product Managers",
      "Business Teams",
      "Leadership Teams",
    ],
    title: "Confluence",
    subTitle: "Knowledge, all in one place",
    icon: <SiInfluxdb />,
  },
  {
    sublink: ["Featured", "It Professionals"],
    title: "Jlra Service Managment",
    subTitle: "High Velocity Service Delivery",
    icon: <MdMiscellaneousServices />,
  },
  {
    sublink: ["Featured"],
    title: "Rovo",
    subTitle: "High Velocity Service Delivery",
    icon: <TbTruckDelivery />,
  },
  {
    sublink: ["Featured", "Product Managers"],
    title: "Jlra Product Discovery",
    subTitle: "Capture and priroties ideas",
    icon: <RiCompassDiscoverFill />,
  },
  {
    sublink: ["Featured", "Developers"],
    title: "Compass",
    subTitle: "Capture and priroties ideas",
    icon: <FaCompass />,
  },
  {
    sublink: ["Featured", "It Professionals"],
    title: "Gaurd",
    subTitle: "Enhance cloud Security",
    icon: <SiAdguard />,
  },
  {
    sublink: ["Featured", "Business Teams", "Leadership Teams"],
    title: "Loom",
    subTitle: "Quicl async video updates",
    icon: <SiLoom />,
  },
  {
    sublink: ["Developers"],
    title: "BitBucket",
    subTitle: "Collabrative code repos",
    icon: <IoLogoBitbucket />,
  },
  {
    sublink: ["Leadership Teams"],
    title: "Jlra Align",
    subTitle: "Collabrative code repos",
    icon: <TbBoxAlignTopLeftFilled />,
  },
];
