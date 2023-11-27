import { item } from "../utils";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {item.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
