import React, { useMemo } from "react";

export default function PeoplePagination({ page, total, onChange }) {
  const LIMIT = 10;

  const totalPages = useMemo(() => Math.ceil(total / LIMIT), [total, LIMIT]);

  return (
    <div style={{margin: "0 auto"}}>
      {Array.from({ length: totalPages }, (_, i) => i + 1) //превратит в массив [1,2,3...]
        .map((pageIndex) => {//отрисует 1 2 3 ...
          const isActive = pageIndex === page;
          const action = () => {
              if(pageIndex !==page) {
                   onChange(pageIndex)
              }
          };
          return isActive
           ? <b onClick={action} key={pageIndex}>
               {` ${pageIndex} `}
            </b>
           : <span onClick={action} key={pageIndex}>
               {` ${pageIndex} `}
            </span>;
        })}
    </div>
  );
}
