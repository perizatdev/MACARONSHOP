import React, { useState } from 'react';
import Container from '../../../shared/helpers/Container';
import card from '../../../shared/assets/Abu/carousel.png';
import cart from '../../../shared/assets/Abu/card.svg';
import { Modal, Box, Button,Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  width: 400,
  height: 50,
};

function Nabor() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log("Button clicked");
    handleClose();
  };

  return (
    <div>
      <Container>
        <div className='w-[400px] mx-auto text-[30px] font-semibold text-[rgb(41,41,41)] mt-[107px] mb-[47px]'>Популярные наборы</div>
        <div>
          <div className='w-[370px] h-[459px]'>
            <img className='w-full h-[300px]' src={card} alt="Card" />
            <p className='text-[rgb(41,41,41)] text-[20px] font-semibold w-[327px] mx-auto mt-[21px]'>Сердце</p>
            <p className='text-gray-500 text-base font-normal w-[327px] mx-auto mt-[14px]'>24 штуки в коробке в виде сердца. Ассорти из 6 вкусов</p>
            <div className='w-[327px] border-t border-gray-400 flex justify-between mx-auto mt-[28px]'>
              <p className='text-[#E7426A] p-2'>1800 руб</p>
              <div onClick={handleOpen} className='flex gap-[12px] w-[130px] border-l border-gray-400 p-2 text-[14px] font-semibold text-[rgb(41,41,41)]'>
                <img src={cart} alt="Cart" />
                  <p >В карзину</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography className='flex justify-center items-center' id="modal-modal-title" variant="h6" component="h2">
          Чтобы купить товары нужно
        </Typography>

        <Link to={'/register'}>
          <Button sx={buttonStyle} onClick={handleSubmit} variant="contained" color="primary">
            Зарегистироваться
          </Button>
        </Link>
        </Box>
      </Modal>
    </div>
  );
}

export default Nabor;


