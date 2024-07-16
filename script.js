document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const meetingTitle = document.getElementById('meetingTitle').value;
    const meetingDate = document.getElementById('meetingDate').value;
    const meetingTime = document.getElementById('meetingTime').value;
    const participants = document.getElementById('participants').value;

    console.log(`Meeting Title: ${meetingTitle}`);
    console.log(`Date: ${meetingDate}`);
    console.log(`Time: ${meetingTime}`);
    console.log(`Participants: ${participants}`);

    alert('Meeting scheduled successfully!');

    document.getElementById('scheduleForm').reset();
});
