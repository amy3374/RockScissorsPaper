import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPaper,
  faHandRock,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

//1.박스 2개(타이틀, 사진, 결과)
//2.가위 바위 보 버튼 3개
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 됨
//5. 3 4의 결과를 가지고 승패를 따진다.
//6. 승패의 결과에 따라 테두리 색이 바뀜(이기면 초록, 지면 빨강, 비기면 검정)
const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/5773/5773204.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/2928/2928823.png",
  },
  paper: {
    name: "Paper",
    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-17.jpg",
  },
};
function App(props) {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log(user, computer);
    if (user.name == computer.name) {
      return "TIE";
    } else if (user.name == "Rock")
      return computer.name == "scissors" ? "WIN" : "LOSE";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "WIN" : "LOSE";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "WIN" : "LOSE";
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button className="main-btn" onClick={() => play("rock")}>
          <FontAwesomeIcon icon={faHandRock} size="xl" />
        </button>
        <button className="main-btn" onClick={() => play("scissors")}>
          <FontAwesomeIcon icon={faHandScissors} size="xl" />
        </button>
        <button className="main-btn" onClick={() => play("paper")}>
          <FontAwesomeIcon icon={faHandPaper} size="xl" />
        </button>
      </div>
    </div>
  );
}

export default App;
