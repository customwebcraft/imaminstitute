const fs = require("node:fs");
const PDFDocument = require("pdfkit");

fs.mkdirSync("public/documents", { recursive: true });
const output = fs.createWriteStream("public/documents/required-documents-checklist.pdf");
const pdf = new PDFDocument({ size: "A4", margin: 48 });
pdf.pipe(output);
pdf.fillColor("#163d80").fontSize(20).font("Helvetica-Bold").text("Imam Institute of Nursing & Allied Health Sciences", { align: "center" });
pdf.moveDown(0.4).fillColor("#C0392B").fontSize(16).text("Required Documents Checklist", { align: "center" });
pdf.moveDown(0.8).fillColor("#111827").font("Helvetica").fontSize(10).text("Dear students, the following documents are required for admission. Submit the stated number of duly attested copies unless noted otherwise.");
pdf.moveDown(0.7);
const documents = [
  ["1", "Passport-size photographs", "20", "Duly attested"],
  ["2", "CNIC", "04", "Duly attested"],
  ["3", "Matric Certificate", "04", "Duly attested"],
  ["4", "Matric Mark Sheet", "04", "Duly attested"],
  ["5", "Intermediate/FSC Certificate", "04", "Duly attested"],
  ["6", "Intermediate/FSC Mark Sheet", "04", "Duly attested"],
  ["7", "Domicile", "04", "Duly attested"],
  ["8", "PRC (C) Form", "04", "Duly attested"],
  ["9", "Migration Certificate (for other provinces)", "04", "Photocopy with original"],
  ["10", "Both mark sheets verified from the concerned Board of Secondary Education", "-", "Verified"],
  ["11", "Medical Certificate from a certified practitioner", "-", "Original"],
];
const x = [48, 78, 390, 440];
pdf.fillColor("#1E4FA0").font("Helvetica-Bold").fontSize(10).text("No.", x[0], pdf.y).text("Required document", x[1], pdf.y).text("Copies", x[2], pdf.y).text("Requirement", x[3], pdf.y);
pdf.moveDown(0.35).strokeColor("#C0392B").moveTo(48, pdf.y).lineTo(547, pdf.y).stroke();
for (const [number, name, copies, requirement] of documents) {
  pdf.moveDown(0.35).fillColor("#111827").font("Helvetica").text(number, x[0], pdf.y, { width: 24 }).text(name, x[1], pdf.y, { width: 305 }).text(copies, x[2], pdf.y, { width: 40 }).text(requirement, x[3], pdf.y, { width: 105 });
}
pdf.moveDown(1).fillColor("#1E4FA0").font("Helvetica-Bold").fontSize(13).text("Stamp-paper undertaking", { underline: true });
pdf.moveDown(0.35).fillColor("#111827").font("Helvetica").fontSize(10);
[
  "Purchase a Rs. 100/- (one hundred rupees) stamp paper in your name.",
  "Get the enclosed sample undertaking photocopied on the original stamp paper.",
  "Complete all entries on the printed stamp paper.",
  "Have the stamp paper attested by a first-class Magistrate or Notary Public.",
  "Return the complete and duly attested stamp paper to this office.",
].forEach((item) => pdf.text(`• ${item}`, { indent: 12, paragraphGap: 5 }));
pdf.moveDown(1).fillColor("#C0392B").font("Helvetica-Bold").fontSize(10).text("Important: Bring original documents for verification where requested by the admission office.");
pdf.end();
