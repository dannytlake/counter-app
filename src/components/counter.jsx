import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [], //"tag1", "tag2", "tag3"
    imgUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    //  if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag} </li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>{this.renderTags()}</div>
        <img src={this.state.imgUrl} alt="hi" />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    //this pulls count variable out of state array
    const { count } = this.state;

    // statecount = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//<img src={this.state.imgUrl} alt="hi" />
//imgUrl: "https://picsum.photos/200"
//<span style={this.styles} className="badge badge-primary m-2">
