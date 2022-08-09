import React from 'react'

const ListTeams = ({teams, handleClick}) => {
  return (
    <>
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto auto auto'}}>
        {teams.map((team)=> <div key={team.name} onClick={()=>handleClick(team.name)}> <button>{team.name}</button> </div>)}
    </div>
    </>
  )
}

export default ListTeams;