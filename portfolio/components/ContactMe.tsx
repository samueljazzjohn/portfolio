import React from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/solid'
import {useForm,SubmitHandler} from 'react-hook-form'

type Inputs = {
    name:string ,
    email:string,
    subject:string,
    message:string
};

type props ={};


const ContactMe = ({}:props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit : SubmitHandler<Inputs>  = (formData) =>{
    window.location.href = `mailto:samueljazzjohn@gmail?subject=${formData.subject}&body=Hi my name is ${formData.name}, ${formData.message} (${formData.email})`
  };
  
    return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Contact</h3>

        <div className='flex flex-col lg:space-y-5 xl:space-y-10 mt-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='underline decoration-[#F7AB0A]/50'>Let's Talk</span>
            </h4>

            <div className='mt-5 space-y-3 xl:space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>+91 7034491692</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>samuelj.bethel@gmail.com</p>

                </div><div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>Calicut, Kerala, India</p>
                </div>

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-5 space-y-2 mx-auto'>
                <div className='flex space-x-2'> 
                    <input {...register('name')}  placeholder='Name' className='contactInput' type="text" name="name" id="name" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" name="email" id="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" name="subject" id="subject" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-2 xl:py-5 px-5 xl:px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default ContactMe