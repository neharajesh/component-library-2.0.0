import "../styles.css"

export const Images = () => {
    return(<>
        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Responsive Image</p>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pfeiffer-beach-sunset-big-sur-ca-royalty-free-image-1590086887.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*" alt="responsive" className="img-res img-min-width-250" />
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Round Images</p>
            <img src="https://i.pinimg.com/originals/a7/2b/1a/a72b1aa94154e5ce6a1e1efaed96e424.jpg" alt="round" className="bdr-rad-round img-l" />
        </div>
    </>)
}