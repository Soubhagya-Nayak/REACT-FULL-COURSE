// import NetflixSerises from "./components/NetflixSerises";
// import "./components/Netflix.css";
// import "./components/Netflix.module.css";
import "./components/EV.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { States } from "./components/hooks/States";
// import { DerivedState } from "./components/DerivedState";
import { LiftingState } from "./components/LiftingStateUp";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-header">Best Series in Netflix</h1> */}
      {/* <NetflixSerises /> */}
      {/* <h3 className="card-footer">All Copyright reserved @ sourcebysoubh | 2025</h3> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <States /> */}
      {/* <DerivedState /> */}
      <LiftingState />
    </section>
  );
};
