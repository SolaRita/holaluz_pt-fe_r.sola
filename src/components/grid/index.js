import "./index.css";

import ClientCard from "../clientCard";
import ClientDiscount from "../clientDiscount";
import CanUserSubscribe from "../../aplication/useCases/canUserSubscribe";

import "./index.css"

export default function Grid() {
  return (
    <div className="grid">
      <ClientCard />
      <h4>{CanUserSubscribe? <ClientDiscount/> : null}</h4>
      

    </div>
  );
}