
const printButton = document.querySelector("#printable");
const printArea = document.querySelector("#container")

printButton.addEventListener("click", () => {
    const printWindow = window.open("", "Print Window");
    printWindow.document.write("<html><head><title>Print Section</title>");
    printWindow.document.write("<link rel='stylesheet' href='print.css' type='text/css' />");
    printWindow.document.write("</head><body><div id='printDiv'>")
    printWindow.document.write(printArea.innerHTML);
    printWindow.document.write("<button id='print-btn'> Print this section</button>");
    printWindow.document.write("</div></body></html>")
    const printBtn = printWindow.document.querySelector("#print-btn");
    const submitBtn = printWindow.document.querySelector("#submitBtn");
    submitBtn.remove()
    printBtn.addEventListener("click", () => {
        printBtn.remove()
        
        printWindow.print()
        printWindow.close()
    })
})