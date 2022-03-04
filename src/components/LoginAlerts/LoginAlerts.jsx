import React from 'react'

export default function LoginAlerts(props) {
  return (
    <div className='flex  justify-center' >

   { (props.id === 1) &&  <div class="p-4 mb-4 text-md text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
  <span class="font-medium">Awesome !</span> Login Successfully
</div>}



{ (props.id === 0) &&  <div class="p-4 mb-4 text-md text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
  <span class="font-medium">Sorry !</span> Failed to Login
</div>}


    </div>
  )
}
