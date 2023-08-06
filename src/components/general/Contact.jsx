import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Button, TextField } from '@mui/material'
import { DM_Serif_Display } from 'next/font/google';
import DyMap from '../DynamicComps/DynamicMap';
import Link from 'next/link';

const CssTextField = styled(TextField)({
  //cuando el input tenga el foco
  '& label.Mui-focused': {
    color: '#F9F9F9',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  //color inicial del borde
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#323232',
    },
    //color del borde al pasar por encima
    '&:hover fieldset': {
      borderColor: '#606060',
    },
    //color borde al clickear el input
    '&.Mui-focused fieldset': {
      borderColor: '#F9F9F9',
    },
    //cambiar color al texto
    '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
      color:'#F9F9F9'
    }
  },
});

const serif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const Contact = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleData = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = () => {
    setTimeout(() => {
      setData({
        name: '',
        email: '',
        message: ''
      })  
    }, 3000);
  }

  return (
    <div className='relative w-full xs:h-[1000px] xl:h-[700px] bg-stamm-black flex xs:flex-col-reverse xl:flex-row items-center'>
      <div className='xs:w-[80%] xl:w-[50%] h-full'>
        <div className='xs:w-full xl:w-[60%] xs:h-[80%] xl:h-full m-auto flex flex-col justify-evenly text-center'  data-aos="fade-in" data-aos-duration="2000">
          <h3 className={`xs:text-2xl 2xl:text-4xl text-main-white tracking-wider`}>Obtener más info</h3>
          <form className='xs:w-full flex flex-col justify-evenly xs:h-full xl:h-[70%]' action='https://getform.io/f/5ebe45c0-9173-4c41-85d6-8721825887fd' method='POST' onSubmit={handleSubmit}>
            <CssTextField 
                label="Tu nombre"
                name='name'
                value={data.name}
                onChange={handleData}
                type='text' 
                InputLabelProps={{
                    style: {
                        color:'#F9F9F9',
                        fontSize: '14px',
                    }
                }}
            />
            <CssTextField 
                label="Tu Email" 
                name='email'
                value={data.email} 
                onChange={handleData}
                type='text' 
                InputLabelProps={{
                    style: {
                        color:'#F9F9F9',
                        fontSize: '14px'
                    }
                }}
            />
            <CssTextField 
                label="Tu consulta"
                name='message'
                value={data.message}
                onChange={handleData}  
                type='textarea' 
                InputLabelProps={{
                    style: {
                        color:'#F9F9F9',
                        fontSize: '14px',
                    }
                }}
            />
            <Button variant="contained" className='button' type='submit'>ENVIAR</Button>
          </form>
        </div>
      </div>
      <DyMap />
      <div className='absolute bottom-0 w-full h-[50px] text-main-white font-extralight text-xs tracking-wider flex flex-row items-center justify-center'>
        <div className='w-[250px] text-center'>
          <h5>
            Desarrollado por <span className='hover:underline'><Link href={'https://www.linkedin.com/in/rodrigo-perez-full-stack-developer/'} target='_blank' passHref>Rodrigo Pérez</Link></span> - &copy;2023
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Contact