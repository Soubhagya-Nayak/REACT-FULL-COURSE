import seriesesData from "../api/seriesesData.json";
import { SeriesesCard } from "./SeriesesCard";

const NetflixSerises = () => {
  return (
    <ul> 
      {
        seriesesData.map((currElem) => (
          <SeriesesCard key={currElem.id} data={currElem} />)
        )
      }
    </ul>
  );
};
export default NetflixSerises;



export const Header = () => {
  return (
    <h1>Hello, It's Me Soubhagya</h1>
  );
}

export const Footer = () => {
  return (
    <p>All Copyright reserved @ sourcebysoubh | 2025</p>
  );
};