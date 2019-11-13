import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  API_KEY,
  MAIN_URL,
  PREFIX_URL,
  QUERY_BY_LOCATION,
  QUERY_BY_RANK,
  QUERY_BY_TYPE,
} from '../config'
import { IPlaceAPI } from '../interfaces/placeAPI'
import { Button, Header } from '../mock/RestaurantsTable'

export const Restaurants: React.FC = () => {
  const [places, setPlaces]: [
    Array<{ button: string, key: string; name: string; vicinity: string; isOpen: boolean }>,
    Dispatch<SetStateAction<any>>,
  ] = useState([])
  const fetchData = async () => {
    const response = await fetch(
      `${PREFIX_URL}${MAIN_URL}?${API_KEY}&${QUERY_BY_LOCATION}&${QUERY_BY_RANK}&${QUERY_BY_TYPE}`,
    )
    const data: IPlaceAPI = await response.json()
    setPlaces(
      data.results.map((value, index) => ({
        button: Button[index % 6],
        isOpen: value.opening_hours,
        key: value.id,
        name: value.name,
        vicinity: value.vicinity,
      })),
    )
  }
  useEffect(() => {
    fetchData()
  })
  return (
    <>
      <div className={'container space-2'}>
        <div className={'card'}>
          <div className={'card-body p-4'}>
            <table className={'table table-borderless mb-5'}>
              <thead>
                <tr className={'text-uppercase font-size-1'} role="row">
                  {Header.map((value) => (
                    <th
                      scope="col"
                      className="font-weight-medium sorting"
                      tabIndex={0}
                      rowSpan={1}
                      colSpan={1}
                      key={value}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        {value}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className={'font-size-1'}>
                {places.map((value, index) => (
                  <tr key={value.key} className={index % 2 === 0 ? '' : 'odd'}>
                    <td className="align-middle">
                      <div className="media align-items-center">
                        <span
                          className={
                            'btn btn-sm btn-icon social-media rounded-circle mr-2 ' +
                            value.button
                          }
                        >
                          <span className="btn-icon__inner font-weight-medium">
                            {value.name.charAt(0)}
                          </span>
                        </span>
                        <span>{value.name}</span>
                      </div>
                    </td>
                    <td className="align-middle text-secondary">
                      {value.vicinity}
                    </td>
                    <td
                      className={
                        'align-middle ' +
                        (value.isOpen ? 'text-success' : 'text-danger')
                      }
                    >
                      {value.isOpen ? 'Open' : 'Closed'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
