"use client"
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FormField } from "./LoginFormField";

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const [isPending, startTransition] = useTransition();

    // useForm
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    // onSubmit
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>hello</p>
            <div className="grid col-auto">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    {...register("email")}
                    error={errors.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register("password")}
                    error={errors.email}
                />

                <button type="submit" className="submit-button" disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
