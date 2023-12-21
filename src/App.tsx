import ExpenseFilter from './components/ExpenseFilter';
import ExpenseTable from './components/ExpenseTable';
import Form from './components/Form';
import { useState } from 'react';
import ProductList from './components/ProductList';
import { item } from './utils';
import Users from './components/Users';
import TodoList from './components/TodoList';
import Posts from './components/Posts';
import ToDoForm from './components/ToDoForm';
import Counter from './state-management/Counter';

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
    <Counter />
    // <>
    //   <div className="mb-3">
    //     <ToDoForm />
    //   </div>
    //   <div className="mb-3">
    //     <TodoList />
    //   </div>
    // </>
    // <>
    //   <div className="mb-3">
    //     <Users />
    //   </div>
    //   <div className="mb-3">
    //     <select className="form-select" onChange={(e) => setSelectedCategory(e.target.value)}>
    //       <option value="">All categories</option>
    //       {item.map((item) => (
    //         <option key={item} value={item}>
    //           {item}
    //         </option>
    //       ))}
    //     </select>
    //     <ProductList category={selectedCategory} />
    //   </div>
    //   <div className="mb-5">
    //     <Form onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1}])} />
    //   </div>
    //   <div className="mb-3">
    //     <ExpenseFilter
    //       onSelectCategory={(category) => setSelectedCategory(category)}
    //     />
    //   </div>
    //   <ExpenseTable
    //     expenses={visibleExpenses}
    //     onDelete={(id) =>
    //       setExpenses(expenses.filter((expense) => expense.id !== id))
    //     }
    //   />
    // </>
  );
};

export default App;
