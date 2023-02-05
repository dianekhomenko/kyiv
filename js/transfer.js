const form = document.querySelector(
  ".transfer-form"
);
let formDataObj;
form.addEventListener("submit", (event) => {
    event.preventDefault();
  const {
    elements: {
      airports,
      to,
      date,
      time,
      peopleTransfer,
      luggageTransfer,
    },
  } = event.currentTarget;

  if (
    airports.value === "" ||
    to.value === "" ||
    date.value === "" ||
    time.value === "" ||
    peopleTransfer === "" ||
    luggageTransfer === ""
  ) {
    return alert(
      "Please fill in all the fields!"
    );
  } else {
        form.reset();
        alert("Thank you for your request")
          const myFormData = new FormData(
            event.target
          );

          formDataObj = Object.fromEntries(
            myFormData.entries()
          );
      console.log(formDataObj); 
      
  }    
}
);