import React from 'react'

const TeamInfo = ({team}) => {
  return <div style={{backgroundColor:'lightgrey', width:'400px', height:'200px',textAlign: 'center', margin: '0 auto' }}>
    <h1>{team.name}</h1>
    <h2>{`Group: ${team.group}`}</h2>
    <img src={team.flag}/>
  </div>
}

export default TeamInfo;