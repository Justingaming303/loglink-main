


$(document).ready(async function () {


    const todos = await $.getJSON('/todos/api')
    console.log(todos);
    $('#btnSubmit').on('click', function (e) {
        e.preventDefault();
        createTodo();
    })
    $('#btnFind').on('click', function (e) {
        e.preventDefault();
        findTodo(todos);
        
    })

    

})



async function findTodo(todos) {
    var ticketN = $("#ticketSearchInput").val();


    for (let item = 0; item < todos.length; item++) {
        var ticket = todos[item]
    
    if (ticket.ticketNumber == ticketN) {
        var elem = `<div id="questions-container">

            <h1 class="heading">Temple Network | Customer Details | Ticket #${ticket.ticketNumber}</h1>
            <div id="inputForm">

                <div class="question-container">
                    <label class="label" for="custUser">*Customer's Discord Username</label>
                    <input class="input" id="custUser" type="text" name="text" value="${ticket.custUser}">
                </div>
                <!-- <button>Add</button> -->
                <div class="question-container">
                    <label class="label" for="custID">*Customer's Discord ID</label>
                    <input class="input" id="custID" type="number" name="text" value="${ticket.custID}">
                </div>
                <div class="question-container">
                    <label class="label" for="assignedName">*Assigned Staff Name</label>
                    <input class="input" id="assignedName" type="text" name="text" value="${ticket.assignedName}">
                </div>
                <div class="question-container">
                    <label class="label" for="assignedRank">*Assigned Staff Rank</label>
                    <input class="input" id="assignedRank" type="text" name="text" value="${ticket.assignedRank}">
                </div>
                <div class="question-container">
                    <label class="label" for="assignedID">*Assigned Staff ID</label>
                    <input class="input" id="assignedID" type="text" name="text" value="${ticket.assignedID}">
                </div>
                <div class="question-container">
                    <label for="involvedStaff" class="label">Other Involved Staff Members</label>
                    <input type="text" class="input" id="involvedStaff" value="${ticket.involvedStaff}">
                </div>
                <br>
                <h1 class="heading">Ticket Details</h1>
                <br>
                <div class="question-container">
                    <label class="label" for="ticketNumber">*Ticket Number</label>
                    <input class="input" id="ticketNumber" type="number" name="text" value="${ticket.ticketNumber}">
                </div>
                <div class="question-container">
                    <label class="label" for="ticketDate">*Ticket Date</label>
                    <input class="input" id="ticketDate" type="date" name="text" value="${ticket.ticketDate}">
                </div>


                <div class="question-container" id="ticketType">
                    <label class="label">*Ticket Type</label>
                    <br>

    
                    <input class="input" id="ticketType" type="text" name="text" value="${ticket.ticketType}">
                </div>

                <div class="question-container">
                    <label for="yes/no" class="label">*Was there payment involved?</label>

                    <div id="pay">

                
                    <input class="input" id="ticketDate" type="text" name="text" value="${ticket.isTherePayment}">
                    </div>


                </div>
            </div>

          


      `;
      $('#ticket-container').append(elem)
    }

    
    }
}


async function createTodo() {
    var custUser1 = $('#custUser').val()
    var custID1 = $('#custID').val()
    var assignedName1 = $('#assignedName').val()
    var assignedRank1 = $('#assignedRank').val()
    var assignedID1 = $('#assignedID').val()
    var involvedStaff1 = $('#involvedStaff').val()
    var ticketNumber1 = $('#ticketNumber').val()
    var ticketDate1 = $('#ticketDate').val()
    var payment1 = $('input[name="payment"]:checked').val()
    var ticketType1;

    console.log('being created...')
    if ($('input[name="type"]:checked').val() == 'Other') {
        ticketType1 = 'Other, ' + $('#inputOther').val()
    } else {
        ticketType1 = $('input[name="type"]:checked').val()
    }
    const createdLog = await $.post('/todos/api', { custUser: custUser1, custID: custID1, assignedName: assignedName1, assignedRank: assignedRank1, assignedID: assignedID1, involvedStaff: involvedStaff1, ticketNumber: ticketNumber1, ticketDate: ticketDate1, ticketType: ticketType1, isTherePayment: payment1, })
    console.log(createdLog)
    alert('done')

}




