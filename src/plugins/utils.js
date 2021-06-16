import moment from 'moment'
import 'moment-duration-format'
import 'moment/locale/pt-br'

function minutesToTimespan(activity) {
  return moment.duration(activity, 'minutes').format('h[h] m[min]')
}

function todaysTagsActivities(tagsArr) {
  return tagsArr.map(tag => {
    let totalActvivity = tag.relatedApps.reduce((acc, app) => (acc += app.appActivity), 0)
    return { tagName: tag.tagName, activity: totalActvivity }
  })
}

function formatedTimeSpan(activity) {
  let activityInMinutes = moment(activity).diff(moment(), 'minutes') * -1
  return moment.duration(activityInMinutes, 'minutes').format('h[h] m[min]')
}

export { formatedTimeSpan, minutesToTimespan, todaysTagsActivities }
