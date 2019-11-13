import React from 'react'
import { FlippableCards } from '../mock'

export const SCG = () => {
  const sequenceEquation = (index: number) => index ** 2 - index + 3
  return (
    <div className="container vh-75">
      <div className={'row mt-4'}>
        {FlippableCards.map((value, index) => (
          <div key={index} className={'col-3'}>
            <div className={value.isFlippable ? 'flip-card' : 'non-flip-card'}>
              <div className={'flip-card-inner'}>
                <div
                  className={'flip-card-front'}
                  style={{
                    background: `url(${value.url}), linear-gradient(45deg, #aa1100, #ff4400, #ffbb11, #55aa00, #000055, #fb0082)`,
                  }}
                >
                  <p>{value.content}</p>
                </div>
                {value.isFlippable && (
                  <div
                    className={'flip-card-back'}
                    style={{
                      backgroundImage: `url(${value.url}), linear-gradient(45deg, #aa1100, #ff4400, #ffbb11, #55aa00, #000055, #fb0082)`,
                    }}
                  >
                    <p>{sequenceEquation(index + 1)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
