import { useState } from "react";
import Select from "react-select";
import "./Question.scss";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const Questions = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});

  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      description: "",
      imageFile: "",
      imageName: "",
      answers: [
        {
          id: uuidv4(),
          description: "",
          isCorrect: false,
        },
      ],
    },
  ]);

  const handleAddRemoveQuestion = (type, id) => {
    if (type === "ADD") {
      const newQuestion = {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        answers: [
          {
            id: uuidv4(),
            description: "",
            isCorrect: false,
          },
        ],
      };
      setQuestions([...questions, newQuestion]);
    }

    if (type === "REMOVE") {
      let questionsClone = _.cloneDeep(questions);
      questionsClone = questionsClone.filter((item) => item.id !== id);
      setQuestions(questionsClone);
    }

    console.log(">>> check type, id: ", type, id);
  };

  const handleAddRemoveAnswer = (type, questionId, answersId) => {
    let questionsClone = _.cloneDeep(questions);
    if (type === "ADD") {
      const newAnswer = {
        id: uuidv4(),
        description: "",
        isCorrect: false,
      };

      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers.push(newAnswer);
      setQuestions(questionsClone);
    }

    if (type === "REMOVE") {
      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers = questionsClone[index].answers.filter(
        (item) => item.id !== answersId
      );
      setQuestions(questionsClone);
    }
  };

  const handleOnChange = (type, questionId, value) => {
    if (type === "QUESTION") {
      let questionsClone = _.cloneDeep(questions);
      let index = questionsClone.findIndex((item) => item.id === questionId);
      if (index > -1) {
        questionsClone[index].description = value;
        setQuestions(questionsClone);
      }
    }
  };

  const handleOnChangeFileQuestion = (questionId, e) => {
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => item.id === questionId);
    if (index > -1 && e.target.files && e.target.files[0]) {
      questionsClone[index].imageFile = e.target.files[0];
      questionsClone[index].imageName = e.target.files[0].name;
      setQuestions(questionsClone);
    }
  };

  const handleAnswerQuestion = (type, answersId, questionId, value) => {
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => item.id === questionId);

    if (index > -1) {
      questionsClone[index].answers = questionsClone[index].answers.map(
        (answers) => {
          if (answers.id === answersId) {
            if (type === "CHECKBOX") {
              answers.isCorrect = value;
            }
            if (type === "INPUT") {
              answers.description = value;
            }
          }
          return answers;
        }
      );

      setQuestions(questionsClone);
    }
  };

  const handleSubmitQuestionForQuiz = () => {
    console.log(">>> questions: ", questions);
  };

  return (
    <div className="question-container">
      <div className="title">Manage questions</div>
      <hr />
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label className="mb-2">Select Quiz: </label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mb-2 mt-3">Add question:</div>

        {questions &&
          questions.length > 0 &&
          questions.map((questions, index) => {
            return (
              <div key={questions.id} className="q-main mb-4">
                <div className="questions-content">
                  <div className="form-floating description">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name@example.com"
                      value={questions.description}
                      onChange={(e) =>
                        handleOnChange("QUESTION", questions.id, e.target.value)
                      }
                    />
                    <label>Question {index + 1} description</label>
                  </div>
                  <div className="group-upload">
                    <label htmlFor={`${questions.id}`}>
                      <RiImageAddFill className="label-up" />
                    </label>
                    <input
                      id={`${questions.id}`}
                      type="file"
                      hidden
                      onChange={(e) =>
                        handleOnChangeFileQuestion(questions.id, e)
                      }
                    />
                    <span>
                      {questions.imageName
                        ? questions.imageName
                        : "0 file is uploaded"}
                    </span>
                  </div>
                  <div className="btn-add">
                    <span onClick={() => handleAddRemoveQuestion("ADD", "")}>
                      {<BsPatchPlus className="icon-add" />}
                    </span>
                    <span
                      onClick={() =>
                        handleAddRemoveQuestion("REMOVE", questions.id)
                      }
                    >
                      {<BsPatchMinus className="icon-remove" />}
                    </span>
                  </div>
                </div>

                {questions.answers &&
                  questions.answers.length > 0 &&
                  questions.answers.map((answers, index) => {
                    return (
                      <div key={answers.id} className=" answers-content">
                        <input
                          className="form-check-input isCorrect"
                          type="checkbox"
                          checked={answers.isCorrect}
                          onChange={(e) =>
                            handleAnswerQuestion(
                              "CHECKBOX",
                              answers.id,
                              questions.id,
                              e.target.checked
                            )
                          }
                        />
                        <div className="form-floating answer-name">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="name@example.com"
                            value={answers.description}
                            onChange={(e) =>
                              handleAnswerQuestion(
                                "INPUT",
                                answers.id,
                                questions.id,
                                e.target.value
                              )
                            }
                          />
                          <label>answer {index + 1}</label>
                        </div>
                        <div className="btn-group">
                          <span
                            onClick={() =>
                              handleAddRemoveAnswer("ADD", questions.id)
                            }
                          >
                            {<AiOutlinePlusCircle className="icon-add" />}
                          </span>
                          {questions.answers.length > 1 && (
                            <span
                              onClick={() =>
                                handleAddRemoveAnswer(
                                  "REMOVE",
                                  questions.id,
                                  answers.id
                                )
                              }
                            >
                              {<AiOutlineMinusCircle className="icon-remove" />}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}

        {questions && questions.length > 0 && (
          <div>
            <button
              className="btn btn-warning"
              onClick={() => handleSubmitQuestionForQuiz()}
            >
              Save Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
