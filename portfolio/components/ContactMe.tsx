import React from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/solid'
import {useForm,SubmitHandler} from 'react-hook-form'
import { Pageinfo } from '@/typings';
import toast from 'react-hot-toast';

type Inputs = {
    name:string ,
    email:string,
    subject:string,
    message:string
};

type props ={
    details : Pageinfo
};


const ContactMe = ({details}:props) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        try {
            const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              toast.success('Email sent successfully!');
              reset()
            } else {
              toast.error('Failed to send email.');
            }
          } catch (error) {
            console.error('Error:', error);
            toast.error('An unexpected error occurred.');
          }
      };
  
    return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Contact</h3>

        <div className='flex flex-col lg:space-y-5 xl:space-y-10 mt-10 w-[97%] md:full '>
            <h4 className='text-2xl max-w-[90%] md:text-4xl  font-semibold text-center mx-auto'>
                I have got just what you need.{" "}
                <span className='underline decoration-[#F7AB0A]/50'>Let&apos;s Talk</span>
            </h4>

            <div className='mt-5 space-y-3 xl:space-y-10 mx-auto'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md md:text-xl'>{details.phoneNumber}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md md:text-xl'>{details.email}</p>

                </div><div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md md:text-xl'>{details.address}</p>
                </div>

            </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md sm:min-w-fit flex flex-col mt-5 space-y-2 mx-auto'>
                <div className='w-max-full flex flex-col md:flex-row space:y-4 md:space-x-2'> 
                    <input {...register('name')}  placeholder='Name' className=' contactInput' type="text" name="name" id="name" />
                    <input {...register('email')} placeholder='Email' className=' contactInput' type="email" name="email" id="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className=' contactInput' type="text" name="subject" id="subject" />
                <textarea {...register('message')} placeholder='Message' className=' contactInput' />
                <button type='submit' className=' bg-[#F7AB0A] py-2 xl:py-5 px-5 xl:px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default ContactMe