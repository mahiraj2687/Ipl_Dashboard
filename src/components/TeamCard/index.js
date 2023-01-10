// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li key={id} className="list_item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="teamLogo" />
        <p className="team_card_heading">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
