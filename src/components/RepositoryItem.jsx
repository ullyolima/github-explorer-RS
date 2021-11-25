import React from "react";

const RepositoryItem = (props) => {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default"}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.link}>Acessar repositório</a>
    </li>
  );
};

export default RepositoryItem;
