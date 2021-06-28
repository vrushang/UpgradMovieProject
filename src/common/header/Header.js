import React, { Fragment, useState } from 'react';
import './Header.css';
import { Button, AppBar, Toolbar, Grid, Typography, Tab, Tabs } from '@material-ui/core';
import ReactLogo from '../../assets/logo.svg';
import Modal from 'react-modal';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function Header() {
// login component with validator
    function LoginForm() {

        const [loginData, setloginData] = useState({
            id: 0,
            username: "",
            password: ""
        });
        const onHandleFormSubmit = (e) => {
            console.log(loginData);
        }

        const handleChangeHandler = (e) => {
            const state = loginData;
            state[e.target.name] = e.target.value;
            setloginData({ ...state });
        }
        return (
            <Grid container direction="column" alignItems="center" justify="center" >
                <ValidatorForm
                    onSubmit={onHandleFormSubmit}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                        label="UserName"
                        onChange={handleChangeHandler}
                        name="username"
                        value={loginData.username}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />

                    <TextValidator
                        label="Password"
                        onChange={handleChangeHandler}
                        name="password"
                        type="password"
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={loginData.password}
                    />
                    <br /><br />
                    {/* <Button type="submit" >Submit</Button> */}
                    <Button style={{ marginLeft: 50 }} variant="contained" color="primary" type="submit">
                        LOGIN
                    </Button>
                </ValidatorForm>
            </Grid>

        )
    }
    //registration component with validator
    function RegisterForm() {
        const [registerData, setregisterData] = useState({
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            contactNumber: ""
        });

        const [content, setContent] = useState(false);

        const onHandleFormSubmit = (e) => {
            e.preventDefault();
            console.log("submited");
            setContent(true);
        }

        const handleChangeHandler = (e) => {
            const state = registerData;
            state[e.target.name] = e.target.value;
            setregisterData({ ...state });
        }
        return (
            <Grid container direction="column" alignItems="center" justify="center" >
                <ValidatorForm
                    onSubmit={onHandleFormSubmit}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                        label="First Name"
                        onChange={handleChangeHandler}
                        name="firstName"
                        value={registerData.firstName}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <TextValidator
                        label="Last Name"
                        onChange={handleChangeHandler}
                        name="lastName"
                        value={registerData.lastName}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <TextValidator
                        label="Email"
                        onChange={handleChangeHandler}
                        name="email"
                        value={registerData.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <TextValidator
                        label="Password"
                        onChange={handleChangeHandler}
                        name="password"
                        type="password"
                        value={registerData.password}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <TextValidator
                        label="Contact No."
                        name="contactNumber"
                        onChange={handleChangeHandler}
                        maxLength={10}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={registerData.contactNumber}
                    /><br /><br />
                    {content === true ? <p>Register successful. please login!</p> : ""}
                    <Button style={{ marginLeft: 50 }} variant="contained" color="primary" type="submit">
                        REGISTER
                    </Button>
                </ValidatorForm>

            </Grid>

        )
    }
    function TabPanel(props) {
        const { value, index } = props;
        return (
            <div>
                {value === index && value === 0 ?
                    <LoginForm /> :
                    <RegisterForm />}
            </div>
        )
    }

    //tabs component to show tabs
    function TabsComponent() {
        const [value, setValue] = useState(0);
        const handleTabs = (e, val) => {
            setValue(val);
        }

        return (
            <div>
                <Tabs value={value} onChange={handleTabs}>
                    <Tab label="LOGIN" />
                    <Tab label="REGISTER" />
                </Tabs>
                <TabPanel value={value} index={0}></TabPanel>
            </div>
        )
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('#root');



    return (
        <Fragment>

            <div>
                {/* model to display login and registration form with tabs  */}
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <TabsComponent />


                </Modal>
            </div>




            <AppBar position="static" style={{ background: '#222' }}>
                <Toolbar>
                    <Grid container spacing={24}>
                        <Grid item xs={9}>
                            <Typography type="title" color="inherit">
                                <img src={ReactLogo} alt="logo" className="logoimg"></img>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <div>
                                <Button style={{ height: 35, marginLeft: 80 }} variant="contained" color="primary">
                                    BOOK SHOW
                                </Button>
                            </div>
                        </Grid>

                        <Grid item xs={1}>
                            <div>
                                <Button onClick={openModal} style={{ height: 35, width: 100, marginRight: 20 }} variant="contained">
                                    LOGIN
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}