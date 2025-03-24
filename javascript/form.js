/* Storing element IDs into variables */
const department = document.getElementById("department-dropdown");
const cse = document.getElementById("cse-options");
const cseTitle = document.getElementById("cse-label");
const operations = document.getElementById("operations-options");
const operationsTitle = document.getElementById("operations-title");
const sales = document.getElementById("sales-options");
const salesTitle = document.getElementById("sales-title");
const qa = document.getElementById("qa-options");
const qaTitle = document.getElementById("qa-title");
const ais = document.getElementById("ais-options");
const aisTitle = document.getElementById("ais-title");
const training = document.getElementById("training-status"); 
const ableToTrain = document.getElementById("att");


/* Function to hide all department options */
function hideAllDepartments() {
  cse.style.display = "none";
  cseTitle.style.display = "none";
  operations.style.display = "none";
  operationsTitle.style.display = "none";
  sales.style.display = "none";
  salesTitle.style.display = "none";
  qa.style.display = "none";
  qaTitle.style.display = "none";
  ais.style.display = "none";
  aisTitle.style.display = "none";
}

/* On page load, hide all department options */
window.onload = hideAllDepartments;

/* Event listener to handle changes in department dropdown */
department.addEventListener("change", function () {
  hideAllDepartments();

  switch (this.value) {
    case "cse":
      cse.style.display = "block";
      cseTitle.style.display = "block";
      break;
    case "operations":
      operations.style.display = "block";
      operationsTitle.style.display = "block";
      break;
    case "sales":
      sales.style.display = "block";
      salesTitle.style.display = "block";
      break;
    case "qa":
      qa.style.display = "block";
      qaTitle.style.display = "block";
      break;
    case "ais":
      ais.style.display = "block";
      aisTitle.style.display = "block";
      break;
    default:
      // Do nothing
      break;
  }
});


/* Generate PDF */
function generatePDF() {
  const { jsPDF } = window.jspdf;
  
  //Set up the document in landscape orientation
  const doc = new jsPDF({
	orientation: "landscape", 
	unit: "mm", 
	format: "a4", 
  });
	
		
	const imageData = "data:image/png;base64,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";

	doc.addImage(imageData, "PNG", 5, 5, 70, 15, "FAST", 0); 
	
	
	
  const nameField = document.getElementById("full-name").value;
  const departmentField = document.getElementById("department-dropdown").value;
  const courseField =
    departmentField === "cse"
      ? cse.value
      : departmentField === "operations"
      ? operations.value
      : departmentField === "sales"
      ? sales.value
      : departmentField === "qa"
      ? qa.value
      : departmentField === "ais"
      ? ais.value
      : "No course selected";
  const dofCompletionField = document.getElementById("dof-completetion").value;
  const reviewDateField = document.getElementById("review-date").value;
  const nextReviewDateField = document.getElementById("next-review").value;
  const gradeField = document.getElementById("grade").value;
  const locationField = document.getElementById("location").value;
  const training = document.getElementById("training-status").value; 
  const printAtt = document.getElementById("att").value; 
  const printCompetency = document.getElementById("competency").value;
  const printSupervised = document.getElementById("supervised").value; 

  // Check for required fields
  if (
    !nameField ||
    departmentField === "default" ||
    courseField === "Please Select an option" ||
    !dofCompletionField ||
    gradeField === "Please Select Current Grade" ||
    locationField === "Please Select an option" ||
	training === "Please Select Current Status"
  ) {
    alert("Please fill in all required fields before generating the certificate.");
    return;
  }

  // Content for the PDF
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  
  doc.rect(225, 16, 57, 5);
  
  //Row 1
  doc.setLineWidth(0.4); 
  doc.rect(30, 55, 80, 10);
  doc.rect(110, 55, 80, 10); 
  doc.rect(190, 55, 80, 10); 
 
  //upper seperate row
  doc.rect(82, 45, 57, 5);
  doc.rect(82, 50, 57, 5);
  
  //Row 2
  doc.rect(30, 65, 80, 10);  
  doc.rect(110, 65, 80, 10); 
  doc.rect(190, 65, 80, 18); 
  doc.rect(190, 83, 80, 22);   
  
  //Row 3
  doc.rect(30, 75, 80, 30);  
  doc.rect(110, 75, 80, 20); 
  doc.rect(110, 95, 45, 10); 
  doc.rect(155, 95, 35, 10);
  
  //Competency Status Grid 
  doc.rect(30, 112, 39, 5);
  doc.rect(69, 112, 22, 5);
  doc.rect(91, 112, 22, 5);
  doc.rect(113, 112, 35, 5);
  doc.rect(148, 112, 22, 5);
  doc.rect(170, 112, 22, 5);
  
  //Lower level competency Status Grid
  doc.rect(30, 117, 39, 5);
  doc.rect(69, 117, 22, 5);
  doc.rect(91, 117, 22, 5);
  doc.rect(113, 117, 35, 5);
  doc.rect(148, 117, 22, 5);
  doc.rect(170, 117, 22, 5);
  
 
  
  doc.text("Training Record [Form 4]", 147, 30, { align: "center" });
 //doc.text("Certificate of Completion", 140, , { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(
    `Training Module / Description`,
    60,
    81,
    { align: "center" }
  );
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
	
	
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);  
  doc.text(`Date: ${dofCompletionField}`, 47, 71, { align: "center" });
  doc.text("Reason:", 120, 71, {align: "center"});  
  doc.text("TRAINER NAME & SIGNATURE", 229, 88, {align: "center"});
  doc.text(`${nameField}`, 98, 54, { align: "center" });
   doc.text(
    `${courseField}`,
    64,
    87,
    { align: "center" }
  );
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);  
  doc.text(`Review Date: ${reviewDateField}`, 130, 101, { align: "center" });
  doc.text(`Next Review: ${nextReviewDateField}`, 173, 101, { align: "center" });
  doc.text("Employee Signature:", 218, 102, {align: "center"}); 
  doc.text(`${gradeField}`, 181, 116, { align: "center" });
  doc.text(`${training}`, 80, 116, { align: "center" });
  doc.text(`${locationField}`, 181, 121, { align: "center" });
  doc.text(`${printAtt}`, 132, 116, { align: "center" });
  doc.text(`${printCompetency}`, 80, 121, { align: "center" });
  doc.text(`${printSupervised}`, 132, 121, { align: "center" });
 
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);  
  doc.text("Training Incomplete ", 55, 116, {align: "center"});  
  doc.text("Able to Train ", 105, 116, {align: "center"});  
  doc.text("Grade ", 162, 116, {align: "center"});  
  doc.text("Location", 164, 121, {align: "center"});  
  doc.text("Not Competent ", 58, 121, {align: "center"});  
  doc.text("Supervised", 105, 121, {align: "center"});  
	
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);  
  doc.text("Document Ref: Form 4a Issue 1", 251, 20, {align: "center"}); 
  doc.text("Subject:", 39, 49, { align: "center"}); 
  doc.text("Employee Development", 102, 49, {align: "center"}); 
  doc.text(`Employee Name:`, 46, 54, { align: "center" });
  doc.text(`Competency Status:`, 67, 110, { align: "center" });
  doc.text("Review results / Next Steps", 133, 80, {align: "center"});
 
  
  doc.text("Training", 68, 61, {align: "center"});  
  doc.text("Review", 150, 61, {align: "center"}); 
  doc.text("Competency", 230, 59, {align: "center"}); 
  doc.text("(See status key below)", 230, 63, {align: "center"}); 
  
  // Save the PDF
  doc.save(`${nameField}-Form 4 Infor Training Certificate.pdf`);
}