const formatTime = (date) => {

    let output = "";
    let hours = date.getHours();
    let mins = date.getMinutes();
    let amPm = date.toLocaleTimeString().split(" ")[1]
    
    if(mins < 10) {
      mins = "0" + mins
    }
    if(hours == 0) {
      hours = "0" + hours
    }
  
    output = `${hours}:${mins} ${amPm}`
  
    return output
  }
  
  const goodDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate()
  
    if(month < 10) {
      month = "0"+month.toString();
    }
    if(day < 10) {
      day = "0"+day.toString();
    }
  
    return `${day}/${month}/${year}`
  }
  
  
  export const timeAgo = (lastSeenTime) => {
    const lastSeen =  new Date(lastSeenTime)
    const now = new Date()
    
    const lastSeenYear = lastSeen.getFullYear()
    
    const nowYear = now.getFullYear()
    const diffYear = nowYear - lastSeenYear
    
    let output = ""
    if(diffYear > 0) {
      output = goodDate(lastSeen)
    }else{
      const diffDays = Math.abs(now.getDate() - lastSeen.getDate())
      if(diffDays > 7) {
        output = goodDate(lastSeen)
      }else{
  
        if(diffDays == 0) {
          output = formatTime(lastSeen)
        }
        
        else if(diffDays == 1) {
          output = "Yesterday"
        }else{
          output = output = lastSeen.toLocaleDateString(undefined, {weekday: 'long'})
        }
      }
  
    }
    return output
  }