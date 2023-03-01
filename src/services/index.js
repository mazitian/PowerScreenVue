import hyRequest from './request'

export function getPowerScreenData() {
  return hyRequest.post({
    url: "/file"
  })
}
