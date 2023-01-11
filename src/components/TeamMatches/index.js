import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatches: {}, isLoading: true}

  componentDidMount() {
    this.gettingTeamData()
  }

  getUpdatedData = data => ({
    umpires: data.umpires,
    result: data.result,
    id: data.id,
    date: data.date,
    venue: data.venue,
    manOfTheMatch: data.man_of_the_match,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    matchStatus: data.match_status,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
  })

  gettingTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getUpdatedData(data.latest_match_details),
      recentMatches: this.getUpdatedData(data.recent_matches),
    }
    this.setState({teamMatches: updatedData, isLoading: false})
  }

  render() {
    const {teamMatches, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        {' '}
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    ) : (
      <div className="team_match_details_container">
        <div className="Banner_image">
          <img
            src={teamMatches.teamBannerUrl}
            alt={teamMatches.temBannerUrl}
            className="Banner_image"
          />
        </div>
        <div className="latest_match_details_container">
          <LatestMatch
            className="latest_match"
            key={teamMatches.latestMatchDetails.id}
            matchDetails={teamMatches.latestMatchDetails}
          />
        </div>
      </div>
    )
  }
}

export default TeamMatches
