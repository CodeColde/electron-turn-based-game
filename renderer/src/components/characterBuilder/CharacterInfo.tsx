import * as React from "react";
import Header from "../Atoms/Header";

interface Props {
  name: string;
  selectedGender: string;
  setName: (name: string) => void;
  setGender: (gender: string) => void;
}

const CharacterInfo: React.FC<Props> = ({
  name,
  selectedGender,
  setName,
  setGender
}) => {
  return (
    <>
      <Header variant="Big">Basic Information</Header>
      <div>
        <label>Name: </label>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <p>Gender: </p>
        <label>
          Male:{" "}
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={e => setGender(e.target.value)}
            checked={selectedGender === "Male"}
          />
        </label>
        <label>
          Female:{" "}
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={e => setGender(e.target.value)}
            checked={selectedGender === "Female"}
          />
        </label>
      </div>
    </>
  );
};

export default CharacterInfo;
