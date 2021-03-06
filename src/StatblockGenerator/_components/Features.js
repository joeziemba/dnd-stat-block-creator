import React from "react";
import { Row, Input, Column, Textarea } from "../../_globalComponents";

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Title",
      content: "Content",
    };
  }

  renderFeatures() {
    return this.props.features.map((feature, i) => {
      return (
        <div className="feature-block" key={i}>
          <Row>
            <button
              className="delete-btn"
              onClick={() => this.props.deleteFeature(feature.id)}
            >
              <i className="fa fa-close" />
            </button>
            <Column className="col-4">
              <Input
                type="text"
                label={"Title"}
                placeholder={""}
                value={feature.title}
                fieldName="title"
                onChange={(e) => this.props.updateFeature(e, feature.id)}
              />
            </Column>
            <Column className="col-8">
              <Textarea
                type="text"
                label={"Content"}
                placeholder={""}
                value={feature.content}
                fieldName="content"
                rows={5}
                onChange={(e) => this.props.updateFeature(e, feature.id)}
              />
            </Column>
          </Row>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.renderFeatures()}
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.addFeature}
        >
          Add Feature
        </button>
      </React.Fragment>
    );
  }
}

export default Features;
