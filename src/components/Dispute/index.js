import React from 'react';
import './index.scss'
import GameLogo from '../../assets/lol-logo.png'
import SwordIcon from '../../assets/sword-icon.png'
import CreatorLogo from '../../assets/creator-logo.png'
import CalenderIcon from '../../assets/calendar-icon.png'
import StatusIcon from '../../assets/status-icon.png'

const formatDate = (d) => {
  const date = new Date(d)
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date )
  return <span>{`${day}.${month}.${year}`}</span>
}

const Dispute = ({dispute}) => {
  const statusColor = dispute.status === 'pending' ? '#EEB502' : dispute.status === 'accepted' ? '#00C202' : dispute.status === 'declined' && '#EB2C44'

  return (
    <div className="row dispute-card">
      <div className="col-sm-6 dispute-card__duel-info">
        <div className="col-sm-3">
          <img alt="game-logo" src={GameLogo} width="50"/>
        </div>
        <div className="col-sm-8">
          <div className="row dispute-card__users">
            <span>
              {/*Fix for no username */}
              {dispute.match.users.length === 0 && 'Kullanıcı bulunamadı!'}
              {dispute.match.users[0]}
              <img alt="sword-icon" src={SwordIcon} className="dispute-card__sword-icon"/>
              {dispute.match.users[1]}
            </span>
          </div>
          <div className="row">
            <span>Düello#{dispute.match.duel}</span>
            {' '}<span>•</span>{' '}
            <span>{dispute.type}</span>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="col-sm-2">
        <div className="row dispute-card__info">
          <img alt="creator-logo" src={CreatorLogo}/>
          <span>Oluşturan</span>
        </div>
        <div className="row">
          <span style={{fontSize: '18px'}}>{dispute.creator}</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="col-sm-2">
        <div className="row dispute-card__info">
          <img alt="calendar-icon" src={CalenderIcon}/>
          <span>Tarih</span>
        </div>
        <div className="row">
          <span style={{fontSize: '16px'}}>{formatDate(dispute.createdAt)}</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="row dispute-card__info">
          <img alt="status-icon" src={StatusIcon}/>
          <span>Durum</span>
        </div>
        <div className="row">
          <span style={{fontSize: '16px', color: statusColor}}>{dispute.statusData}</span>
        </div>
      </div>
    </div>
  );
};

export default Dispute;