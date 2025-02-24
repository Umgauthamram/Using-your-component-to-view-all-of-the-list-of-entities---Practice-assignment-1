// write the book component code here
const bookcard = (props) => {
    return (
        <div style={styles.card}>
            <img style={styles.img} src={props.image} alt="" />
            <div>
                <h2 style={styles.name}> {props.name}</h2>
                <p style={styles.details}>
                    {props.genre}
                    <br /> {props.author}
                </p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        borderRadius: "15px",
        boxShadow: "0 0 10px rgb(255, 255, 255)",
        display: "flex",
        minWidth: "670px",
        margin: "1rem auto",
        padding: "15px",
        gap: "25px",
        backgroundColor: "rgb(243, 247, 252)",
        flexDirection: "row",
    },
    img: {
        borderRadius: "10px",
        height: "150px",
        width: "150px",
        objectFit: "cover",
    },
    name: {
        fontWeight: "bold",
        color: "black",
    },
    details: {
        flexDirection: "column",
        color: "black",
    },
};

export default bookcard;