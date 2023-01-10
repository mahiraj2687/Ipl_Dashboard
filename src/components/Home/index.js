import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.gettingTeamCards()
    this.setState({isLoading: false})
  }

  gettingTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamCardsList: updatedData})
  }

  render() {
    const {teamCardsList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        {' '}
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    ) : (
      <div className="bg_container">
        <h1 className="ipl_heading">Ipl Dashboard</h1>
        <ul className="team_cards_container">
          {teamCardsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
