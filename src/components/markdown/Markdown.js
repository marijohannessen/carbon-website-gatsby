import React from 'react';
import PropTypes from 'prop-types';

export class PageIntro extends React.Component {
  render() {
    return <span className="page-intro">{this.props.children}</span>;
  }
}

export class h2 extends React.Component {
  render() {
    return <h2 className="page-h2">{this.props.children}</h2>;
  }
}

export class h3 extends React.Component {
  render() {
    return <h3 className="page-h3">{this.props.children}</h3>;
  }
}

export class h4 extends React.Component {
  render() {
    return <h4 className="page-h4">{this.props.children}</h4>;
  }
}

export class ul extends React.Component {
  render() {
    return <ul className="page-ul">{this.props.children}</ul>;
  }
}

export class ol extends React.Component {
  render() {
    return <ol className="page-ol">{this.props.children}</ol>;
  }
}
