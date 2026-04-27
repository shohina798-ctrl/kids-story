import  { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 
import { useNavigate } from 'react-router-dom';
const SelectOp = ({selectOptions=[JSON.parse(localStorage.getItem('navigation'))]}) => {
    const navigate = useNavigate();
    const [nav, setNav] = useState('');
    const handleChange = (event) => {
        setNav(event.target.value); 
        navigate(event.target.value.path);
        localStorage.setItem('navigation', JSON.stringify(event.target.value.label));
        
    };
  return (
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{JSON.parse(localStorage.getItem('navigation'))}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="/"
    label={nav.label}
    onChange={handleChange}
  >
    {selectOptions?.map((item)=>(
        <MenuItem key={item.id} value={item}> {item.label} </MenuItem>
    ))}
  </Select>
</FormControl>
  )
}

export default SelectOp
