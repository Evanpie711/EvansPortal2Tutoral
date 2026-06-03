
var currenttheme = false;

function setdark() {
    document.documentElement.style.setProperty('--color-Backround', '#0F172A');
    document.documentElement.style.setProperty('--color-Surface', '#1E293B');
    document.documentElement.style.setProperty('--color-Elevated', '#334155');
    document.documentElement.style.setProperty('--color-Border', '#475569');
    document.documentElement.style.setProperty('--color-Text', '#F1F5F9');
    document.documentElement.style.setProperty('--color-TextSubtle', '#94A3B8');

}
function setlight() {
    document.documentElement.style.setProperty('--color-Backround', '#f0f4ff');
    document.documentElement.style.setProperty('--color-Surface', '#afceff');
    document.documentElement.style.setProperty('--color-Elevated', '#bbcde6');
    document.documentElement.style.setProperty('--color-Border', '#d4ddeb');
    document.documentElement.style.setProperty('--color-Text', '#000000');
    document.documentElement.style.setProperty('--color-TextSubtle', '#202327');
}

function switchtheme(){
    if (currenttheme == false){
        setlight();
        document.getElementById("themeicon").src = "resources/dark.png";
        currenttheme = true;
        return;
    }
    if (currenttheme){
        setdark();
        document.getElementById("themeicon").src = "resources/light.png";
        currenttheme = false;
        return;
    }

    return;
}