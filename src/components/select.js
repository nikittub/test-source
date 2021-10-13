import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Categories from '../json/categories.json';

export default function SelectAutoWidth() {
  const [categories, setСategories] = React.useState('');

  const handleChange = (event) => {
    setСategories(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={categories}
          onChange={handleChange}
          width={300}
          label="Категория"
        >
            {Categories.map((postDetail) => {
                return <MenuItem value={postDetail.id} key={postDetail.flags}>{postDetail.name}</MenuItem>
            })}
        </Select>
      </FormControl>
    </div>
  );
}
