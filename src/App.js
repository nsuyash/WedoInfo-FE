import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    location: "",
    emailId: "",
    healthGaol: "",
    age: "",
    instaId: "",
    useSupplementsBefore: "",
    ifYesWhich: ""    
  })

  const [formSave, setFormSave] = useState(false)

  const handleFormDataChange = (event) => {
    const {name, value} = event.target;

    setFormData((prev) => ({...prev, [name] : name === "age" ? parseInt(value) : value }))
  }

  const handleFormSubmitClick = async (event) => {
    event.preventDefault();

    const response = await fetch("https://wedo-info-be.vercel.app/details", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()
    if(data){
      setFormSave(true)
    }
  }



  return (
    <>
      <div className='bg-dark py-4'>
        <div className='container'>
        <div className='pt-2 px-2 text-center'>
          <img className='img-fluid' src="https://wedo-landing-usa.s3.amazonaws.com/static/img/wdt-logo/footer-logo-wdt-desktop-en.png" alt="WeDo Transformation Logo" />
        </div>
        <div className='px-3 pt-5'>
          <div className='card'>
            <div className='card-body'>
            <p className='pt-4 h1 px-4'>Are you ready to transform your life?</p>
            <p className='px-4 pt-2' style={{textAlign: 'justify'}}>I’m so happy you have made the decision to begin your journey and become the best version of yourself. I am here to help you and get you started on your healthy journey. Once you click submit, I will review your form and contact you soon.</p>
            </div>
            <hr />
            <div className='py-2 px-2 card-body container'>
              <p className='h4'>Enter your details</p>
              <form className='pt-2' onSubmit={handleFormSubmitClick}>
                <label style={{fontWeight: 500}} className='py-3'>Name: <span className='text-danger'>*</span></label>
                <div className='input-group'>
                  <input type='text' className='form-control' placeholder='First Name' required name="firstName" value={formData.firstName} onChange={handleFormDataChange} />
                  <input type='text' className='form-control' placeholder='Last Name' required name="lastName" value={formData.lastName} onChange={handleFormDataChange} />
                </div>
                <label style={{fontWeight: 500}} className='py-3'>Phone Number (Whatsapp Number): <span className='text-danger'>*</span></label>
                <div className='input-group'>
                  <input className="form-control" placeholder="+91" required name="countryCode" value={formData.countryCode} onChange={handleFormDataChange} />
                  <input className="form-control w-50" placeholder="983414XXXX" required name="phoneNumber" value={formData.phoneNumber} onChange={handleFormDataChange} />
                </div>
                <div className='row'>
                  <div className='col ps-3'><p><small>Area Code</small></p></div>
                  <div className='col'><p><small>Phone Number</small></p></div>
                </div>
                <label style={{fontWeight: 500}} className='py-3'>Location (City): <span className='text-danger'>*</span></label>
                <input type="text" className='form-control' required name="location" value={formData.location} onChange={handleFormDataChange} />
                <label style={{fontWeight: 500}} className='py-3'>Email: <span className='text-danger'>*</span></label>
                <div>
                  <input type="text" className='form-control' required name="emailId" value={formData.emailId} onChange={handleFormDataChange} />
                  <p className='pt-2'><small>example@example.com</small></p>
                </div>
                <label style={{fontWeight: 500}} className='py-3'>What is your health goal? <span className='text-danger'>*</span></label>
                <div>
                  <select className='form-select' required name="healthGaol" value={formData.healthGaol} onChange={handleFormDataChange} >
                    <option value="">Please Select</option>
                    <option value="fat loss">Fat Loss</option>
                    <option value="muscle gain">Muscle Gain</option>
                    <option value="post pregnancy fat loss">Post Pregnancy Fat Loss</option>
                    <option value="gain energy">Gain Energy</option>
                    <option value="improve skin">Improve Skin</option>
                  </select>
                  <p className='pt-2'><small>Choose what suits you the most.</small></p>
                </div>
                <label style={{fontWeight: 500}} className='py-3'>What is your age? <span className='text-danger'>*</span></label>
                <input type="number" className='form-control' placeholder='e.g., 23' required name="age" value={formData.age} onChange={handleFormDataChange} />
                <label style={{fontWeight: 500}} className='py-3'>What is your Instagram username? <span className='text-danger'>*</span></label>
                <input type="text" className='form-control' placeholder='@sampleusername' required name="instaId" value={formData.instaId} onChange={handleFormDataChange} />
                <label style={{fontWeight: 500}} className='py-3'>Have you ever consumed any supplements? <span className='text-danger'>*</span></label>
                <div>
                  <select className='form-select' required name="useSupplementsBefore" value={formData.useSupplementsBefore} onChange={handleFormDataChange} >
                    <option value="">Please Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <p className='pt-2'><small>Choose what suits you the most.</small></p>
                </div>
                <label style={{fontWeight: 500}} className='py-3'>if YES, which supplements and when? <span className='text-danger'>*</span></label>
                <input type="text" required className='form-control' name="ifYesWhich" value={formData.ifYesWhich} onChange={handleFormDataChange} /><br />
                {
                  formSave && <p className='text-success'>Saved details successfully.</p>
                }
                <div className='text-center pb-3'>
                  <input type="submit" value="Submit" className='btn btn-dark' />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='pt-5 text-center'>
          <p className='text-light'>&copy; acefitboy. All rights reserved.</p>
        </div>
        </div>
      </div>      
    </>
  );
}

export default App;