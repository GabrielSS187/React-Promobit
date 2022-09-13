import ReactPaginate from "react-paginate";
import { Container_Styles } from "./styes";

interface PaginationProps {
  setCurrentPage: (input: number) => void;
};

export function Pagination ({setCurrentPage}: PaginationProps) {
  const MAX_PAGES = 500;

  return (
       <Container_Styles>
            <ReactPaginate
              previousLabel="⏪"
              nextLabel="⏩"
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
        </Container_Styles>
  );
};