import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
`;

export const DateText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const TimeText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  font-weight: 500;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 0.625rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const StatIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 0.625rem;
  border: 1px solid #e5e7eb;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchBox = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: white;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 150px;

  &:hover {
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const TableWrapper = styled.div`
  background: white;
  border-radius: 0.625rem;
  border: 1px solid #e5e7eb;
  overflow-x: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    border-radius: 0.375rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`;

export const TableHead = styled.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  background-color: #f9fafb;
  border-bottom: 2px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  color: #374151;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${(props) => {
    const color = props.statusColor;
    if (color === "#10b981") return "#dcfce7";
    if (color === "#ef4444") return "#fee2e2";
    if (color === "#f97316") return "#ffedd5";
    return "#dbeafe";
  }};
  color: ${(props) => props.statusColor};
  border: 1px solid
    ${(props) => {
      const color = props.statusColor;
      if (color === "#10b981") return "#86efac";
      if (color === "#ef4444") return "#fca5a5";
      if (color === "#f97316") return "#fdba74";
      return "#93c5fd";
    }};
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6b7280;
  font-size: 1rem;
`;

export const ErrorText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #dc2626;
  font-size: 1rem;
  background-color: #fee2e2;
  border: 1px solid #fca5a5;
  border-radius: 0.375rem;
`;

export const NoDataText = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #6b7280;
  font-size: 1rem;
`;
