import React from "react";
import PropTypes from "prop-types";

const MS_PER_MIN =   1000 * 60;
const MS_PER_HOUR =  MS_PER_MIN * 60;
const MS_PER_DAY =   MS_PER_HOUR * 24;
const MS_PER_YEAR =  MS_PER_DAY * 365;
const MS_PER_MONTH = MS_PER_DAY * 30;
const MS_PER_WEEK =  MS_PER_DAY * 7;

class Exp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { diff: 0 };
  }

  tick() {
    const now = new Date();
    const then = new Date(this.props.date);

    this.setState({
      diff: now - then
    });
  }

  componentDidMount() {
    this.interval_id = setInterval(() => { this.tick() }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval_id);
  }

  render() {
    let remainder = this.state.diff;
    const years = Math.floor(remainder / MS_PER_YEAR);
    const year_label = ` ${ years } year${ years == 1 ? "" : "s" }`;
    remainder -= (years * MS_PER_YEAR);

    const months = Math.floor(remainder / MS_PER_MONTH);
    const month_label = ` ${ months } month${ months == 1 ? "" : "s" }`;
    remainder -= (months * MS_PER_MONTH);

    const weeks = Math.floor(remainder / MS_PER_WEEK);
    const week_label = ` ${ weeks } week${ weeks == 1 ? "" : "s" }`;
    remainder -= (weeks * MS_PER_WEEK);

    const days = Math.floor(remainder / MS_PER_DAY);
    const day_label = ` ${ days } day${ days == 1 ? "" : "s" }`;
    remainder -= (days * MS_PER_DAY);

    const hours = Math.floor(remainder / MS_PER_HOUR);
    const hour_label = ` ${ hours } hour${ hours == 1 ? "" : "s" }`;
    remainder -= (hours * MS_PER_HOUR);

    const mins = Math.floor(remainder / MS_PER_MIN);
    const min_label = ` ${ mins } minute${ mins == 1 ? "" : "s" }`;
    remainder -= (mins * MS_PER_MIN);

    const secs = Math.floor(remainder / 1000);
    const sec_label = ` ${ secs } second${ secs == 1 ? "" : "s" }`;

    return (
      <React.Fragment>
        Software developer with { `${year_label}, ${month_label}, `+
                                  `${week_label}, ${day_label}, `+
                                  `${hour_label}, ${min_label}, `+
                                  `${sec_label}` } of experience.
      </React.Fragment>
    );
  }
} 

Exp.propTypes = {
  date: PropTypes.string.isRequired
};

export { Exp };
