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
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-card-2">
          <p className="latest-match-details-label">First Innings</p>
          <p className="match-details">{firstInnings}</p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="match-details">{secondInnings}</p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="match-details">{manOfTheMatch}</p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="match-details">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
