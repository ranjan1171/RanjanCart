import React from 'react';
import { AppBar, Toolbar,Box,Typography,IconButton,Drawer,List,styled } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';


 import logo from "../logoo/logo.png"


const StyledHeader = styled(AppBar)({
  background: '#F36527',
  height: '55px',
});

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    // color: #FFFFFF;
    text-decoration: none;
    color:inherit;

`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;


`

// const PlusImage = styled('img')({
//     width: 10,
//     height: 10,
//     marginLeft: 4
// })

const CustomButtonWrapper = styled(Box)(({theme})=>({
margin: '0 5% 0 auto ',
[theme.breakpoints.down('md')]:{
   display:'none'
}
 
}))
    
  
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));
 






const Header = () => {

    
    

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  <CustomButtons />
              </listItem>
          </List>
      </Box>
  );





  return (
    <StyledHeader>
      <Toolbar style={{minHeight:55}}>
      <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

        <Component to = '/'>
            <img src={logo} alt='logo' style={{width:75 ,paddingTop:12}}/>
            <Box style={{display:'flex'}}>
                < SubHeading> Style &nbsp;
                 <Box component='span' style={{color:"#FFFF00"}}>Yourself</Box>
                </ SubHeading>
                


            </Box>

        </Component>
        <Search/>
        <CustomButtonWrapper >
            <CustomButtons/>
        </CustomButtonWrapper >
      
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;

