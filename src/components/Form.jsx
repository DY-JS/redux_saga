import React from "react";

const Form = ({ search, query }) => {
  const searchHandler = (e) => {
    e.preventDefault();
    search(e.currentTarget.value);
  };
  return (
   <form style={{ display: "inline-block" }}>
      <input
        style={{ margin: "10px", padding: "12px 20px" }}
        type='text'
        placeholder='Type for search'
        value={query}
        onChange={searchHandler}
      />
    </form>
  );
};

export default React.memo(Form);
