import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

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

    this.setState({iplTeams: formattedData, isLoading: false})
  }

  renderTeams() {
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

  renderSpinner = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return isLoading ? this.renderSpinner() : this.renderTeams()
  }
}

export default Home
