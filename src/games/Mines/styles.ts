import styled, { css, keyframes } from 'styled-components'
import { CellStatus } from './types'

const tickingAnimation = keyframes`
  0%, 50%, 100% {
    transform: scale(1);
    filter: brightness(1);
    /* background:rgb(255, 255, 255); */
    /* box-shadow: 0 0 1px 1px #ffffff00; */
  }
  25% {
    transform: scale(0.95);
    filter: brightness(1.5);
    /* background:rgb(255, 255, 255); */
    /* box-shadow: 0 0 1px 1px #ffffff99; */
  }
`

const goldReveal = keyframes`
  0% {
    filter: brightness(1);
    /* background: #ffffff; */
    transform: scale(1.1);
  }
  75% {
    filter: brightness(2);
    /* background:rgb(255, 255, 255); */
    transform: scale(1.2);
  }
`

const mineReveal = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  51% {
    background: #ffffff;
    transform: scale(1.6);
  }
`

const hoverPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`

export const Container2 = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100%;
`

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  user-select: none;
  backdrop-filter: blur(20px);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
`

export const Levels = styled.div`
  border-radius: 0px;
  color: gray;
  background: #292a307d;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 60px;
`

export const Level = styled.div<{$active: boolean}>`
  margin: 0 auto;
  border-radius: 5px;
  width: 25%;
  text-align: center;
  padding: 5px 5px;
  opacity: .5;
  text-wrap: nowrap;

  & > div:first-child {
    font-size: 60%;
    color: gray;
  }

  ${(props) => props.$active && css`
    background:rgb(255, 255, 255);
    background: 2px 0px 10px #00000033;
    color:rgb(0, 0, 0);
    opacity: 1;
  `}
`

export const CellButton = styled.button<{status: CellStatus, selected: boolean}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: #3edf7c;
  background-size: 100%;
  border: none;
  border-bottom: 5px solid #00000055;
  border-radius: 4px;
  font-weight: bold;
  aspect-ratio: 1;
  width: 60px;
  transition: background 0.3s, opacity .3s, filter .2s ease;
  font-size: 12px;
  cursor: pointer;

  ${(props) => props.selected && css`
    animation: ${tickingAnimation} .5s ease infinite;
    z-index: 10;
    opacity: 1!important;
  `}

  ${(props) => props.status === 'gold' && css`
    color: white;
    animation: ${goldReveal} .5s ease;
    opacity: 1;
  `}

  ${(props) => props.status === 'mine' && css`
    background: #ff5252;
    z-index: 10;
    animation: ${mineReveal} .3s ease;
    opacity: 1;
  `}

  ${(props) => props.status === 'hidden' && css`
    &:disabled {
      opacity: .5;
    }
  `}

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.5);
  }
`

export const StatusBar = styled.div`
  width: 30%;
  margin-top: 20px;
  display: flex;
  background: transparent;
  border-radius: 5px;
  justify-content: space-between;
  color: white;
  & > div:first-child {
    display: flex;
    color: #000000;
    gap: 20px;
    margin-left: 10px;
  }
`
