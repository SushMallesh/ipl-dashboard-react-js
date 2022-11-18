import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-matches-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="match-details-logo-container">
          <div className="match-details-container-1">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-team-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            className="match-logo"
            src={competingTeamLogo}
            alt="Example response"
          />
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
