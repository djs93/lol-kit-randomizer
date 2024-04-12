import "./App.css";
import championData from "./championFull.json";
import Button from "react-bootstrap/Button";
import SkillDisplayer from "./SkillDisplayer";
import { useState } from "react";

function App() {
    let [skills, setSkills] = useState([]);
    console.log(Object.keys(championData.data));
    const pickRandomSkills = () => {
        let newSkills = [];
        let keys = Object.keys(championData.data);
        for (let i = 0; i < 4; i++) {
            let randomIndex = Math.floor(Math.random() * keys.length);
            let randomKey = keys[randomIndex];
            newSkills.push(championData.data[randomKey].spells[i]);
            keys.splice(randomIndex, 1);
        }
        setSkills(newSkills);
    };
    return (
        <div className="App">
            <div className="skillRow">
                <SkillDisplayer skill={skills[0]}></SkillDisplayer>
                <SkillDisplayer skill={skills[1]}></SkillDisplayer>
                <SkillDisplayer skill={skills[2]}></SkillDisplayer>
                <SkillDisplayer skill={skills[3]}></SkillDisplayer>
            </div>
            <Button style={{ width: "20%" }} onClick={pickRandomSkills}>
                Roll
            </Button>
        </div>
    );
}

export default App;
