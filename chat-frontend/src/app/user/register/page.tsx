"use client";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import StrongPassword from "@/ui/StrongPassword";
import Form from "@/ui/Form";
import {
    useForm,
    Controller,
    SubmitHandler,
    SubmitErrorHandler,
} from "react-hook-form";
import FieldControl from "@/ui/FieldControl";

type RegisterForm = {
    firstName: string;
    lastName: string;
    nickName: string;
    photo: FileList;
    password: string;
    secondPassword: string;
    passwordValidation: string;
};

const REQUIRED_MSG = "This field is required";

export default function Register() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm<RegisterForm>();
    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
        console.log(data);
    };
    const onError: SubmitErrorHandler<RegisterForm> = (errors) => {
        console.log(errors);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>{errors.password?.message}</div>
            <Heading type="h1" className="text-center">
                Register Yourself
            </Heading>

            <FieldControl label="First Name" error={errors.firstName?.message}>
                <Input
                    type="text"
                    {...register("firstName", { required: REQUIRED_MSG })}
                />
            </FieldControl>

            <FieldControl label="Last Name" error={errors.lastName?.message}>
                <Input
                    type="text"
                    {...register("lastName", { required: REQUIRED_MSG })}
                />
            </FieldControl>

            <FieldControl label="Nick Name" error={errors.nickName?.message}>
                <Input
                    type="text"
                    {...register("nickName", { required: REQUIRED_MSG })}
                />
            </FieldControl>

            <FieldControl label="Photo" error={errors.photo?.message}>
                <Input
                    type="file"
                    accept="image/png"
                    {...register("photo", { required: REQUIRED_MSG })}
                />
            </FieldControl>

            <FieldControl
                label="Password"
                error={
                    errors.password?.message ||
                    errors.passwordValidation?.message
                }
            >
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: REQUIRED_MSG }}
                    render={({ field }) => (
                        <StrongPassword
                            onBlur={field.onBlur}
                            onChange={field.onChange}
                            name={field.name}
                            inputRef={field.ref}
                            onError={({ error }) => {
                                if (!error) {
                                    console.log("Cleaning Errors");
                                    clearErrors("passwordValidation");
                                    return;
                                }

                                setError(
                                    "passwordValidation",
                                    {
                                        type: "validated",
                                        message: error,
                                    },
                                    { shouldFocus: true }
                                );
                            }}
                        />
                    )}
                />
            </FieldControl>

            <FieldControl
                label="Repeat Password"
                error={errors.secondPassword?.message}
            >
                <Input
                    type="password"
                    autoComplete="new password"
                    {...register("secondPassword")}
                />
            </FieldControl>

            <div className="flex justify-center mt-4">
                <Button type="submit">Submit</Button>
            </div>
        </Form>
    );
}
