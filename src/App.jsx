import { useState } from "react";
import ListTeams from "./components/ListTeams";
import TeamInfo from "./components/TeamInfo";
import teams from "./data/teams";

function App() {

  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleClick = (name) => {
    setSelectedTeam(teams.filter((team)=>team.name===name)[0]);
  }

  return <div style={{textAlign: 'center' }}>
    <div >
      <ListTeams teams={teams} handleClick={handleClick} ></ListTeams>
    </div>
    <br/>
    <button onClick={()=>setSelectedTeam(null)}>Clear</button>
    <tr/>
    <div>
      {selectedTeam && <TeamInfo team={selectedTeam}></TeamInfo>}
    </div>
  </div>;
}

export default App;
