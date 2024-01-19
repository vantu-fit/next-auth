
import { CardWrapper } from "./card-wrapper";
import FormLogin from "./form-login";

export const LoginForm = () => {

    return (
        <CardWrapper 
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Register here"
            headerLabel="Welcome Back!"
            showSocial={true}
        >
            <FormLogin />

        </CardWrapper>
    )
};