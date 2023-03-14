import "./ManageQuiz.scss";
import Select from "react-select";
import { useState } from "react";
import { postCreateNewQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];

const ManageQuiz = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const handleChangeFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    //validate
    if (!name || !description) {
      toast.error("Name/Description is required");
      return;
    }

    let res = await postCreateNewQuiz(description, name, type?.value, image);
    console.log(">>> check res Quiz: ", res);

    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage(null);
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <div className="quiz-container">
      <div className="title">Manage Quizzes</div>
      <hr />
      <fieldset className="border rounded p-3">
        <legend className="float-none w-auto px-3">Add New Quiz</legend>

        <div className="add-new">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Description</label>
          </div>

          <div className="my-3">
            <Select
              defaultValue={type}
              onChange={setType}
              options={options}
              placeholder="Quiz type ..."
            />
          </div>

          <div className="more-actions form-group">
            <label className="mb-1">Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleChangeFile(e)}
            />
          </div>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-warning"
            onClick={() => handleSubmitQuiz()}
          >
            Save
          </button>
        </div>
      </fieldset>

      <div className="list-detail">table</div>
    </div>
  );
};
export default ManageQuiz;
