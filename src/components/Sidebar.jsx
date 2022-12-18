import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../ultils/constants'

const Sidebar = ({currentCategory, setCurrentCategory}) => {
  return (
    <Stack
        direction="row" 
        sx={
            {
                overflowY:'auto',
                height: {sx: 'auto', md:'95%'},
                flexDirection: {md: 'column'},
            }
        }
    >
        {categories.map((category) => (
            <button 
                key={category.name}
                className="category-btn" 
                onClick={() => {
                    setCurrentCategory(category.name)
                }}
                style={{background: category.name === currentCategory && '#3AB4F2', color: 'white'}} // If category name is selected, then set background color to #FC1503
            >
                <span style={{color: category.name === currentCategory ? 'white' : '#3AB4F2', marginRight:'15px'}}>{category.icon}</span>
                <span style={{opacity: category.name === currentCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar