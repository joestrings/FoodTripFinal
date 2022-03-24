import React from 'react';
import { Link } from 'react-router-dom';
import background from "../images/bg.jpg";

class Card extends React.Component {

    constructor() {

      super();

      this.state = {

        fields: {}, // access to the form controls

        errors: {}, //list of validation errors

        redirectToSuccess : false

      }

      this.handleChange = this.handleChange.bind(this);

      this.pay = this.pay.bind(this);

    };

    handleChange(e) {

      let fields = this.state.fields;

      fields[e.target.name] = e.target.value;//

      this.setState({

        fields

      });

    }

    pay(e) {

      e.preventDefault(); // stops the data from being submitted to server


      if (this.validateForm()) {
          

          let fields = {};

          fields["cardNumber"] = "";

          fields["cvv"] = "";

          fields["cardType"] = "";

          this.setState({fields:fields});
          localStorage.setItem("card",JSON.stringify(this.state.fields));
          
          this.setState({redirectToSuccess:true});
          alert("Card Validated");

      }

    }

    validateForm() {

      let fields = this.state.fields;

      let errors = {};

      let formIsValid = true;

      if (!fields["cardNumber"]) {

        formIsValid = false;

        errors["cardNumber"] = "*Enter Card Number";

      }

      if (!fields["cvv"]) {

        formIsValid = false;

        errors["cvv"] = "*Enter your cvv";

      }

 

      if (typeof fields["cardNumber"] !== "undefined") {

        if (!fields["cardNumber"].match(/^[0-9]{10}$/) && fields["cardType"] === 'Visa') {

          formIsValid = false;

          errors["cardNumber"] = "*Please enter 10 digits";

        }

        if (!fields["cvv"].match(/^[0-9]{3,4}$/)) {

            formIsValid = false;
  
            errors["cvv"] = "*Please enter 3 digits which are numbers only";

            
  
          }
  

        if (!fields["cardNumber"].match(/^[0-9]{14}$/) && fields["cardType"] === 'Rupay') {

          formIsValid = false;

          errors["cardNumber"] = "*Please enter 14 digits";

        }

      }

      this.setState({

        errors: errors

      });

      return formIsValid;

    }

  render() {
    const myStyle={
      backgroundImage: `url(${background})`,
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding:60,
  };

  
  const delLock = () => {
    const lock = "false"
   localStorage.setItem("lock1",lock)
  };

    return (
        
    <div>
     <div>
     <nav className="topnav1" > 
            <Link to="/login" className='btn btn-outline-danger' style={{marginRight:"20px"}} onClick={() => delLock()}>Logout</Link>
          </nav>
     

        <h1>Enter your Card Details </h1><br></br>

        <form method="post"  name="debitDetails"  onSubmit= {this.pay} >


        <b> <label className='cardlabel'>Card No</label></b>
        
        <input type="text" id="Carddetails" placeholder="**** **** ****" name="cardNumber" value={this.state.fields.cardNumber} onChange={this.handleChange}   />

        <div className="errorMsg">{this.state.errors.cardNumber}</div>

        <b><label className='cardlabel'>CVV</label></b>

        <input type="password" id="Carddetails" name="cvv" placeholder="***" value={this.state.fields.cvv} maxLength={3} onChange={this.handleChange}   />

            <div className="errorMsg">{this.state.errors.cvv}</div>
         <b> <label className='cardlabel' htmlFor='cardType'>Visa</label></b>
        <input type="radio" name="cardType" value='Visa' onChange={this.handleChange} />

        <b><label className='cardlabel' htmlFor='cardType'>Rupay</label></b>
        <input type="radio" name="cardType" value='Rupay' onChange={this.handleChange} />

        <div className="errorMsg">{this.state.errors.cardType}</div>

        <input type="submit" id="cardno" className="button" value="Add"/>


        </form>
        {
        this.state.redirectToSuccess?
        <Link to="/success">  <br></br> <input id="paymentsuccess" type="submit" id="cardno" className="btn btn-primary" style={{marginRight:"20px",height:"50px"}}  value="Pay"/></Link>:null
    }
    </div>

   

</div>

      );

  }

}

export default Card;