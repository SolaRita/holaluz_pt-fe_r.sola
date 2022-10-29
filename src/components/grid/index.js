import "./index.css";

import ClientCard from "../clientCard";
import ClientDiscount from "../clientDiscount";

import "./index.css"

export default function Grid() {
  return (
    <div className="grid">
      <ClientCard />
      <ClientDiscount/>

    </div>
  );
}