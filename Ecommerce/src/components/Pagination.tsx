
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
}) => {
  // Show only pages 1-5 and 10
  const pageNumbers = [1, 2, 3, 4, 5, 10];

  return (
    <div className="pagination">
      <button
        className="page-control"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/paginationleft.svg" alt="Previous" />
      </button>

      <div className="page-numbers-container">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-number ${currentPage === number ? 'active' : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        className="page-control"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === 10}
      >
        <img src="/paginationright.svg" alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;