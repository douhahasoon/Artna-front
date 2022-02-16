import React from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
  } from "@vechaiui/react"

 function LogInPage() {
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false)
    const handleToggleShowPassword = () => setShowPassword(!showPassword)
  
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
      setLoading(true);
      setTimeout(() => {
        alert(JSON.stringify(data));
        setLoading(false);
      }, 500);
    };
  return (
<div className="flex flex-wrap w-full p-8 space-x-4">
  <FormControl id="email">
    <FormLabel>
      Email address
    </FormLabel>
    <Input placeholder="jon@gmail.com" />
    <FormHelperText>We'll never share your email.</FormHelperText>
  </FormControl>
</div>
  )
}
export default LogInPage
