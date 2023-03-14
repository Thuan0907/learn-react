import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuiz = () => {
  const [listQuiz, setListQuiz] = useState([]);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
  const [dataDelete, setDataDelete] = useState();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    setDataUpdate({});
    setDataDelete({});

    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
    console.log(">>> check res fetchQuiz: ", res);
  };

  const handleUpdate = (quiz) => {
    setDataUpdate(quiz);
    setIsShowModalUpdate(true);
  };

  const handleDelete = (quiz) => {
    setDataDelete(quiz);
    setIsShowModalDelete(true);
  };
  return (
    <>
      <div className="mt-5">List Quizzes: </div>
      <div>
        <table className="table table-hover table-bordered my-2">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listQuiz &&
              listQuiz.map((item, index) => {
                return (
                  <tr key={`table-quiz-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.difficulty}</td>
                    <td style={{ display: "flex", gap: "15px" }}>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleUpdate()}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete()}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <ModalUpdateQuiz
          show={isShowModalUpdate}
          setShow={setIsShowModalUpdate}
          dataUpdate={dataUpdate}
          setDataUpdate={setDataUpdate}
          fetchQuiz={fetchQuiz}
        />
        <ModalDeleteQuiz
          show={isShowModalDelete}
          setShow={setIsShowModalDelete}
          dataDelete={dataDelete}
          setDataDelete={setDataDelete}
        />
      </div>
    </>
  );
};

export default TableQuiz;
