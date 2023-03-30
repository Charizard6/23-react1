import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        dispaly: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer:{},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
}

function Comment(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://i.namu.wiki/i/i9CE_B9SBLfakPv2Lu4MX2UztCvHcimOefFsKPQfHQDA-_CHN_dwiUEM9l9wkyCNwtc8dWR3J36mC_BH1x2ALK875tQCWpHDKQkagAc7uv7Y2RoQlrS27cAabO2F8AHhhTaBfNUijhGocRkjQl4myA.webp"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;