import "./SkillDisplayer.css";
// Create a context containing all images in the spell directory
const images = require.context("./spell", true);
// SkillDisplayer will display the skill name under the skill icon
const SkillDisplayer = ({ skill }) => {
    return (
        <div className="skillDisplayer">
            {skill ? (
                <>
                    <img
                        className="skillImage"
                        src={images(`./${skill.image.full}`)}
                        alt={skill.name}
                    />
                    <p>{skill.name}</p>
                </>
            ) : (
                <>
                    <div className="skillImageEmpty"></div>
                    <p>None</p>
                </>
            )}
        </div>
    );
};

export default SkillDisplayer;
