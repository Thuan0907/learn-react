import _ from "lodash";
import Lightbox from "react-awesome-lightbox";
import { useState } from "react";

const Question = (props) => {
  const { data, index } = props;
  const [isPreviewImage, setIsPreviewImage] = useState(false);

  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleHandleCheckBox = (e, aId, qId) => {
    props.handleCheckBox(aId, qId);
  };

  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setIsPreviewImage(true)}
            src={`data:image/jpeg;base64, ${data.image}`}
            alt=""
          />

          {isPreviewImage === true && (
            <Lightbox
              image={`data:image/jpeg;base64, ${data.image}`}
              title={"Question Image"}
              onClose={() => setIsPreviewImage(false)}
            ></Lightbox>
          )}
        </div>
      ) : (
        <div className="q-image"></div>
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
                    checked={answers.isSelected}
                    onChange={(e) =>
                      handleHandleCheckBox(e, answers.id, data.questionId)
                    }
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
