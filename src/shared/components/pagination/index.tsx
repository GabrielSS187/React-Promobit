import { useLottieCustom } from "../../hooks/useLottieCustom";
import ReactPaginate from "react-paginate";

import nextAnimation from "../../assets/animations/nextAnimation.json";
import previousAnimation from "../../assets/animations/previousAnimation.json";

import { Ul_Styles } from "./styes";

interface PaginationProps {
  setCurrentPage: (input: number) => void;
};

export function Pagination ({setCurrentPage}: PaginationProps) {
  const MAX_PAGES = 500;
  
    const style = {
      height: 30,
      marginTop: -25,
      color:"red",
    }

    const next = useLottieCustom(nextAnimation, style);
    const previous = useLottieCustom(previousAnimation, style);

  return (
       <Ul_Styles>
            <ReactPaginate
              previousLabel={<div onClick={() => previous.goToAndPlay(1, true)}>
                                {previous.View}
                             </div>}
              nextLabel={<div onClick={() => next.goToAndPlay(1, true)}>
                            {next.View}
                         </div>}
              breakLabel="..."
              breakClassName="break-me"
              pageCount={MAX_PAGES}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={pagination => {
                setCurrentPage(pagination.selected + 1)
              }}
              containerClassName="pagination"
              activeClassName="active"
            />
        </Ul_Styles>
  );
};