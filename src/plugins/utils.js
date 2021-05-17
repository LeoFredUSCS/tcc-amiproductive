import moment from "moment"
import "moment-duration-format"
import "moment/locale/pt-br"


function formatedTimeSpan(activity) {
  let activityInMinutes = moment(activity).diff(moment(), "minutes") * -1
  return moment.duration(activityInMinutes, "minutes").format("h [hrs] m [min]")
}



export {
  formatedTimeSpan
}