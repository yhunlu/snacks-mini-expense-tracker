import ExpenseFilter from './components/ExpenseFilter';
import ExpenseTable from './components/ExpenseTable';
import Form from './components/Form';
import { useState } from 'react';

export const item = [
  { value: 'Food', label: 'Food' },
  { value: 'Household', label: 'Household' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Other', label: 'Other' },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Expense 1', amount: 10, category: 'Food' },
    { id: 2, description: 'Expense 2', amount: 20, category: 'Household' },
    { id: 3, description: 'Expense 3', amount: 30, category: 'Entertainment' },
    { id: 4, description: 'Expense 4', amount: 40, category: 'Other' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="div mb-3">
        <Form />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseTable
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
};

export default App;
