export interface IPlaceAPI {
  html_attributions: string
  next_page_token: string
  results: IPlaceData[]
}

interface IPlaceData {
  geometry: {
    location: ILatLng
    viewport: {
      northeast: ILatLng
      southwest: ILatLng,
    },
  }
  icon: string
  id: string
  name: string
  opening_hours: { open_now: boolean }
  place_id: string
  plus_code: { compound_code: string; global_code: string }
  reference: string
  scope: string
  types: string[]
  vicinity: string
}

interface ILatLng {
  lat: string
  lng: string
}
