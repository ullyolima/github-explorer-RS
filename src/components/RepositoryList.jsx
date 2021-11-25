import React from "react";
import RepositoryItem from "./RepositoryItem";

const repository = {
  name: "Unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
};

export default RepositoryList;
