import React, { useEffect, useRef, useState } from "react";

const Form = ({ search, query }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => setIsTouched(true);

  const searchHandler = (e) => {
    e.preventDefault();
    search(e.currentTarget.value);
  };

  useEffect(() => {
    (inputRef.current.value !== "" && inputRef.current.focus()) ||
      (isTouched && inputRef.current.focus());
  }, []);

  const inputRef = useRef();
  console.log(isTouched);
  return (
    <form style={{ display: "inline-block" }}>
      <input
        ref={inputRef}
        style={{ margin: "10px", padding: "12px 20px" }}
        type='text'
        placeholder='Type for search'
        value={query}
        onBlur={handleBlur}
        onChange={searchHandler}
      />
    </form>
  );
};

export default React.memo(Form);
