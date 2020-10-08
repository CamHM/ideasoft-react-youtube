import React from "react";
import "./VideoPreview.css";

/*

const person = {
    name: 'Carlos',
    lastename: 'Hernández',
}

const name = person.name;
const lastname = person.lastname;

const { name, lastname } = person;

* */

const VideoPreview = ({ id, img, title, selected, onClick }) => {

    const styles = {
        container: {
            width: '250px',
            border: 'tomato 1px solid',
            margin: '5px',
            cursor: 'pointer',
        },
        img: {
            width: '100%',
        },
        title: {
            color: selected && 'red',
        }
    };

    return (
        <div style={styles.container} onClick={() => onClick(id)}>
            <img
                alt="video"
                src={img}
                style={styles.img}
            />
            <p style={styles.title}>{title}</p>
        </div>
    )
};

export default VideoPreview;
