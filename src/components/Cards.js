import "../styles.css"

export const Cards = () => {
    return(<>
        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Vertical Cards</p>
            <div className="card card-vert flex-col flex-col-items-center-x bdr-rad-m bdr-thick bdr-purple mg-lr-2">
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg" alt="corgi" className="img-xl mg-05 bdr-rad-m" />
                <p className="txt-l">Card Title</p>
                <p className="mg-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Horizontal Cards</p>
            <div className="card card-hor flex flex-items-center bdr-rad-m bdr-thick bdr-purple mg-lr-2">
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg" alt="corgi" className="img-xl img-res mg-05 bdr-rad-m" />
                <div className="card-vert flex-col flex-col-items-center-x items-left">
                    <p className="txt-l mg-tb-2">Card Title</p>
                    <p className="mg-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Cards with Badges</p>
            <div className="card card-hor flex flex-items-center bdr-rad-m bdr-thick bdr-purple mg-lr-2">
                <span className="badge-tl badge-fill-yellow txt-s txt-500 pd-025 bdr-rad-s">BADGE</span>
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg" alt="corgi" className="img-xl img-res mg-05 bdr-rad-m" />
                <div className="card-vert flex-col flex-col-items-center-x items-left">
                    <p className="txt-l mg-tb-2">Card Title</p>
                    <p className="mg-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Cards with Shadows</p>
            <div className="card card-vert flex-col flex-col-items-center-x bdr-rad-m bdr-thick bdr-none mg-lr-2 bs">
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg" alt="corgi" className="img-xl mg-05 bdr-rad-m" />
                <p className="txt-l">Card Title</p>
                <p className="mg-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Cards with Text Overlays</p>
            <div className="card card-vert flex-col flex-col-items-center-x bdr-rad-m bdr-thick bdr-none mg-lr-2 bs">
                <span className="card-overlay txt-500">TEXT OVERLAY</span>
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg" alt="corgi" className="img-xl mg-05 bdr-rad-m" />
                <p className="txt-l">Card Title</p>
                <p className="mg-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        
    </>)
}