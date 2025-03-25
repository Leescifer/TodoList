
export const passwordFeatures = (password) => {
    return [
        {
            label: "Minimum 8 characters",
            valid: password.length >= 8
        },
        {
            label: "Contains lowercase letters.",
            valid: /[a-z]/.test(password)
        },
        {
            label: "Contains uppercase letters.",
            valid: /[A-Z]/.test(password)
        },
        {
            label: "Contains number.",
            valid: /\d/.test(password)
        },
        {
            label: "Contains special characters.",
            valid: /[^A-Za-z0-9]/.test(password),
        },
    ]
}


