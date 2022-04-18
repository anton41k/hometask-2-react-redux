import { useDispatch } from "react-redux";
import { toggleNotesIsArchived } from "../../redux/noteSlice";
import SvgSprite from "../SvgSprite";
import { WrrapSvgIcon } from "../SvgSprite/SvgSprite.styled";
import { ThStyled } from "./Th.styled";

const Th = ({ column }) => {
  const { header, accessor, param } = column;
  const dispatch = useDispatch();

  return (
    <ThStyled param={param}>
      {header}
      {accessor === "icon-in_archive" && (
        <WrrapSvgIcon onClick={() => dispatch(toggleNotesIsArchived())}>
          <SvgSprite nameId={accessor} />
        </WrrapSvgIcon>
      )}
      {accessor === "icon-delete" && (
        <WrrapSvgIcon>
          <SvgSprite nameId={accessor} />
        </WrrapSvgIcon>
      )}
    </ThStyled>
  );
};

export default Th;
