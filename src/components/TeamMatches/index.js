import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamsData: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  convertTeamDetailsFormat = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamsApiUrl}${id}`)
    const fetchedData = await response.json()

    const formattedData = {
      teamBannerURL: fetchedData.team_banner_url,
      latestMatch: this.convertTeamDetailsFormat(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.convertTeamDetailsFormat(eachMatch),
      ),
    }
    this.setState({teamsData: formattedData, isLoading: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {teamsData} = this.state
    const {teamBannerURL, latestMatch} = teamsData
    return (
      <div className="responsive-container">
        <img className="banner-image" src={teamBannerURL} alt="team banner" />
        <LatestMatch latestMatchData={latestMatch} />
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
