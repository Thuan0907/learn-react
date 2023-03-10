import _ from "lodash";

const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }

  return (
    <>
      {data.image && (
        <div className="q-image">
          <img src={`data:image/jpeg;base64, ${data.image}`} alt="" />
        </div>
      )}

      <div className="question">
        Question {index + 1}: {data.questionDescription}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((answers, index) => {
            return (
              <div key={`answers-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">
                    {answers.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
