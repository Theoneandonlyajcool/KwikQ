import { useNavigate } from "react-router-dom";
export const PreviousPage = () => {
  const nav = useNavigate();
  nav(-1);
};
