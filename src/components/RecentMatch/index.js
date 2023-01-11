import './index.css'

const RecentMatch = props => {
  const {recentMatchDetails} = props
  console.log(recentMatchDetails)
  const {
    competingTeam,
    competingTeamLogo,
    result,
    umpires,
    manOfTheMatch,
    firstInnings,
    secondInnings,
  } = recentMatchDetails
  return (
    <div className="recent_match_details">
      <div className="details_container">
        <h3 className="head">First Innings</h3>
        <p className="detail">{firstInnings}</p>
        <h3 className="head">Second Innings</h3>
        <p className="detail">{secondInnings}</p>
        <h3 className="head">Umpires</h3>
        <p className="detail">{umpires}</p>
        <h3 className="head">Man of The Match</h3>
        <p className="detail">{manOfTheMatch}</p>
      </div>
      <div className="image_container">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="team_logo"
        />
      </div>
    </div>
  )
}
export default RecentMatch
