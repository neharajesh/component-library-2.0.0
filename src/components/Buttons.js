import "../styles.css";

export const Buttons = () => {
  return (
    <>
      <div className="cont-fluid">
        <p className="txt-xl mg-tb-1">Primary Buttons</p>
        <div className="mg-1">
          <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-pink">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-blue">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-yellow">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-red">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-green">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-purple txt-white">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-disabled txt-white">
            Click Me
          </button>
        </div>
      </div>

      <div className="cont-fluid">
        <p className="txt-xl mg-tb-1">Secondary Buttons</p>
        <div className="mg-1">
          <button className="pd-05 mg-05 bdr-rad-m btn btn-secondary-pink">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-rad-m btn btn-secondary-blue">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-rad-m btn btn-secondary-yellow">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-rad-m btn btn-secondary-red">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-rad-m btn btn-secondary-green">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-rad-m btn btn-secondary-purple">
            Click Me
          </button>
          <button className="pd-05 mg-05 bdr-rad-m btn btn-secondary-disabled">
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};
