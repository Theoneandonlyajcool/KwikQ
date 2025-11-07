import { useNavigate } from "react-router-dom";
export const PreviousPage = () => {
  const nav = useNavigate();
  return () => nav(-1);
};
