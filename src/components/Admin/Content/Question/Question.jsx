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
      description: "question 1",
      imageFile: "",
      imageName: "",
      answers: [
        {
          id: uuidv4(),
          description: "answers 1",
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
  console.log(">>> questions: ", questions);

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
                    />
                    <label>Question {index + 1} description</label>
                  </div>
                  <div className="group-upload">
                    <label>
                      <RiImageAddFill className="label-up" />
                    </label>
                    <input type="file" hidden />
                    <span>0 file is uploaded</span>
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
                        />
                        <div className="form-floating answer-name">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="name@example.com"
                            value={answers.description}
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
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Questions;
