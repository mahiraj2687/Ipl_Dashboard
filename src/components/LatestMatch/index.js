// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {competingTeam, venue, result, competingTeamLogo, date} = matchDetails
  return (
    <div className="main_container">
      <div className="latest_match_container">
        <div className="details">
          <h1 className="heading">{competingTeam}</h1>
          <p className="heading">{date}</p>
          <p className="heading">{venue}</p>
          <p className="heading">{result}</p>
        </div>
        <div className="logo_container">
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="logo_image"
          />
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
