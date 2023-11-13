import React from 'react'
import { nanoid } from 'nanoid'
import { ContentsWrapper, FlexList, Item, LinkTel, WrappImg } from './ModalWindowContent.styled'

const ModalWindowContent = ({ advert }) => {
    const {
        img,
        make,
        year,
        model,
        rentalPrice,
        type,
        id,
        fuelConsumption,
        engineSize,
        functionalities,
        accessories,
        rentalConditions,
        mileage
    } = advert;

    // get city and country
    const addressString = advert.address;
    const addressParts = addressString.split(',').map(part => part.trim());
    const city = addressParts[1];
    const country = addressParts[2];
    //get conditions
    const rentalConditionsString = rentalConditions;
    const rentalConditionsArray = rentalConditionsString.split('  ').map(condition => condition.trim()); console.log(rentalConditionsString)

    return (
        <ContentsWrapper>
            <WrappImg><img src={img} alt='rental car' /></WrappImg>
            <p>{make}<span className='accent'>{model},</span>{year}
            </p>
            <FlexList>
                <li key={nanoid()}>{city}  |</li>
                <li key={nanoid()}>{country}  |</li>
                <li key={nanoid()}>Id: {id}  |</li>
                <li key={nanoid()}>Year: {year}  |</li>
                <li key={nanoid()}>Type: {type}  |</li>
                <li key={nanoid()}>Fuel Concumption: {fuelConsumption}  |</li>
                <li key={nanoid()}>Engine Size: {engineSize}  |</li>
            </FlexList>
            <p>Accessories and functionalities:</p>
            <FlexList>
                <li key={nanoid()}>{accessories[0]}  |</li>
                <li key={nanoid()}>{accessories[1]}  |</li>
                <li key={nanoid()}>{accessories[2]}  |</li>
                <li key={nanoid()}>{functionalities[0]}  |</li>
                <li key={nanoid()}>{functionalities[1]}  |</li>
                <li key={nanoid()}>{functionalities[2]}</li>
            </FlexList>
            <p>Rental Conditions: </p>
            <FlexList>
                <Item key={nanoid()}>{rentalConditionsArray[0]}</Item>
                {/* <Item key={nanoid()}>{rentalConditionsArray[1]}</Item>
                <Item key={nanoid()}>{rentalConditionsArray[2]}</Item> */}
                <Item key={nanoid()}>Mileage: {mileage.toLocaleString('en-US', { useGrouping: true })}</Item>
                <Item key={nanoid()}>Price: {rentalPrice}</Item>
            </FlexList>

            <div><LinkTel href='tel:+380730000000'>Rental car</LinkTel></div>
        </ContentsWrapper>
    )
}

export default ModalWindowContent