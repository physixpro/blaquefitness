import React, { Component } from "react";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import AboutUs from "./components/AboutUs"
import "./App.css";
import Blaque from "./components/Blaque";
import Healthclubs from "./components/HealthClubs";
import Background from "./landing.png";
import SecondBackground from "./landing-2.png";
import Waitlist from "./components/Waitlist";
import axios from "axios";
import ParagraphOne from "./components/ParagraphOne";
import ParagraphTwo from "./components/ParagraphTwo";
import ThirdBackground from "./treadmills.png";
import SecondBlaque from "./components/SecondBlaque";
import NavBar from  "./components/NavBar"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }

    const content = event.currentTarget.value;

    this.sendData(content);
  }

  sendData = content => {
    const feedback = { content: content };
    axios
      .post("http://localhost:3000/createFeedback", feedback, {
        mode: "no-cors",
      })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };
  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      
      <div className="wrapper">
            {/* <img src={Background} alt="landingpage" className="bg-img" /> */}
          {<NavBar />}
            {/*Section 1 */}
            <Blaque value="BLAQUE" health="HEALTH&nbsp;CLUBS" about="ABOUT&nbsp;US" join="JOIN&nbsp;THE&nbsp;WAITLIST" contact="CONTACT"/>
            {/*Section 2 */}
            <Healthclubs blaque="BLAQUE"secondblaque="BLAQUE" secondhealth="HEALTH&nbsp;CLUBS" paragraph="Now's your chance to tell us what a Luxury Health Club for the Black Community means to you!"/>
            {/*Section 3 */}
            <AboutUs test="BLAQUE" paragraphtwo="BLAQUE.inc is the first Luxury Health Club designed to cater to the unique fitness and wellness needs of the Black Community" coming="COMING SOON TO NYC" wait="JOIN THE WAITLIST" />
      
              <Waitlist value="BLAque&nbsp;HEALTH&nbsp;CLUBS WAITLIST"/>

      <div id="question-title">QUESTIONNAIRE</div>
       <div 
       className="Questionnaire"> {this.state.result ? this.renderResult() : this.renderQuiz()}</div>
      {/* <h1 id="questionnaire">QUESTIONNAIRE</h1>*/}
        </div>
    );
  }
}


export default App;
