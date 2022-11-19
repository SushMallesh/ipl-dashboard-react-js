import './index.css'

const MatchCard = props => {
  const {eachMatch} = props

  const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch
  const resultClassName = result.includes(competingTeam) ? `lost` : 'won'
  return (
    <li className="match-card">
      <img
        className="team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={resultClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
