import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonStyle = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "2px 20px",
  border: "1px solid",
  maxWidth: 150,
  lineHeight: 1.5,
  backgroundColor: "var(--color-bgc-td)",
  borderColor: "var(--color-bgc-th)",
  color: "var(--color-text-black)",
  "&:hover": {
    backgroundColor: "var(--color-bgc-backdrop)",
    boxShadow: "none",
    borderColor: "var(--color-icon-black)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "var(--color-text-black)",
    borderColor: "var(--color-bgc-th)",
  },
  "&:focus": {
    color: "var(--color-text-white)",
  },
});

export default ButtonStyle;
