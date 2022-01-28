import Image from "next/Image";

function Figure({
    imgSrc,
    imgAlt,
    children
}){
    return(
        <div style={{width:"80%",transform:"translate(10%)"}}>
            <div style={{position: "relative", width:"100%", paddingBottom:"40%"}}>
                <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="contain"/>
            </div>
            {children}
        </div>
    );
}

export default Figure;
