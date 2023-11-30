import './login.scss'
import MainLayout from "../../layouts/MainLayout"
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {Box, TextField} from '@mui/material'

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Login() {
    return (
        <MainLayout>
            <div className={'login-page'}>
                <Box
                    sx={{display: 'flex', p: 1, borderRadius: 1, margin: '0 20px'}}
                >
                    <Item sx={{flexGrow: 5, margin: '0 10px'}}>Item 1</Item>
                    <Item sx={{flexGrow: 1, margin: '0 10px'}}>
                        <h1>Login or signup</h1>
                        <form action="submit">
                            <div className={'ma-registration-form-item'}>
                                <TextField
                                    id="username"
                                    label="Name"
                                    size={'small'}
                                    variant="outlined"
                                    className='w-100'
                                />
                            </div>
                            <div className={'ma-registration-form-item'}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    size={'small'}
                                    variant="outlined"
                                />
                            </div>
                            <div className={'ma-registration-form-item'}>
                                <TextField
                                    id="password"
                                    label="Password"
                                    size={'small'}
                                    variant="outlined"
                                />
                            </div>
                            <div className={'ma-registration-form-item'}>
                                <TextField
                                    id="passwordRepeat"
                                    label="Repeat password"
                                    size={'small'}
                                    variant="outlined"
                                />
                            </div>

                        </form>
                    </Item>
                </Box>
            </div>
        </MainLayout>);
}
