import React from "react";

class Sections extends React.Component {
  // fires before component is mounted
  constructor(props) {
    // makes this refer to this component
    super(props);

    this.handleClick = function(section) {
      this.props.setActive(section);
    };
  }

  render() {
    return (
      <div className="col-sm-3" id="sections">
        <button
          className={
            "btn btn-primary btn-block " + this.props.sections.eyes.class
          }
          type="button"
          onClick={() => this.handleClick("eyes")}
        >
          Eyes
        </button>
        <button
          className={
            "btn btn-primary btn-block " + this.props.sections.nose.class
          }
          type="button"
          onClick={() => this.handleClick("nose")}
        >
          Nose
        </button>
        <button
          className={
            "btn btn-primary btn-block " + this.props.sections.mouth.class
          }
          type="button"
          onClick={() => this.handleClick("mouth")}
        >
          Mouth
        </button>
      </div>
    );
  }
}

export default Sections;
