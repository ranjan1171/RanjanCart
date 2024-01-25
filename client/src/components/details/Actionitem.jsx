import { Box ,Button, styled} from "@mui/material";
import {ShoppingCart as Cart ,FlashOn as Flash} from '@mui/icons-material';

import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

import  {useState} from 'react';


const  LeftContainer = styled(Box)(({ theme })=>({
minWidth:'40%',
padding: '40px 0 0 90px',
[theme.breakpoints.down('lg')]:{
   padding:'20px 40px'

 }

}));

const Image=styled('img')({
   
    width:'90%',
    padding:'15px'

});
 const StyledButtom=styled(Button)(({ theme })=>({
 width:'48%',

  height:40,
  borderRadius:2,
  [theme.breakpoints.down('lg')]:{
  width:'46%'
 
  },
  [theme.breakpoints.down('lg')]:{
    width:'48%'
   
    }
 

 
}));





const ActionItem = ({product}) => {

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [quantity]=useState(1);
  const {id }=product;


  const addItemToCart=()=>{
    dispatch(addToCart(id, quantity));
    navigate('/cart');
   

    

  }
  return (
    <LeftContainer>
        <Box style={{ padding:'15px 20px',
    border :'1px solid #f0f0f0'}}>
        < Image src={product.detailUrl} alt='product'/>
        </Box>
        <StyledButtom variant="contained" onClick={()=>addItemToCart()} style={{marginRight:10,background:'#ff9f00'  }}> <Cart/>Add to Cart </StyledButtom>
        <StyledButtom variant="contained" style={{background:'#fb541b'}}  > <Flash/>Buy Now </StyledButtom>
      
    </LeftContainer>
  )
}

export default ActionItem;
