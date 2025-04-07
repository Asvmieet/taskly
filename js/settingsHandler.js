const mytasklyData = {
    tasks: [],
    notes: '',
    theme: 'light',
    DATAgoals: 0,
    completedTasks: 0

}

function saveData() {
    localStorage.setItem('mytasklyData', JSON.stringify(mytasklyData));
}