import NetflixSerises from "./components/NetflixSerises";
// import "./components/Netflix.css";
import "./components/Netflix.module.css";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-header">Best Series in Netflix</h1>
      <NetflixSerises />
      <h3 className="card-footer">All Copyright reserved @ sourcebysoubh | 2025</h3>
    </section>
  );
};
