import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchQuery } from '../store/actions';
import Loader from 'react-loader-spinner';

const Search = (props) => {
  const [ query, setQuery ] = useState('')

  const searchQuery = event => {
    event.preventDefault();
    props.searchQuery(query);
    setQuery('');
  }

  return(
    <div className="search-bar">
      <form onSubmit={searchQuery}>
        <input type="text" name="query" placeholder="Enter city to search" onChange={ e => setQuery(e.target.value)} value={query} />
        <button type="submit" disabled={props.isFetchingQuery}>
          {props.isFetchingQuery ?
            <Loader type="Bars" color="#000" height={20} width={20} />
            :
            'Search'
          }
        </button>
      </form>
      { props.queryError && (
        <p className="error">
          {props.queryError.status} : {props.queryError.statusText}
        </p>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  queryError:      state.queryError,
  isFetchingQuery: state.isFetchingQuery
})
export default connect( mapStateToProps, { searchQuery } )(Search);