const mySettingsData = {
    breaks_enabled: true,
    breaks_time: 3,
    breaks_frequency: 10,
    breaks_duration: 0.5,
    music_category: "pop",
    options_goals: 5,
    XP: 0

}

function setSettings() {
    localStorage.setItem('mySettingsData', JSON.stringify(mySettingsData));
}
function getSettings() {
    const settingsData = localStorage.getItem('mySettingsData');
    if (settingsData) {
        return JSON.parse(settingsData);
    } else {
        return mySettingsData;
    }
    
}

function resetSettings() {
    localStorage.removeItem('mySettingsData');
    setSettings();
}

function updateSettings(setting, value) {
console.log(setting, value);
    const settingsData = getSettings();
    settingsData[setting] = value;
    localStorage.setItem('mySettingsData', JSON.stringify(settingsData));
}