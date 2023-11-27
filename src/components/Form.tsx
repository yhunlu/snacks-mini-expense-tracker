import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { item } from '../utils';

const schema = z.object({
  description: z
    .string({
      invalid_type_error: 'Description is required',
    })
    .min(3, { message: 'Description must be at least 3 characters' })
    .max(50, { message: 'Description must be at most 50 characters' }),
  amount: z
    .number({
      invalid_type_error: 'Amount is required',
    })
    .min(0.01, { message: 'Amount must be at least 0.01' })
    .max(100_000, {
      message: 'Amount must be at most 100000',
    }),
  category: z.enum(item, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register('description')}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register('category')} id="category" className="form-select">
          <option value=""></option>
          {item.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
