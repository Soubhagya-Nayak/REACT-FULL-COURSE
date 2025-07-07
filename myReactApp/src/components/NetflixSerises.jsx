import seriesesData from "../api/seriesesData.json";
import { SeriesesCard } from "../components/SeriesesCard";

const NetflixSerises = () => {
  return (
    <ul className="grid grid-three--cols"> 
      {
        seriesesData.map((currElem) => (
          <SeriesesCard key={currElem.id} data={currElem} />)
        )
      }
    </ul>
  );
};
export default NetflixSerises;
