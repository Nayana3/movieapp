import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

export default class RegisterForm extends React.Component {
  // const classes = useStyles();
  // const [name, setName] = React.useState('Cat in the Hat');
  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };
  state = {
    formData: {
        email: '',
        password: '',
    },
    submitted: false,
}

handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
}

handleSubmit = () => {
    this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
    });
}
render() {
  const { formData, submitted } = this.state;
  return (

    <ValidatorForm
    ref="form"
    onSubmit={this.handleSubmit}
>
    <TextValidator
       label="First Name" onChange={this.handleChange} fullWidth style ={{width: '100%'}}
       inputStyle ={{width: '100%'}} 
        onChange={this.handleChange}
        name="fname"
        value={formData.email}
        validators={['required', 'isEmail']}
        errorMessages={['this field is required', 'email is not valid']}
    />
    <TextValidator
         label="Last Name" onChange={this.handleChange} style ={{width: '100%'}}
         inputStyle ={{width: '100%'}}
        onChange={this.handleChange}
        name="password"
        value={formData.password}
        validators={['required']}
        errorMessages={['this field is required']}
    />
    <TextValidator
         label="Email" onChange={this.handleChange} style ={{width: '100%'}}
         inputStyle ={{width: '100%'}}
        onChange={this.handleChange}
        name="email"
        value={formData.password}
        validators={['required']}
        errorMessages={['this field is required']}
    />
    <TextValidator
         label="Password" onChange={this.handleChange} style ={{width: '100%'}}
         inputStyle ={{width: '100%'}}
        onChange={this.handleChange}
        name="password"
        value={formData.password}
        validators={['required']}
        errorMessages={['this field is required']}
    />

    <TextValidator
         label="Contact Number" onChange={this.handleChange} style ={{width: '100%'}}
         inputStyle ={{width: '100%'}}
        onChange={this.handleChange}
        name="password"
        value={formData.password}
        validators={['required']}
        errorMessages={['this field is required']}
    />
    <Button
        color="primary"
        variant="contained"
        type="submit"
        disabled={submitted}
    >
      Submit
    </Button>
</ValidatorForm>

  );
}
}