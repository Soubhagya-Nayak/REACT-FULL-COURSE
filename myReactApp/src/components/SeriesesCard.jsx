import styles from "../components/Netflix.module.css";

export const SeriesesCard = ({ data }) => {
    const {img_url, name, rating, description, genre, cast, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        fontWeight: "bold",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--bg-color)",
        cursor: "pointer"
    }

    const ratingCondition = rating >= 8.5 ? styles.super_hit : styles.average;

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name + "cover page"} width="40%" height="40%" />
            </div>
            {/* <div className={styles["card-content"]}> */}
            <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
                <h2>Name: {name}</h2>
                <h3>Rating: <span className={`${styles.rating} ${ratingCondition}`}>{rating}</span></h3>
                <p className="text-3xl font-bold underline">Summary: {description}</p>
                <p>Genre: {genre.join(", ")}</p>
                <p>Cast: {cast.join(", ")}</p>
                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    );
}