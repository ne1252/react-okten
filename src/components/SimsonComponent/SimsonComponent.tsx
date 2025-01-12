import {Isimson} from "../../type/Isipmpson.ts";
import {ReactNode} from "react";
import './SimsonComponent.css'
interface SimsonComponentProps {
    item: Isimson,
    children: ReactNode

}

export const SimsonComponent = ({item,children}: SimsonComponentProps) => {
    return (
        <div className='my-7'>
            <h2>{item.name}{item.surname}</h2>
            <p>{children}</p>
        </div>
    )
}