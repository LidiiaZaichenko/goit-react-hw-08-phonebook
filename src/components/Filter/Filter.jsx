import { WrapperFiler, FilterInput, FilterP } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtration } from 'Redux/Contacts/filterSlice';
import { SearchOutlined } from '@ant-design/icons';
import { selectFilter } from '../../Redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <WrapperFiler>
      <FilterP>Find contacts by name</FilterP>

      <FilterInput
        prefix={<SearchOutlined />}
        type="text"
        value={filter}
        onChange={e => dispatch(filtration(e.target.value))}
      />
    </WrapperFiler>
  );
};
