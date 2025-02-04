import React, {useEffect, useState} from 'react';
//Redux
import {connect} from "react-redux";
import {loadDisputes} from "../../redux/actions";
//Components
import {Dispute} from "../index";
import LoadingScreen from 'react-loading-screen'
//Icons
import NextArrow from '../../assets/next.svg'
import BackArrow from '../../assets/back.svg'
import Logo from '../../assets/Logo.png'

import './index.scss'


const DisputeList = ({disputes, load, loadDisputes}) => {

  const [searchTerm, setSearchTerm] = useState('')
  const noResult = !disputes.results.length

  useEffect(() => {
    if(searchTerm.length > 2) {
      setTimeout(() => {
        loadDisputes(`https://api.staging.gamerarena.com/disputes/?searchUsername=${searchTerm}` )
      },200)
    } else if (searchTerm.length === 0) {
      loadDisputes('https://api.staging.gamerarena.com/disputes/')
    }
  }, [searchTerm,loadDisputes])

  const handleNavClick = (direction) => {
    loadDisputes(disputes[direction])
  }

    return (
      <>
     <div className="dispute-list container-fluid">
       <LoadingScreen
         loading={load}
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
           <button disabled={!disputes.previous} onClick={() => handleNavClick('previous')}><img alt="back-arrow" src={BackArrow}/></button>
           <button disabled={!disputes.next} onClick={() => handleNavClick('next')}><img alt="next-arrow" src={NextArrow}/></button>
         </div>

         {disputes.results.map((dispute, i) => {
           //Some items return with same id so use index as key
           return <Dispute key={i} dispute={dispute}/>
         })}
       </div>
     </div>

  {!load && noResult &&
    <div className='dispute-list__no-result'>
       <span>
         Aradığınız kullanıcıyı bulamadık, lütfen başka bir anahtar kelime deneyin!
       </span>
    </div>
  }
  </>
   )
}

const mapStateToProps = ({disputes, load}) => ({
  disputes,
  load
})

const mapDispatchToProps = (dispatch) => ({
  loadDisputes: (url) => dispatch(loadDisputes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisputeList);