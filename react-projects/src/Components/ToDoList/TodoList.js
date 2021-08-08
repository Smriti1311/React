
import React from 'react';
import { useTranslation } from 'react-i18next';

import './TodoList.css';
import AddTask from './AddTask/AddTask';

function TodoList() {
  const { t } = useTranslation();
  return (
    <div className="Header">
     <h1 style={{color:'lavender',textDecoration:'underline'} }>{t("toDoList")}</h1>
     <AddTask />
    </div>
  );
}

export default TodoList;
