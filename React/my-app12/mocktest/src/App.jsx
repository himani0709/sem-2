/*function app(){
  const pagestyle={
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightcolor',
  return(

    <h1 style={pagestyle}>Student registration form</h1>

    <input type="text" placeholder="Enter Student name"  />
    <input type="email" placeholder="Enter email" />
    <input type="password" placeholder="Enter password" />
    <input type="text" placeholder="Enter course name" />
    <input type="number" placeholder="Enter Mobile number" />

    <button>register</button>
  );
}
export default app;*/

function App() {

  // Page Styling
  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
  };

  // Form Box Styling
  const formStyle = {
    backgroundColor: "white",
    padding: "30px",
    width: "350px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial",
  };

  // Heading Styling
  const headingStyle = {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    color: "#082042",
  };

  // Input Field Styling
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
    boxSizing: "border-box",
  };

  // Button Styling
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>

      <div style={formStyle}>

        <h1 style={headingStyle}>
          Student Registration Form
        </h1>

        <input
          type="text"
          placeholder="Enter Student Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Enter Course"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Enter Mobile Number"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Register
        </button>

      </div>

    </div>
  );
}

export default App;