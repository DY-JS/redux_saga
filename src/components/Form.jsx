import React, { useEffect, useRef } from "react";

const Form = ({ search, query }) => {
  const searchHandler = (e) => {
    e.preventDefault();
    search(e.currentTarget.value);
  };
  useEffect(() => {
    inputRef.current.value !== "" && inputRef.current.focus();
  }, []);
  console.log("form");
  const inputRef = useRef();
  return (
    <form style={{ display: "inline-block" }}>
      <input
        ref={inputRef}
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
