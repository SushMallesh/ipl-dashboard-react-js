import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <li className="team-item">
      <Link className="team-link" to={`/team-matches/${id}`}>
        <img className="team-image" src={teamImageUrl} alt="team banner" />
        <h1 className="team-name">{name}</h1>
      </Link>
    </li>
  )
}

export default TeamCard
