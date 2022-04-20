import Notiflix from "notiflix";
import { useDispatch } from "react-redux";

import {
  editNoteArchived,
  removeNote,
  toggleNoteArchived,
} from "../../redux/noteSlice";
import SvgSprite from "../SvgSprite";
import { WrrapSvgCategory, WrrapSvgIcon } from "../SvgSprite/SvgSprite.styled";
import { TdStyled } from "./Td.styled";
import { useState } from "react";
import Modal from "../Modal";
import FormComponent from "../Form/Form";

const Td = ({ row, column, idx }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isPressDel, setIsPressDel] = useState(false);
  const cell = row[column.accessor];

  const dispatch = useDispatch();

  const filterdDate = (content) => {
    const regex =
      /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]([1-2][0-9]{3})?/g;
    const match = content.match(regex);
    const result = match ? match.join(", ") : "";
    return result;
  };

  const handelToggleModal = (label) => {
    setIsOpenModal(!isOpenModal);
    if (label) {
      setIsPressDel(true);
    }
  };

  const oldDataNote = () => ({
    name: row.name,
    content: row.content,
    category: row.category,
  });

  const handelEditNote = ({ name, content, category }) => {
    const dataEditingNote = {
      id: row.id,
      name,
      content,
      category,
    };
    dispatch(editNoteArchived(dataEditingNote));
    Notiflix.Notify.info(`Edited note "${name}"!`);
    handelToggleModal();
  };

  const handleToggleArchive = () => {
    const note = row;
    dispatch(toggleNoteArchived(note.id));
    const nameNote = note.name;
    const message = note.archived
      ? `Note, "${nameNote}" out archived!!!`
      : `Note, "${nameNote}" in archived!!!`;

    Notiflix.Notify.info(message);
  };

  const handleRemoveNote = () => {
    const note = row;
    dispatch(removeNote(note.id));
    handelToggleModal();
    Notiflix.Notify.info(`Removed note "${row.name}"!`);
  };

  return (
    <>
      {isOpenModal && (
        <Modal
          onClose={handelToggleModal}
          onAgree={handleRemoveNote}
          confirmationRequest={isPressDel}
          title={!isPressDel ? "Editing Note" : "Delete note?"}
        >
          {!isPressDel && (
            <FormComponent
              onSubmit={handelEditNote}
              oldDataNote={oldDataNote()}
            />
          )}
        </Modal>
      )}
      <TdStyled tdIsBold={idx === 1}>
        {column.accessor === "icon-category" && (
          <WrrapSvgCategory>
            <SvgSprite nameId={`icon-${row.category}`} />
          </WrrapSvgCategory>
        )}
        {column.accessor === "icon-edit" && (
          <WrrapSvgIcon onClick={() => handelToggleModal()}>
            <SvgSprite nameId={`${column.accessor}`} />
          </WrrapSvgIcon>
        )}
        {column.accessor === "icon-in_archive" && (
          <WrrapSvgIcon onClick={() => handleToggleArchive()}>
            <SvgSprite nameId={`${column.accessor}`} />
          </WrrapSvgIcon>
        )}
        {column.accessor === "icon-delete" && (
          <WrrapSvgIcon onClick={() => handelToggleModal(true)}>
            <SvgSprite nameId={`${column.accessor}`} />
          </WrrapSvgIcon>
        )}
        {column.accessor === "dates" && filterdDate(row.content)}
        {cell}
      </TdStyled>
    </>
  );
};

export default Td;
