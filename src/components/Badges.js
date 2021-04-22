import "../styles.css"

export const Badges = () => {
    return(<>
        <div className="cont-fluid">
            <p className="txt-xl">Adding Badges</p>
            <table className="tbl-50 mg-lr-2 mg-tb-1 bdr-thin bdr-rad-m">
                <tr> <td className="pd-05">.badge-tl</td> <td className="pd-05">Badge on top-left of container</td> </tr>
                <tr> <td className="pd-05">.badge-tr</td> <td className="pd-05">Badge on top-right of container</td> </tr>
            </table>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl">Styling Badges</p>
            <table className="tbl-50 mg-lr-2 mg-tb-1 bdr-thin bdr-rad-m">
                <tr> <td className="pd-05 txt-500" colSpan={2}>BADGE FILL</td> </tr>
                <tr> <td className="pd-05">Yellow</td> <td className="pd-05">.badge-fill-yellow</td> </tr>
                <tr> <td className="pd-05">Purple</td> <td className="pd-05">.badge-fill-purple</td> </tr>
                <tr> <td className="pd-05">Blue</td> <td className="pd-05">.badge-fill-blue</td> </tr>
                <tr> <td className="pd-05">Green</td> <td className="pd-05">.badge-fill-green</td> </tr>
                <tr> <td className="pd-05">Red</td> <td className="pd-05">.badge-fill-red</td> </tr>
                <tr> <td className="pd-05">Pink</td> <td className="pd-05">.badge-fill-pink</td> </tr>
                <tr> <td className="pd-05">Grey</td> <td className="pd-05">.badge-fill-grey</td> </tr>
            </table>
        </div>
    </>)
}