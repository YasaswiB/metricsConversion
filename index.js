function timeConverter(from, to, val){
    var min;
    if(from == "secs") min = val / 60;
    else if(from === "mins") min = val;
    else if(from === "hrs") min = val * 60;
    else if(from === "days") min = val * 24 * 60;

    if(to == "secs") return (min * 60);
    else if(to === "mins") return (min);
    else if(to === "hrs") return (min / 60);
    else if(to === "days") return (min / (60 * 24));

}



exports.timeConverter = timeConverter