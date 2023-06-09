import React,{ useState  }  from "react";
// import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import arrow from '../image/arrow.png'
import Remeberme from './Remeberme'
import Contactwith from './Contactwith'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'
import { useForm } from "react-hook-form";
import LoginAlerts from '../../LoginAlerts/LoginAlerts';





export default function Registration(props) {
     const {register, handleSubmit, formState: {errors},reset} = useForm()
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [alert, setalert] = useState(null);
    

    const login = (e)=>{
        e.preventDefault()
    
        axios({
            method: "post",
            url: 'https://douha.pythonanywhere.com/api/auth/signin',
            data:   {
                
        email:email,
        password:password,
    
    },
        })
        .then((response)=>{
            console.log(response)
            let data = response.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            navigate('/')
            setalert(1);
            setTimeout(() => {
                setalert(null)
            }, 2000);
        })
        .catch((err)=>{
            console.log(err)
            setalert(0);
            setTimeout(() => {
            setalert(null)
            }, 2000);
        })
    }
    
    // const {register, handleSubmit, formState: {errors},reset} = useForm()

    // const onSubmit = (data) =>{
    //     console.log(data);
    //     reset()
    // }
    
    // const handleAdd = (e) => {
    //     e.preventDefault()
    //     alert('You have submitted')
    // }
    const backButton = () =>{
        navigate('/signup')
    }
    return (

        
        
        <div class="grid flex-grow h-full  ">
          
                <button onClick={backButton} class="btn btn-square btn-ghost w-40 ml-5 ">
                    <img src={arrow} alt="arrow" height={30} width={30} />
                    <p class="text-gray-400 ml-2">Back</p>
                </button>
         <form className='form' onSubmit={login}>
         <div className='form-control'>
            
            
            <div class="place-self-center mb-10">
                <p class="text-3xl font-sans">
                    <b>Account Login</b>
                </p>
                <p class="text-xs font-sans text-gray-400">
                    Dont have an account ?
                    <Link to='/signup'>
                        <a href='#' class="text-xs font-sans text-gray-600"> Sign up here</a>
                    </Link>
                </p>
            </div>
           
            
            <div class="form-control  place-self-center">
                <label class="label">
                    <span class="label-text  mx-8 text-gray-400">
                        Email Address
                    </span>
                </label>
                <input
                        value={email}
                        type="email"
                        placeholder="Email Address"
                        class="input  input-bordered  mx-8 w-80 place-self-center"
                        {...register("email", {
                        onChange: (e) => setEmail(e.target.value),
                        required: "email is required",
                })} required />
                {/* {errors.email && (<small className="text-red-400 ml-9"> {errors.email.message} </small>)} */}

            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text  mx-8 text-gray-400 ">
                        Password
                    </span>
                </label>
                <input
                value={password}
                type="password"
                placeholder="password"
                class="input  input-bordered  mx-8 w-80 place-self-center"
                {...register("password", {
        onChange: (e) => setPassword(e.target.value),
        required: "Password is required",
            })} 
            required />
            {password.email && (<small className="text-red-400 ml-9"> {errors.password.message} </small>)}

            

            </div>

            <Remeberme />
            <button  type="submit"  class="btn btn-wide  mx-8 place-self-center  ">
                Login
            </button>
           

        </div>
         </form>
        </div>
        

    )
}

