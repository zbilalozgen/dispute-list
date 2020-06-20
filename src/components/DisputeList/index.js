import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {loadDisputes} from "../redux/actions";

const DisputeList = (props) => {

  useEffect( () => {
    props.loadDisputes('https://api.staging.gamerarena.com/disputes/')
  }, [])

    return (
     <div>
       Hello!
     </div>
   )
}

const mapStateToProps = ({disputes}) => ({
  disputes
})

const mapDispatchToProps = (dispatch) => ({
  loadDisputes: (url) => dispatch(loadDisputes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisputeList);