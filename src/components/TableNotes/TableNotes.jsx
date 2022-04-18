import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import Notiflix from "notiflix";

import columns from "../../columnsNote.json";
import { getIsArchived, getNotes } from "../../redux/noteSelector";
import { addNote } from "../../redux/noteSlice";
import ButtonStyle from "../Button";
import FormComponent from "../Form/Form";
import Modal from "../Modal";
import Table from "../Table";
import { WrrapBtnCreateNote } from "./TableNotes.styled";

const TableNotes = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const notes = useSelector(getNotes);
  const isArchived = useSelector(getIsArchived);
  const dispatch = useDispatch();

  const dataNotesIsArchived = notes.filter(
    (note) => note.archived === isArchived
  );

  const handelToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handelAddNote = ({ name, content, category }) => {
    const newNote = {
      id: uuidv4(),
      name: name,
      content: content,
      craeted: moment(Date.now()).format("LL"),
      category: category,
      dates: "",
      archived: false,
    };
    dispatch(addNote(newNote));
    Notiflix.Notify.info(`Added note ${newNote.name}`);
    handelToggleModal();
  };

  return (
    <>
      {isOpenModal && (
        <Modal
          onClose={handelToggleModal}
          title={"Add Note"}
          // isConfirmRequest={true}
        >
          <FormComponent onSubmit={handelAddNote} />
        </Modal>
      )}
      <Table columns={columns} rows={dataNotesIsArchived}></Table>
      <WrrapBtnCreateNote>
        <ButtonStyle onClick={() => handelToggleModal()}>
          {"Create Note"}
        </ButtonStyle>
      </WrrapBtnCreateNote>
    </>
  );
};

export default TableNotes;
