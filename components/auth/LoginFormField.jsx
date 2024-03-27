export const FormField = ({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
    disabled
}) => {
    <>
        <input
            className="text-clack"
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...register(name, { valueAsNumber })}
        />
        {error && <span className="error-message">{error.message}</span>}
    </>
}