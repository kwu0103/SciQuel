import React from 'react'
import HomepageLayout from '../components/HomepageLayout/HomepageLayout'
import UserCard from '../components/UserCard/UserCard'

export default function team() {

    const team = [
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" }
    ]

    const recent = [
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" },
        { name: "Edward Chen", description: "Web Developer since June 2021", image: "/SciQuel_1.png" }
    ]
    return (
        <HomepageLayout>
            <div style={{ textAlign:"center", fontWeight:"700", fontSize: "40px", fontFamily:"Alegreya Sans SC", marginLeft: "2rem", padding: "1rem" }}>
                Our People
            </div>

            <h1 style={{ marginLeft: "1rem", padding: "2rem", marginTop:"0px", fontFamily:"Alegreya Sans SC" }}>Our Team</h1>
            <div>
                {team.map(e => <UserCard name={e.name} description={e.description} image={e.image} width="17" />)}
            </div>

            <h1 style={{ marginLeft: "1rem", padding: "2rem", fontFamily:"Alegreya Sans SC" }}>Recent Contributors</h1>
            <div>
                {recent.map(e => <UserCard name={e.name} description={e.description} image={e.image} width="30" />)}
            </div>

            <h1 style={{ marginLeft: "1rem", padding: "2rem", fontFamily:"Alegreya Sans SC" }}>Existing Contributors</h1>
        </HomepageLayout>
    )
}
