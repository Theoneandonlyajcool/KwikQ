import axios from "axios";
const BranchID = localStorage.getItem("BranchID");
const BaseURL = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem("User");

// export const RemoveCustomer = async (props) => {
//   const { data } = props;
//   console.log(data);
//   try {
//     const res = await axios.delete(`${BaseURL}/api/v1/remove/${customerID}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const RemoveCustomer = async (Id) => {
//   if (!Id) return { ok: false, error: "no-id" };
//   const res = await axios.delete(`${BaseURL}/api/v1/remove/${Id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return { ok: true, data: res.data };
// };

// api/removeCustomer.js
export const RemoveCustomer = async (Id) => {
  if (!Id) return { ok: false, error: "no-id" };
  const res = await axios.delete(`${BaseURL}/api/v1/remove/${Id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return { ok: true, data: res.data };
};
