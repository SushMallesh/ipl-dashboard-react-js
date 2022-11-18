import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: []}

  componentDidMount() {
    this.getIPLTeams()
  }

  getIPLTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()

    const formattedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeams: formattedData})
  }

  render() {
    const {iplTeams} = this.state
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-container">
          {iplTeams.map(eachTeam => (
            <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
