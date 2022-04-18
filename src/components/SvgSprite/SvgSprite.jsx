import { useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import { getIsArchived } from "../../redux/noteSelector";
import { Svg } from "./SvgSprite.styled";

const SvgSprite = ({ nameId, category }) => {
  const isArchived = useSelector(getIsArchived);
  let nameIdSvg;

  nameIdSvg =
    nameId === "icon-in_archive" && isArchived ? `icon-out_archive` : nameId;

  const hrefSvg = `${sprite}#${nameIdSvg.toLowerCase().split(" ").join("_")}`;

  return (
    <>
      <Svg>
        <use xlinkHref={hrefSvg} />
      </Svg>
    </>
  );
};

export default SvgSprite;
