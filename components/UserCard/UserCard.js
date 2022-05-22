import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './UserCard.module.css'

export default function UserCard({ name, description, image, width }) {
    return (
        <div className={styles.cardBackground} style={{ width: `${width}%` }} >
            <Card style={{ marginRight: "10px", marginLeft: "10px" }}>
                <Card.Img src={image} />
                <Card.Body>
                    <h2 style={{fontFamily:"Forma DJR Micro Medium"}}> {name} </h2>
                    <p className={styles.desc}>{description}</p>
                </Card.Body>
            </Card>
        </div>
    )
}
