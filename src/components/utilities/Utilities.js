import "../../main.css";

export const Utilities = () => {
    return (<>
        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Text Sizes</p>
                <table className="mg-lr-2 tbl-50 bdr-thin bdr-grey bdr-rad-m">
                    <tr>
                        <td className="pd-1 bdr-thin bdr-grey">.txt-xl</td>
                        <td className="pd-1 bdr-thin bdr-grey">Extra Large Text with font size 1.5em</td>
                    </tr>
                    <tr>
                        <td className="pd-1 bdr-thin bdr-grey">.txt-l</td>
                        <td className="pd-1 bdr-thin bdr-grey">Large Text with font size 1.2em</td>
                    </tr>
                    <tr>
                        <td className="pd-1 bdr-thin bdr-grey">.txt-s</td>
                        <td className="pd-1 bdr-thin bdr-grey">Small Text with font size 0.8em</td>
                    </tr>
                    <tr>
                        <td className="pd-1 bdr-thin bdr-grey">.txt-xs</td>
                        <td className="pd-1 bdr-thin bdr-grey">Extra Small Text with font size 0.5em</td>
                    </tr>
                </table>
        </div>

        <div className="cont-fluid">
        <p className="txt-xl mg-tb-1">Coloured Text</p>            
            <table className="mg-lr-2 tbl-50 bdr-thin bdr-grey bdr-rad-m">
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-red</td> <td className="pd-1 bdr-thin bdr-grey">Red coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-blue</td> <td className="pd-1 bdr-thin bdr-grey">Blue coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-green</td> <td className="pd-1 bdr-thin bdr-grey">Breen coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-grey</td> <td className="pd-1 bdr-thin bdr-grey">Grey coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-pink</td> <td className="pd-1 bdr-thin bdr-grey">Pink coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-yellow</td> <td className="pd-1 bdr-thin bdr-grey">Yellow coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-purple</td> 
                    <td className="pd-1 bdr-thin bdr-grey">Purple coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-white</td> 
                    <td className="pd-1 bdr-thin bdr-grey">White coloured text</td>
                </tr>
                <tr>
                    <td className="pd-1 bdr-thin bdr-grey">.txt-black</td> 
                    <td className="pd-1 bdr-thin bdr-grey">Black coloured text</td>
                </tr>
            </table>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Borders</p>
            <table className="mg-lr-2 tbl-50 bdr-thin bdr-grey bdr-rad-m">
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-none</td> <td className="pd-1 bdr-thin bdr-grey">No Border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-thin</td> <td className="pd-1 bdr-thin bdr-grey">1px Border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-thick</td> <td className="pd-1 bdr-thin bdr-grey">2px Border</td> </tr>
            </table>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Border Radius</p>
            <table className="mg-lr-2 tbl-50 bdr-thin bdr-grey bdr-rad-m">
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-rad-s</td> <td className="pd-1 bdr-thin bdr-grey">1px border radius</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-rad-m</td> <td className="pd-1 bdr-thin bdr-grey">3px border radius</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-rad-l</td> <td className="pd-1 bdr-thin bdr-grey">Border will be as round as possible</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-rad-round</td> <td className="pd-1 bdr-thin bdr-grey">Circular border</td> </tr>
            </table>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Border Colours</p>
            <table className="mg-lr-2 tbl-50 bdr-thin bdr-grey bdr-rad-m">
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-red</td> <td className="pd-1 bdr-thin bdr-grey">Red border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-blue</td> <td className="pd-1 bdr-thin bdr-grey">Blue border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-green</td> <td className="pd-1 bdr-thin bdr-grey">Green border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-yellow</td> <td className="pd-1 bdr-thin bdr-grey">Yellow border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-pink</td> <td className="pd-1 bdr-thin bdr-grey">Pink border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-purple</td> <td className="pd-1 bdr-thin bdr-grey">Purple border</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.bdr-grey</td> <td className="pd-1 bdr-thin bdr-grey">Grey border</td> </tr>
            </table>
        </div>

        <div className="cont-fluid">
            <p className="txt-xl mg-tb-1">Cursor</p>
            <table className="mg-lr-2 tbl-50 bdr-thin bdr-grey bdr-rad-m">
                <tr> <td className="pd-1 bdr-thin bdr-grey">.csr-point</td> <td className="pd-1 bdr-thin bdr-grey">Cursor will be a pointer</td> </tr>
                <tr> <td className="pd-1 bdr-thin bdr-grey">.csr-default</td> <td className="pd-1 bdr-thin bdr-grey">Cursor will be a default menu cursor</td> </tr>
            </table>
        </div>
    </>)
}