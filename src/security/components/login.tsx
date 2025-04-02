import { FC, useState } from "react";
import { FlexBox } from "../../common/components/flex-box";
import { Typography } from "@mui/material";
import {
    BooleanInput,
    Button,
    email,
    PasswordInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    Toolbar,
    useGetList,
    useLogin,
    useNotify,
} from "react-admin";
import { Google as GoogleIcon } from "@mui/icons-material";
import { TabPanel } from "../../common/components/tab-panel";
import { useTabManager } from "../../common/hook/use-tab-manager";

// Fonction de validation personnalisée pour vérifier si les mots de passe correspondent
const validatePasswordMatch = (value: string, allValues: any) => {
    return value !== allValues.password ? "Les mots de passe ne correspondent pas" : undefined;
};

export const Login: FC = () => {
    const login = useLogin();
    const notify = useNotify();
    const [isLoading, setIsLoading] = useState(false);
    const LOGIN_TABS = ["Login", "Register"];
    const { data: countries = [] } = useGetList("country");

    const { tabIndex, handleTabChange } = useTabManager({
        tabParamName: "type",
        values: LOGIN_TABS,
    });

    const handleSubmit = async (data: any) => {
        try {
            setIsLoading(true);
            await login(data);
        } catch (error) {
            console.error("Login error:", error);
            notify("Authentication error", { type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FlexBox
            sx={{
                width: "100%",
                height: "100vh",
                overflowY: "scroll",
                bgcolor: "#383838",
            }}
        >
            <FlexBox sx={{ bgcolor: "white", borderRadius: "10px", alignItems: "stretch" }}>
                {tabIndex === 0 && (
                    <FlexBox
                        sx={{
                            bgcolor: "#1976d2",
                            flexDirection: "column",
                            borderRadius: "10px",
                            p: 4,
                            minWidth: "420px",
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
                            Welcome Back
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                            Login to continue your journey
                        </Typography>
                        <Button
                            size="medium"
                            label="Register"
                            sx={{ textTransform: "none", bgcolor: "white", color: "black" }}
                            variant="contained"
                            onClick={() => handleTabChange(1)}
                        />
                    </FlexBox>
                )}

                <TabPanel currentIndex={tabIndex} index={0}>
                    <FlexBox
                        sx={{
                            flexDirection: "column",
                            justifyContent: "center",
                            borderRadius: "10px",
                            p: 4,
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold" }} variant="h4" color="primary">
                            Login
                        </Typography>
                        <Typography sx={{ color: "gray" }}>
                            Login to continue your journey
                        </Typography>
                        <SimpleForm
                            disableInvalidFormNotification
                            onSubmit={handleSubmit}
                            toolbar={
                                <Toolbar sx={{ gap: 2 }}>
                                    <Button
                                        type="submit"
                                        size="medium"
                                        sx={{ textTransform: "none" }}
                                        color="primary"
                                        label="Login"
                                        loading={isLoading}
                                        variant="contained"
                                    />
                                    <Typography>Or</Typography>
                                    <Button
                                        size="medium"
                                        sx={{ textTransform: "none" }}
                                        color="primary"
                                        label="Login with Google"
                                        variant="outlined"
                                        startIcon={<GoogleIcon />}
                                        loading={isLoading}
                                        onClick={() => {} /* Logic for Google login */}
                                    />
                                </Toolbar>
                            }
                        >
                            <TextInput validate={[required("This field is required")]} color="primary" source="username" label="Username" />
                            <PasswordInput validate={[required("This field is required")]} color="primary" source="password" label="Password" />
                            <FlexBox>
                                <BooleanInput color="primary" source="remember" label="Remember me" />
                            </FlexBox>
                        </SimpleForm>
                    </FlexBox>
                </TabPanel>

                <TabPanel currentIndex={tabIndex} index={1}>
                    <FlexBox
                        sx={{
                            flexDirection: "column",
                            justifyContent: "center",
                            borderRadius: "10px",
                            p: 4,
                        }}
                    >
                        <Typography sx={{ fontWeight: "bold" }} variant="h4" color="primary">
                            Register
                        </Typography>
                        <Typography sx={{ color: "gray" }}>
                            Create an account to get started
                        </Typography>
                        <SimpleForm disableInvalidFormNotification onSubmit={handleSubmit}
                            toolbar={
                                <Toolbar sx={{ gap: 2 }}>
                                    <Button type="submit" size="medium" sx={{ textTransform: "none" }} color="primary" label="Register" loading={isLoading} variant="contained" />
                                </Toolbar>
                            }
                        >
                            <TextInput validate={[required("This field is required")]} color="primary" source="username" label="Username" />
                            <TextInput validate={[required("This field is required"), email()]} color="primary" source="email" label="Email" />
                            <PasswordInput validate={[required("This field is required")]} color="primary" source="password" label="Password" />
                            <PasswordInput
                                validate={[required("This field is required"), validatePasswordMatch]}
                                color="primary"
                                source="confirmPassword"
                                label="Confirm Password"
                            />
                            <SelectInput
                                label="Country"
                                source="country.id"
                                choices={countries.map((country) => ({
                                    id: country.id,
                                    name: country.name,
                                }))}
                                validate={[required()]}
                            />
                            <SelectInput
                                label="Role"
                                source="role.id"
                                choices={[{ id: "user", name: "User" }]}
                                validate={[required()]}
                            />
                        </SimpleForm>
                    </FlexBox>
                </TabPanel>
            </FlexBox>
        </FlexBox>
    );
};
