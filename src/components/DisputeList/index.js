import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {loadDisputes} from "../../redux/actions";
import './index.scss'
import {Dispute} from "../index";
import NextArrow from '../../assets/next.svg'
import BackArrow from '../../assets/back.svg'
import Logo from '../../assets/Logo.png'
import LoadingScreen from 'react-loading-screen'

const DisputeList = (props) => {

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    props.loadDisputes('https://api.staging.gamerarena.com/disputes/')
  },[])

  useEffect(() => {
    let requestUrl = 'https://api.staging.gamerarena.com/disputes/'
    if( searchTerm.length >= 2 ){
      requestUrl += `?searchUsername=${searchTerm}`
      props.loadDisputes(requestUrl)
    } else if (searchTerm.length === 0) {
      props.loadDisputes(requestUrl)
    }
  }, [searchTerm])


  const handleNavClick = (direction) => {
    props.loadDisputes(props.disputes[direction])
  }
    return (
     <div className="dispute-list container-fluid">
       <LoadingScreen
         loading={props.isLoading}
         bgColor="#16161b"
         spinnerColor="#9ee5f8"
         textColor="#676767"
         logoSrc={Logo}
         text="Karşılaşmalar Yükleniyor..."
       />
       <div className="dispute-list__header row">
         <h3 className="dispute-list__heading-text col-sm-10">İtirazlar</h3>
         <div className="dispute-list__search col-sm-2">
           <input type="text" placeholder="Kullanıcı Ara" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
         </div>
       </div>
       <div className="dispute-list__items">
         <div className="nav-arrows">
           <button disabled={!props.disputes.previous} onClick={() => handleNavClick('previous')}><img src={BackArrow}/></button>
           <button disabled={!props.disputes.next} onClick={() => handleNavClick('next')}><img src={NextArrow}/></button>
         </div>
         {props.disputes.results.map(dispute => {
           return <Dispute key={dispute.id} dispute={dispute}/>
         })}
       </div>
     </div>
   )
}

const mapStateToProps = ({disputes, isLoading}) => ({
  disputes,
  isLoading
})

const mapDispatchToProps = (dispatch) => ({
  loadDisputes: (url) => dispatch(loadDisputes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisputeList);