import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";
import { SearchItem } from "../../components";
import { connect } from "react-redux";
import { setQuery, getList, getFilteredList } from "../../redux/actions";

class Home extends Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
    this.props.getList();
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.getFilteredList(this.props.query);
  };

  onChangeInput = event => {
    let query = event.target.value;    
    this.props.setQuery(query);
  };

  render() {    
    const { query, dataList } = this.props;

    console.log(query);
    return (
      <div className="home container">
        <div className="search-container">
          <form action="" onSubmit={this.onSubmit}>
            <input
              type="text"
              value={query}
              name="query"
              placeholder="Input Query"
              onChange={this.onChangeInput}
            />

            <input
              type="submit"
              name="search"
              value="Search"              
            />
          </form>          
        </div>
        <div className="search-result">
          <div className="result-count">
            Total Result: {dataList && dataList.length ? dataList.length : 0}
          </div>
          <div className="result-content">
            {dataList && dataList.length
              ? dataList.map((item, index) => (
                  <SearchItem key={index} item={item} />
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.queryReducer.query,
    originalList: state.listReducer.list,
    dataList: state.listReducer.filteredList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => {
      dispatch(setQuery(query));
    },
    getList: () => {
      dispatch(getList());
    },
    getFilteredList: query => {
      dispatch(getFilteredList(query));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
