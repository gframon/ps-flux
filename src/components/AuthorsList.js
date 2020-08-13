import React, { useState, useEffect } from "react";
import { getAuthors } from "../api/authorApi";
import SelectInput from "./common/SelectInput";

function AuthorsList(props) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((_authors) => setAuthors(_authors));
  }, []);

  return (
    <SelectInput
      options={authors}
      id={props.id}
      label={props.label}
      name={props.name}
      onChange={props.onChange}
      error={props.error}
    />
  );
}

export default AuthorsList;
